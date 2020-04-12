app.controller('sbaseCtrl', function (mainFactory) {
    var vm = this;
    const processStep = [
        'validate_url',
        'detect_env',
        'get_bootstrap',
        'get_product_single',
        'get_product_single_without_cache'
    ];

    const SBASE_TYPE = {
        'product_single': 1,
    };
    const SBASE_ENV = {
        'dev': 1,
        'stag': 2,
        'prod': 3,
    }

    const process = [];

    vm.sbaseData = {
        shopUrl: {},
        boostrap: {},
        env: 'Production',
    }


    vm.productSingle = {
        id: 0,
        url: '',
        handle: '',
        cacheKeySingle: 'single',
        cacheKeyMap: 'map',
        isWrongCache: false,
        data: {},
        error: '',
        debugLogs: ['Chưa làm gì'],
    }

    // functions
    vm.debugProductSingle = debugProductSingle

    function setStep(step) {
        vm.productSingle.debugLogs.push(step);
    }

    async function detectEnv(url) {
        url = url.replace('http://', '')
        url = url.replace('https://', '')
        let returnObj = {
            env: 'dev',
            envErr: '',
        }

        // if(url.includes('.onshopbase.com')){
        //     returnObj.env = 'prod';
        //     return returnObj
        // }
        //
        // if(url.includes('stag.myshopbase.net')){
        //     returnObj.env = 'stag';
        //     return returnObj
        // }
        //
        // if(url.includes('.myshopbase.net')){
        //     returnObj.env = 'dev';
        //     return returnObj
        // }

        // Try to get bootstrap
        let bootstrap = await mainFactory.doGetAnyway('', `https://api.shopbase.com/api/bootstrap/${url}.json`)
        console.log('Data got', bootstrap)
        if (!bootstrap.error) {
            returnObj.env = 'prod';
            vm.sbaseData.boostrap = bootstrap
            return returnObj
        }

        bootstrap = await mainFactory.doGetAnyway('', `https://gapi.stag.shopbase.net/api/bootstrap/${url}.json`)
        console.log('Data got', bootstrap)
        if (!bootstrap.error) {
            returnObj.env = 'stag';
            vm.sbaseData.boostrap = bootstrap
            return returnObj
        }

        bootstrap = await mainFactory.doGetAnyway('', `https://gapi.dev.shopbase.net/api/bootstrap/${url}.json`)
        console.log('Data got', bootstrap)
        if (!bootstrap.error) {
            returnObj.env = 'dev';
            vm.sbaseData.boostrap = bootstrap
            return returnObj
        }

        returnObj.envErr = 'Cannot detect env';
        return returnObj;
    }

    function buildCacheKeys() {
        //10065965:storefront:products-by-handle:the-cats
        // 10065965:storefront:product-id-to-handle:1000000056249644
    }

    async function debugProductSingle() {
        vm.productSingle.debugLogs = [];
        setStep('Bắt đầu debug')
        setStep('Validate url')
        let {handle, shopUrl, isValid} = validateUrl(SBASE_TYPE.product_single, vm.productSingle.url);
        if (!isValid) {
            setStep('Validate url error')
            vm.productSingle.error = 'Invalid url';
            return
        }
        vm.sbaseData.shopUrl = shopUrl
        vm.productSingle.handle = handle

        let {env, envErr} = await detectEnv(shopUrl);
        if (envErr) {
            vm.productSingle.error = envErr;
            return;
        }
        console.log(`Set env: ${env}`)
        console.log(`Set env: `, vm.sbaseData.boostrap)
        vm.sbaseData.environ = shopUrl;

        // build cachekeys
        // let {cache1, cache2} = buildCacheKeys();

        // let objCache = {};
        // let objNotCache = {};
        // vm.productSingle.isWrongCache = objCache === objNotCache;
        // vm.cacheKeys = buildCacheKeys(SBASE_TYPE.product_single);
    }

    function validateUrl(type, url) {
        let returnObj = {
            handle: '',
            shopUrl: '',
            isValid: true,
        }
        var paths = url.split('/products/');
        if (!paths || paths.length !== 2) {
            returnObj.isValid = false;
            return returnObj
        }
        returnObj.handle = paths[1];

        paths = url.split('/');
        returnObj.shopUrl = paths[0] + '//' + paths[2];

        return returnObj
    }

});