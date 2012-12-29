<?php 
	ini_set("display_errors", "on");
	error_reporting(E_ALL);
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
		$theTime = DateTime::createFromFormat('H:i:s', $getTime); 
	} else if ($_REQUEST['type'] == 'set') {
		$date = new DateTime();
		list($h, $m, $s) = preg_split("/:/", $_REQUEST['time']);
		if ($h == "undefined" || !strlen($h)) $h = 0;
		if ($m == "undefined" || !strlen($m)) $m = 0;
		if ($s == "undefined" || !strlen($s)) $s = 0;
		$date->add(new DateInterval("PT{$h}H{$m}M{$s}S"));
		$date->format('H:i:s'); 
		$getTime = file_put_contents($tmpFile, $date->format('H:i:s'));
		$theTime = DateTime::createFromFormat('H:i:s', $date->format('H:i:s'));
	} else {
		$theTime = new DateTime();
	}
	echo $theTime->format("M j, Y H:i:s O")."\n"; 
?>
