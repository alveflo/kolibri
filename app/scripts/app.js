'use strict';

/**
 * @ngdoc overview
 * @name kolibriApp
 * @description
 * # kolibriApp
 *
 * Main module of the application.
 */
angular
  .module('kolibriApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/raw', {
        templateUrl: 'views/raw.html',
        controller: 'RawCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
