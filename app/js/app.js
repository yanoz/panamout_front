'use strict';

/* App Module */

var phonecatApp = angular.module('panamoutApp', [
  'ngRoute',

  'panamoutControllers',
  'panamoutServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/spots', {
        templateUrl: 'partials/spots-list.html',
        controller: 'SpotListCtrl'
      }).
      when('/spots/:spotsId', {
        templateUrl: 'partials/spot-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/spots'
      });
  }]);
