app.controller('csvCtrl', function (mainFactory, $scope) {
    var vm = this;
    vm.rawSkipColumn = '';
    vm.skipColumns = {};
    vm.isSkipColumn = false;
    vm.groupBy = true;
    vm.convertArray = true;
    vm.output = 'bbbb';
    vm.err = '';


    // functions
    vm.convert = convert
    vm.copy = copy

    function convert() {
        // Parse skip column
        if (vm.rawSkipColumn && vm.rawSkipColumn.length > 0) {
            const lines = vm.rawSkipColumn.split(',');
            for (let i = 0; i < lines.length; i++) {
                vm.skipColumns[lines[i] - 1] = true
            }
            vm.isSkipColumn = true;
        }
        console.log(vm.skipColumns);


        $('#files').parse({
            config: {
                delimiter: "auto",
                complete: convertJSON,
            },
            before: function (file, inputElem) {
                console.log("Parsing file...", file);
            },
            error: function (err, file) {
                console.log("ERROR:", err, file);
            },
            complete: function () {
                console.log("Done with all files");
            }
        });
    }

    function convertJSON(results) {
        if (!results.data) {
            console.log('Invalid data')
            return
        }

        console.log(results)

        const rawHeader = results.data[0]
        let headers = rawHeader.join(",").toLowerCase().split(",");

        // Slugify

        for (let i = 0; i < headers.length; i++) {
            headers[i] = convertToSlug(headers[i])
        }


        // Remove header column
        if (vm.isSkipColumn) {
            let newHeaders = []
            for (let i = 0; i < headers.length; i++) {
                if (vm.skipColumns[i] === true) {
                    continue
                }
                newHeaders.push(headers[i])
            }

            headers = newHeaders
        }

        let output = [];

        const data = results.data;
        let currentGroupName = '';
        let groupItems = [];
        let objArr = {};
        for (let i = 1; i < data.length; i++) {
            const row = data[i];
            let cells = row.join(",").toLowerCase().split(",");

            // Remove skip cells
            if (vm.isSkipColumn) {
                let newCells = []
                for (let j = 0; j < cells.length; j++) {
                    if (vm.skipColumns[j] === true) {
                        continue
                    }
                    newCells.push(cells[j])
                }
                cells = newCells;
            }

            // Not group
            if (!vm.groupBy) {
                let obj = {}
                for (let j = 0; j < cells.length; j++) {
                    obj[headers[j]] = cells[j]
                }
                output.push(obj);
                continue;
            }


            // Not convert "no group item" to array
            if (!vm.convertArray) {
                // reach new group and has old group value -> push and create new group
                if (currentGroupName.length > 0 && cells[0].length > 0) {
                    const tempArray = JSON.parse(JSON.stringify(groupItems));

                    const obj = {
                        group_name: currentGroupName,
                        data: tempArray,
                    };

                    output.push(obj);
                }

                // reach new group
                if (cells[0]) {
                    currentGroupName = cells[0];
                    groupItems = [];
                }

                let isEmpty = true
                let tmpObj = {}
                for (let j = 1; j < cells.length; j++) {
                    if (cells[j]) {
                        tmpObj[headers[j]] = cells[j];
                        isEmpty = false
                    }
                }

                if (isEmpty) {
                    console.log("Skip item ", i, " due to empty data")
                    continue
                }

                groupItems.push(tmpObj);
                continue
            }

            // reach new group and has old group value -> push and create new group
            if (currentGroupName.length > 0 && cells[0].length > 0) {
                const tmpObj = JSON.parse(JSON.stringify(objArr));
                const obj = {
                    group_name: currentGroupName,
                };

                for (let prop in tmpObj) {
                    if(tmpObj.hasOwnProperty(prop)) {
                        obj[prop] = tmpObj[prop]
                    }

                }

                output.push(obj);
            }

            // reach new group
            if (cells[0]) {
                currentGroupName = cells[0];
                // Init  object array
                for (let j = 1; j < headers.length; j++) {
                    objArr[headers[j]] = [];
                }
            }

            for (let j = 1; j < cells.length; j++) {
                if (cells[j]) {
                    objArr[headers[j]].push(cells[j]);
                }
            }
        }

        console.log(output)
        vm.output = JSON.stringify(output);
        $scope.$apply();
        // reset data
        vm.skipColumns = {}
        vm.isSkipColumn = false;
    }

    function copy() {
        copy_to_clipboard('csv_output')
    }

    function convertToSlug(Text) {
        return Text
            .toLowerCase()
            .replace(/ /g, '_')
            .replace(/[^\w-]+/g, '')
            ;
    }

});