'use strict';

/**
 * @ngdoc function
 * @name hotApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hotApp
 */
angular.module('hotApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
