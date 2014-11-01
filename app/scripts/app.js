'use strict';

/**
 * @ngdoc overview
 * @name kolibriApp
 * @description
 * # kolibriApp
 *
 * Main module of the application.
 */
var module = angular.module('kolibriApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

module.service('DataService', function() {
    var _dataContainer = [{
      data: 'test1'
    },{
      data: 'test2'
    }];

    var _getData = function() {
      return this.dataContainer;
    }

    var _addData = function(msg) {
      var time = new Date();
      var timestr = "[" + time.getHours() + ":" + time.getMinutes + ":" + time.getSeconds() + "]";
      var obj = { timestamp: time, data: msg };
      this.dataContainer.push(obj);
    }

    return {
      dataContainer: _dataContainer,
      getData: _getData,
      addData: _addData
    }

  });

module.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
