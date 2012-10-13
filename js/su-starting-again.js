function getServerTime(type) { 
	var time = null; 
	if (type == undefined)
	{
		type='current';
	}
	$.ajax({url: 'http://localhost/get-countdown-time.php?type=' + type, 
			async: false, 
			dataType: 'text', 
			success: function(text) { 
					time = new Date(text); 
			}, error: function(http, message, exc) { 
					time = new Date(); 
	}}); 
	return time; 
}	 // getServerTime()

function setColour(periods)
{
	var secondsLeft = $.countdown.periodsToSeconds(periods);
	
	if (secondsLeft == 0) { // game over, man
		console.log('expired' + secondsLeft);
		timeExpired();
	} else if (secondsLeft < 300 && secondsLeft > 120) // less than five minutes but more than two, so warn them
	{
		console.log('warning ' + secondsLeft);
		$('#countdown').removeClass('alert-muted')
										.removeClass('alert-error')
										.removeClass('alert-info')
										.removeClass('alert-info')
										.removeClass('alert-success')
										.addClass('alert-warning');
	} else if (secondsLeft < 120) { // it's less than two minutes. Danger!
		console.log('error' + secondsLeft);
		$('#countdown').removeClass('alert-muted')
										.removeClass('alert-warning')
										.removeClass('alert-info')
										.removeClass('alert-success')
										.addClass('alert-error');
	} else { // in the countdown, but it's more than five minutes
		console.log('success' + secondsLeft);
		$('#countdown').removeClass('alert-muted')
												.removeClass('alert-warning')
												.removeClass('alert-info')
												.removeClass('alert-error')
												.addClass('alert-success');
	}

} // setColour()

function timeExpired()
{
	$('#countdown').removeClass('alert-muted')
											.removeClass('alert-warning')
											.removeClass('alert-error')
											.removeClass('alert-success')
											.addClass('alert-info')
											.html('We\'re underway!<br /> <br />Please join us in the classroom.');
} // timeExpired()

jQuery(document).ready(function() {
	$('#timepicker').timepicker();
	$('#countdown').countdown({ 
			until:getServerTime('end'), 
			format: 'H:M:S',
			compact: true,
			onExpiry: timeExpired,
			onTick: setColour,
			serverSync: getServerTime('current')
	}); 
	 
}); //jQuery(document).ready()