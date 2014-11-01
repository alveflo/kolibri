'use strict';

var client;


var handleIncoming = function(msg) {
	$('#raw-log-textarea').append(msg.data);
}

var showErrorMsg = function(msg) {
	var glyph = '<span class="glyphicon glyphicon-remove-circle"></span>';
	$('#connection_result').slideDown();
	$('#connection_result').removeClass('bg-success');
	$('#connection_result').addClass('bg-danger');
	$('#connection_result').html(glyph + ' ' + msg.toString());
}

var showSuccessMsg = function(msg) {
	var glyph = '<span class="glyphicon glyphicon-ok-circle"></span>';

	$('#connection_result').slideDown();
	$('#connection_result').removeClass('bg-danger');
	$('#connection_result').addClass('bg-success');
	$('#connection_result').html(glyph + ' ' + msg);
}

function createSocket(url) {
	try {
		client = new WebSocket(url);
	}
	catch (ex) {
		showErrorMsg(ex);
		return;
	}
	$('#connection_result').slideDown();
	client.onerror = function(e) {
		showErrorMsg("Unable to connect to server!");
	}

	client.onopen = function() {
		showSuccessMsg("Connection established!");
	}

	client.onmessage = function(msg)
	{
		handleIncoming(msg);
	}
};