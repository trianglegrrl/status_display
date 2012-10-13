<?php 
	date_default_timezone_set('America/Los_Angeles'); // set to local SU time
	$tmpFile = '/tmp/su-countdown-time.txt';
	
	// This script will send you two times: if you send an ajax request "type=end", it will 
	// grab the ending time from the SHM segment. Otherwise, it returns the server time
	// so that all clients can be synchronized to the same time.
	if ($_REQUEST['type'] == 'end' && file_exists($tmpFile))
	{
		$getTime = file_get_contents($tmpFile);
		$theTime = DateTime::createFromFormat('h:i', $getTime); 
	} else if ($_REQUEST['type'] == 'set') {
		$getTime = file_put_contents($tmpFile, $_REQUEST['time']);
		$theTime = DateTime::createFromFormat('h:i', $_REQUEST['time']);
		echo $_REQUEST['time'];
	} else {
		$theTime = new DateTime();
	}
	echo $theTime->format("M j, Y H:i:s O")."\n"; 
?>