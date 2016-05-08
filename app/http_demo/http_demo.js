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
            "number": "value1",
            "cnt": "cnt1"
        },
        {
            "name": "item2",
            "number": "value2",
            "cnt": "cnt2"
        },
        {
            "name": "item3",
            "number": "value3",
            "cnt": "cnt3"
        },
        {
            "name": "item4",
            "number": "value4",
            "cnt": "cnt4"
        },
        {
            "name": "item5",
            "number": "value5"
        },
        {
            "name": "item5",
            "number": "value1"
        },
        {
            "name": "item7",
            "number": "value2"
        },
        {
            "name": "item8",
            "number": "value3"
        },
        {
            "name": "item9",
            "number": "value4"
        },
        {
            "name": "item10",
            "number": "value5"
        },
        {
            "name": "item11",
            "number": "value1"
        },
        {
            "name": "item12",
            "number": "value2"
        },
        {
            "name": "item13",
            "number": "value3"
        },
        {
            "name": "item4",
            "number": "value4"
        },
        {
            "name": "item5",
            "number": "value5"
        },
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

    $scope.filteredMockList = [];
    $scope.totalItems = $scope.mockList.length;
    $scope.currentPage = 1;
    $scope.numPerPage = 10;
    $scope.maxSize = 5;
    $scope.$watch("currentPage + numPerPage", function() {
        var begin = (($scope.currentPage - 1) * $scope.numPerPage)
            , end = begin + $scope.numPerPage;

        $scope.filteredMockList = $scope.mockList.slice(begin, end);
    });
});