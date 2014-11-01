'use strict';

var sendBtnClick = function() {
  var val = $('#raw-log-input').val();
  if (val != '') {
    $('#raw-log-textarea').append('\n> ' + val);
    client.send(val);
  }
};

/**
 * @ngdoc function
 * @name kolibriApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kolibriApp
 */
angular.module('kolibriApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.init = function() {
    	 $rootScope.socketUrl = "";
    }

    $scope.sendBtnClick = function() {
      sendBtnClick();
    }

    $scope.connectBtnClick = function() {
    	var url = $('#socket-url').val();
    	$rootScope.socketUrl = url;
    	createSocket(url);
    }

  });
