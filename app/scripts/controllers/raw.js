'use strict';


var sendBtnClick = function() {
	var val = $('#raw-log-input').val();
	if (val != '') {
		$('#raw-log-textarea').append('\n> ' + val);
	}
};


/**
 * @ngdoc function
 * @name kolibriApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kolibriApp
 */
angular.module('kolibriApp')
  .controller('RawCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.sendBtnClick = function() {
    	sendBtnClick();
    }
  });
