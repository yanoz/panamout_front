'use strict';

/* Controllers */

var panamoutControllers = angular.module('panamoutControllers', []);

panamoutControllers.controller('SpotListCtrl', ['$scope', 'Spot',
  function($scope, Spot) {
    $scope.spots = Spot.query();
    $scope.orderProp = 'age';
  }]);

panamoutControllers.controller('SpotDetailCtrl', ['$scope', '$routeParams', 'Spot',
  function($scope, $routeParams, Spot) {
    $scope.spot = Spot.get({spotId: $routeParams.spotId}, function(phone) {
      $scope.mainImageUrl = spot.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
