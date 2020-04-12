angular
        .module('app')
        .factory('mainFactory', function ($http) {
            var factory = {
                doPost: doPost,
                doGet: doGet
            };

            function doPost(data, uri) {
                return  $http({
                    url: uri,
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    data: data
                }).then(function (response) {
                    return response.data;
                });
            }

            function doGet(data, uri) {
                return  $http({
                    url: uri,
                    method: "GET",
                    headers: {'Content-Type': 'application/json'},
                    data: data
                }).then(function (response) {
                    debugger;
                    return response.data;
                });
            }
            return factory;
        });