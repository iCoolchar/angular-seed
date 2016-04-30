'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngNotify',
  'ui.bootstrap',
  'myApp.view1',
  'myApp.view2',
  'myApp.http_demo',
  'myApp.tab_demo',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
