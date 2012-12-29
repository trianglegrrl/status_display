function createCountdown()
{

	$('#countdown').countdown('destroy'); 
	$('#countdown').countdown({ 
			until:getServerTime('end'), 
			format: 'H:M:S',
			compact: true,
			onExpiry: timeExpired,
			onTick: setColour,
			serverSync: getServerTime('current')
	}); 
	 
}

function getServerTime(type) { 
	var time = null; 
	if (type == undefined)
	{
		type='current';
	}
	$.ajax({url: 'http://sutils.singularityu.org/status_display/get-countdown-time.php?type=' + type, 
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
// 	$('#countdown').countdown('option',  'until', getServerTime('end')); 
	var secondsLeft = $.countdown.periodsToSeconds(periods);
	
	if (secondsLeft == 0) { // game over, man
		console.log('expired = ' + secondsLeft + " seconds");
		timeExpired();
	} else if (secondsLeft <= 300 && secondsLeft >= 120) // less than five minutes but more than two, so warn them
	{
		console.log('warning = ' + secondsLeft + " seconds");
		$('#countdown').removeClass('alert-muted')
										.removeClass('alert-error')
										.removeClass('alert-info')
										.removeClass('alert-info')
										.removeClass('alert-success')
										.addClass('alert-warning');
	} else if (secondsLeft < 120) { // it's less than two minutes. Danger!
		console.log('under two minutes = ' + secondsLeft + " seconds");
		$('#countdown').removeClass('alert-muted')
										.removeClass('alert-warning')
										.removeClass('alert-info')
										.removeClass('alert-success')
										.addClass('alert-error');
	} else { // in the countdown, but it's more than five minutes
		console.log('success' + secondsLeft + " seconds");
		$('#countdown').removeClass('alert-muted')
												.removeClass('alert-warning')
												.removeClass('alert-info')
												.removeClass('alert-error')
												.addClass('alert-success');
	}

} // setColour()

function timeExpired()
{
	overSeconds = 0;
	$('#countdown').removeClass('alert-muted')
											.removeClass('alert-warning')
											.removeClass('alert-error')
											.removeClass('alert-success')
											.addClass('alert-info')
											.html("<br />Time's up!");
  
} // timeExpired()

function setTime(datetimeText, datepickerInstance)
{
  console.log("datetimeText is " + datetimeText);
	$.ajax({url: 'http://sutils.singularityu.org/status_display/get-countdown-time.php?type=set' + '&time=' + datetimeText, 
			async: false, 
			dataType: 'text', 
			success: function(text) { 
					time = new Date(text); 
					console.log(time);
			}, error: function(http, message, exc) { 
					time = new Date(); 
	}}); 
} // timeExpired()


jQuery(document).ready(function() {
	createCountdown();
	setInterval(function () {
	  createCountdown();
	}, 5000);
	
  $('#submit-time').click (function () {
		setTime($('#time-hours').val() + ":" + $('#time-minutes').val() + ":" + $('#time-seconds').val(), null);
  });
}); //jQuery(document).ready()
