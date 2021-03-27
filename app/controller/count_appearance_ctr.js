app.controller('countAppearanceCtrl', function (mainFactory, $scope) {
    const vm = this;
    vm.input = `Em từng xem một người là thế giới. Em từng yêu đậm sâu`
    vm.ascOutput = [];
    vm.descOutput = [];
    convert();
    vm.err = '';

    // Cached
    vm.sorted = false;
    vm.sortMode = 1; // 0 = desc, 1 = asc
    vm.sortText = '';

    // functions
    vm.convert = convert
    vm.toggleSort = toggleSort


    function toggleSort() {
        if (typeof vm.sortMode === 'undefined') {
            vm.sortMode = 0;
        }
        vm.sortMode = (vm.sortMode + 1) % 2;
        vm.sortText = ['giảm', 'tăng'][vm.sortMode];

        if (!vm.sorted) { // only sort if miss cache
            vm.ascOutput.sort(compare);

            for (let i = vm.ascOutput.length - 1; i > 0; i--) {
                vm.descOutput.push(vm.ascOutput[i]);
            }

            vm.sorted = true;
        }

        if (vm.sortMode % 2 === 0 ) {
            vm.output = vm.descOutput;
            return
        }

        vm.output = vm.ascOutput;
    }

    function convert() {
        const words = vm.input.split(/\s+/);
        vm.ascOutput = [];
        vm.descOutput = [];
        vm.output = [];

        const map = {};
        for (let i = 0; i < words.length; i++) {
            let currentValue = map[words[i]];

            if (!currentValue) {
                map[words[i]] = 1;
                continue
            }

            map[words[i]]++;
        }

        for (const property in map) {
            vm.ascOutput.push({
                word: property,
                count: map[property]
            })
        }

        vm.sorted = false;
        toggleSort();

    }

    function compare(a, b) {
        if (a.count < b.count) {
            return -1;
        }
        if (a.count > b.count) {
            return 1;
        }
        return 0;
    }

});