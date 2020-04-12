app.controller('sbaseCtrl', function () {
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
        shop: {},
        shopUrl: {},
        boostrap: {},
        env: 'Production',
    }


    vm.productSingle = {
        id: 0,
        url: '',
        cacheKeySingle: 'single',
        caceKeyMap: 'map',
        isWrongCache: false,
        data: {},
        error: '',
        currentStep: 'Chưa làm gì'
    }

    function debugProductSingle() {
        let isValidUrl = validateUrl(SBASE_TYPE.product_single, vm.productSingle.url);
        if (!isValidUrl) {
            vm.productSingle.error = 'Invalid url';
            return
        }

        let {shop, shopErr} = getShop();
        if (shopErr) {
            vm.productSingle.error = shopErr;
            return
        }
        vm.sbaseData.shop = shop

        let {env, envErr} = detectEnv();
        if (envErr) {
            vm.productSingle.error = envErr;
            return;
        }

        vm.sbaseData.env = env;

        let {bootstrap, bootstrapErr} = getBootstrap(vm.productSingle.url, env);
        if (bootstrapErr) {
            vm.productSingle.error = bootstrapErr;
            return;
        }

        let objCache = {};
        let objNotCache = {};
        vm.productSingle.isWrongCache = objCache === objNotCache;
        vm.cacheKeys = buildCacheKeys(SBASE_TYPE.product_single);
    }

    function validateUrl(type, url) {
        switch (type) {
            case SBASE_TYPE.product_single:
                break;
        }

        return true
    }

});