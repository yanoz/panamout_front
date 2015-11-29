'use strict';

/* Services */

var panamoutServices = angular.module('panamoutServices', ['ngResource']);

panamoutServices.factory('Spot', ['$resource',
  function($resource){
    return $resource('http://localhost:8010/spot?offset=0&count=10', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);