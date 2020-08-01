app.controller('replacerCtrl', function (mainFactory) {
    var vm = this;
    vm.input = `"I am simple string. Remove double quote for me"`;
    vm.output = "";
    vm.regex = /"/gi;
    vm.oldRegexs = [];
    vm.err = '';


    // functions
    vm.convert = convert
    vm.copy = copy

    function convert() {
        if (!vm.input) {
            vm.err = 'Không nhập gì sao tui convert được pa =.=! ';
            return
        }

        vm.output = vm.input.replace(vm.regex, '')

    }

    function copy() {
        copy_to_clipboard('output')
    }

});