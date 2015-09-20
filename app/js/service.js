'use strict';

/* Services */

var panamoutServices = angular.module('panamoutServices', ['ngResource']);

panamoutServices.factory('Spot', ['$resource',
  function($resource){
    return $resource('spots/:spotId.json', {}, {
      query: {method:'GET', params:{spotId:'spots'}, isArray:true}
    });
  }]);