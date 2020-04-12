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
//                    Tool state
                    .state('tool', {
                        url: '/tool'
                    })
                    .state('tool.postman', {
                        url: '/postman',
                        controller: 'postmanCtrl',
                        templateUrl: 'templates/postman.html',
                        controllerAs: 'pm'
                    }).state('tool.snippet', {
                        url: '/snippet',
                        controller: 'snippetCtrl',
                        templateUrl: 'templates/snippet.html',
                        controllerAs: 'sn'
                    })
                    // .state('tool.bookmark', {
                    //     url: '/bookmark',
                    //     templateUrl: 'templates/bookmark.html',
                    //     controller: 'bookmarkCtrl',
                    //     controllerAs: 'bm'
                    // })

        });