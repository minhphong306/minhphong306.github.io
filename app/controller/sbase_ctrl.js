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

    var sbaseData = {
        boostrap: {},
        env: '',
    }

    const process = [];
    vm.productSingle = {
        url: '',
        cacheKeys: [],
        isWrongCache: false,
        data: {},
        error: '',
    }

    function debugProductSingle() {
        let isValidUrl = validateUrl(SBASE_TYPE.product_single, vm.productSingle.url);
        if (!isValidUrl) {
            vm.productSingle.error = 'Invalid url';
            return
        }

        let {env, envErr} = detectEnv();
        if (envErr) {
            vm.productSingle.error = envErr;
            return;
        }
        sbaseData.env = env;

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