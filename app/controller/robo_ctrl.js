app.controller('roboCtrl', function (mainFactory) {
    var vm = this;
    vm.input = 'aaa';
    vm.output = 'bbbb';
    vm.err = '';


    // functions
    vm.convert = convert
    vm.copy = copy

    function convert() {
        if (!vm.input) {
            vm.err = 'Không nhập gì sao tui convert được pa =.=! ';
            return
        }

        vm.err = '';
        vm.output = '';
        const arr = vm.input.split('\n');
        let hasArray = false;
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
            // Empty line or comment line
            if (item === '' || /^\/.+\/$/.test(item)) {
                continue;
            }

            if (item === '}') {
                // End of object, not end of array
                if (i < arr.length - 1) {
                    item += ',';
                    hasArray = true
                }
            } else {
                item = item.replace(/(.+)NumberLong\((\d+)\)(.+)/, '$1$2$3');
            }

            vm.output += item + '\n';
        }

        if (hasArray) {
            vm.output = '[' + vm.output + ']'
        }
    }

    function copy() {
        copy_to_clipboard('rb_output')
    }

});