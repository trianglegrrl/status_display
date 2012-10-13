<?php 
	header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1 
	header("Expires: Fri, 1 Jan 2010 00:00:00 GMT"); // Date in the past 
	header("Content-Type: text/plain; charset=utf-8"); // MIME type 
	date_default_timezone_set('America/Los_Angeles'); // set to local SU time
	$tmpFile = '/tmp/su-countdown-time.txt';
	
	// This script will send you two times: if you send an ajax request "type=end", it will 
	// grab the ending time from the SHM segment. Otherwise, it returns the server time
	// so that all clients can be synchronized to the same time.
	if ($_REQUEST['type'] == 'end' && file_exists($tmpFile))
	{
		$getTime = file_get_contents($tmpFile);
		$theTime = DateTime::createFromFormat('H:i', $getTime); 
	} else if ($_REQUEST['type'] == 'set') {
		$getTime = file_put_contents($tmpFile, $_REQUEST['time']);
		$theTime = DateTime::createFromFormat('H:i', $_REQUEST['time']);
	} else {
		$theTime = new DateTime();
	}
	echo $theTime->format("M j, Y H:i:s O")."\n"; 
?>