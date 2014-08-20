'use strict';

/**
 * @ngdoc function
 * @name hotApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hotApp
 */
angular.module('hotApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
