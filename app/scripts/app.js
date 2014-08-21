'use strict';

/* global app:true */

/**
 * @ngdoc overview
 * @name hotApp
 * @description
 * # hotApp
 *
 * Main module of the application.
 */
var app = angular
  .module('hotApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'FrontCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/video', {
        templateUrl: 'views/video.html',
        controller: 'VideoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
