'use strict';
var client;

var successMsg = '<span class="glyphicon glyphicon-ok-circle"></span> Connection established!';
var refusedMsg = '<span class="glyphicon glyphicon-remove-circle"></span> Unable to connect to server!';

var createSocket = function() {
	client = new WebSocket('ws://localhost:81/todos');
	$('#connection_result').slideDown();
	client.onerror = function(e) {
		$('#connection_result').removeClass('bg-success');
		$('#connection_result').addClass('bg-danger');
		$('#connection_result').html(refusedMsg);
	}

	client.onopen = function() {
		$('#connection_result').removeClass('bg-danger');
		$('#connection_result').addClass('bg-success');
		$('#connection_result').html(successMsg);
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
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.connectBtnClick = function() {
    	createSocket();
    }

  });
