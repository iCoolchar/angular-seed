'use strict';

angular.module('myApp.tab_demo', ['ngRoute','ngNotify'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/tab_demo', {
            templateUrl: 'tab_demo/tab_demo.html',
            controller: 'TabDemoCtrl'
        });
    }])

    .controller('TabDemoCtrl', function($scope, $http, ngNotify) {

    });