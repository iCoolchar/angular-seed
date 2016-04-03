'use strict';

angular.module('myApp.http_demo', ['ngRoute','ngNotify'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/http_demo', {
        templateUrl: 'http_demo/http_demo.html',
        controller: 'HttpDemoCtrl'
    });
}])

.controller('HttpDemoCtrl', function($scope, $http, ngNotify) {
    $scope.testGet = function () {
        var args = {testArg: "testArg"};
        ngNotify.set("test", "sucess");
        $http.get("/test_api", {params:args}).then(function (response) {
            if (response.data.status == 1) {
                console.log("sucess");
            } else {
                ngNotify.set(response.data.error.msg, "error");
            }
        });
    };
    $scope.testPost = function () {
        var args = {testArg: "testArg"};
        $http.post("/test_api", args).then(function (response) {
            if (response.data.status == 1) {
                console.log("sucess");
            } else {
                ngNotify.set(response.data.error.msg, "error");
            }
        });
    };

    $scope.mockList = [
        {
            "name": "item1",
            "number": "value1"
        },
        {
            "name": "item2",
            "number": "value2"
        },
        {
            "name": "item3",
            "number": "value3"
        },
        {
            "name": "item4",
            "number": "value4"
        },
        {
            "name": "item5",
            "number": "value5"
        }
    ];
});