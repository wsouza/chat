$(document).ready(function () {
		
	//console.log();
	
	$('.chatbox__body').scrollLeft(300);
	$('.chatbox__body').scrollTop(50);
	
	var $chatbox = $('.chatbox'),
		$chatboxTitle = $('.chatbox__title'),
		$chatboxTitleClose = $('.chatbox__title__close'),
		$chatboxCredentials = $('.chatbox__credentials');
	$chatboxTitle.on('click', function() {
		$chatbox.toggleClass('chatbox--tray');
	});
	$chatboxTitleClose.on('click', function(e) {
		e.stopPropagation();
		$chatbox.addClass('chatbox--closed');
	});
	$chatbox.on('transitionend', function() {
		if ($chatbox.hasClass('chatbox--closed')) $chatbox.remove();
	});
	$chatboxCredentials.on('submit', function(e) {
		e.preventDefault();
		$chatbox.removeClass('chatbox--empty');
	});
	
	$('#enviarMsgChatbot').keydown(function(event) {
		if (event.keyCode == 13) {
			console.log('Envia mensagem:' + $('#enviarMsgChatbot').val());
			$('#enviarMsgChatbot').val('');
			return false;
		}
		
	});

});