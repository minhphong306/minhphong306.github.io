angular
    .module('app')
    .factory('mainFactory', function ($http) {
        var factory = {
            doPost: doPost,
            doGet: doGet,
            doGetAnyway: doGetAnyway,
        };

        function doPost(data, uri) {
            return $http({
                url: uri,
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                data: data
            }).then(function (response) {
                return response.data;
            });
        }

        function doGet(data, uri) {
            return $http({
                url: uri,
                method: "GET",
                headers: {'Content-Type': 'application/json'},
                data: data
            }).then(function (response) {
                return response.data;
            });
        }

        function doGetAnyway(data, uri) {
            return $http({
                url: uri,
                method: "GET",
                headers: {'Content-Type': 'application/json'},
                data: data
            }).then(function (res) {
                return res.data
            }).catch(function (err) {
                return err.data
            });
        }

        return factory;
    });