app.controller('fbCurlCtrl', function (mainFactory, $scope) {
    var vm = this;
    const initTs = Math.floor(new Date().getTime() / 1000)
    vm.input = ''
    vm.output = ''
    convert();
    vm.err = '';


    // functions
    vm.convert = convert
    vm.copy = copy

    function convert() {
        vm.err = '';
        if (!vm.input) {
            return
        }

        const lines = vm.input.split('\n');
        let url = '';
        let rawBody = '';

        for (let i = 0; i < lines.length; i++) {
            const item = lines[i];
            if (item.includes("https://graph.facebook.com")) {
                url = item.substring(item.indexOf("https://graph.facebook.com"), item.length)
                continue;
            }

            if (item.includes('{"res_body"')) {
                rawBody = item;
            }
        }

        if (url === '' || rawBody === '') {
            vm.err = 'Không tìm thấy url/body. Kiểm tra lại đi'
            return
        }

        const body = parseMyJson(rawBody);
        if (!body || !body.sent_body) {
            vm.err = 'Body có vẻ không đúng'
            return
        }

        body.sent_body = body.sent_body.replace(/'/g, "\\'");

        console.log(body)

        vm.output = `curl --location --request POST '${url}' \\
--header 'Content-Type: application/json' \\
--data-raw '${body.sent_body}'`
    }

    function copy() {
        copy_to_clipboard('curl_output')
    }

});