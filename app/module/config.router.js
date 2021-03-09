angular
    .module('app')
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                // controller: 'indexCtrl',
                // controllerAs: 'index',
                templateUrl: 'templates/index.php'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'templates/about.php'
            })
            .state('project', {
                url: '/project',
                templateUrl: 'templates/project.php'
            })
            .state('tool', {
                url: '/tool'
            })
            .state('tool.postman', {
                url: '/postman',
                controller: 'postmanCtrl',
                templateUrl: 'templates/postman.html',
            }).state('tool.snippet', {
            url: '/snippet',
            controller: 'snippetCtrl',
            templateUrl: 'templates/snippet.html',
        })
            .state('tool.sbase', {
                url: '/sbase',
                controller: 'sbaseCtrl',
                templateUrl: 'templates/sbase.html',
                controllerAs: 'sb',
            })
            .state('tool.robo3t', {
                url: '/robo3t',
                controller: 'roboCtrl',
                templateUrl: 'templates/robo.html',
                controllerAs: 'rb',
            })

            .state('tool.replacer', {
                url: '/replacer',
                controller: 'replacerCtrl',
                templateUrl: 'templates/replacer.html',
                controllerAs: 'rp',
            })

            .state('tool.bookmark-maker', {
                url: '/bookmark-maker',
                controller: 'bookmarkCtrl',
                templateUrl: 'templates/bookmark-maker.html',
                controllerAs: 'bm',
            })

            .state('tool.csv-2-json', {
                url: '/csv-2-json',
                controller: 'csvCtrl',
                templateUrl: 'templates/csv.html',
                controllerAs: 'csv',
            })

            .state('tool.timestamp', {
                url: '/timestamp',
                controller: 'timestampCtrl',
                templateUrl: 'templates/timestamp.html',
                controllerAs: 'ts',
            })
    });