<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>

		<title>Autodesk tools</title><link href="/adsk_web_entry/css/bbStyles.css" rel="stylesheet" type="text/css">

		<table width="100%" border="0" cellpadding="0" cellspacing="0">
			<tr>
				<td width="80" align="right">

					<img src="/adsk_web_entry/images/title.gif" height="49">
				</td>
				<td align="left">
					<img src="/adsk_web_entry/images/bar.gif" width="100%" height="49">
				</td>
			</tr>
		</table>


	</head>

	<a href = "http://www.autodesk.com"><img src="/adsk_web_entry/images/autodesk.gif" BORDER=0></a>


<body>


        <?php 

	function runCommand($cmd)
	{
		$h = popen($cmd, "r");
		$s = "";
       
		while (!feof($h))
		{
			$s .= fread($h, 2048);
		}       
       
		pclose($h);
		return $s;
	}

	if (strcmp(php_uname("s"), "Darwin") == 0)
	{
		$MY_HTMLDIR = "/Library/WebServer/Documents";
		$my_dirs = array("/SystemCentral", "/backburner", "/WiretapCentral");
		$my_dirs_UI = array("SystemCentral", "Backburner", "WiretapCentral");
		$my_hostname = php_uname('n');
		$my_os = runCommand("/usr/bin/sw_vers -productName") . " " . runCommand("/usr/bin/sw_vers -productVersion");
	}
	else
	{
		$MY_HTMLDIR = "/var/www/html";
		$my_dirs = array("/SystemCentral", "/backburner", "/Backburner", "/wiretapcentral");
		$my_dirs_UI = array("SystemCentral", "Backburner", "Backburner Web Monitor", "WiretapCentral");
		$my_hostname = fread(popen("/bin/hostname --fqdn", "r"),2096);
		$my_os = runCommand("/bin/uname -r");
	}

	echo "<br>&nbsp $my_hostname";
	echo "<br>&nbsp $my_os";
	echo "<br><br>";
        echo "<div align=\"center\"><img src=\"/adsk_web_entry/images/line.gif\" width=\"100%\" height=\"5\"></div>";
        echo "<br><br>";
		
	$my_height = 1;
	$my_width = 350;
	$my_total_apps = 0;
	for ($i = 0; $i < count($my_dirs); $i++)
	{
		$my_imp = array($MY_HTMLDIR,$my_dirs[$i]);
		if (file_exists(implode($my_imp)))
			$my_total_apps++;			
	}

	for ($i = 0; $i < count($my_dirs); $i++)
	{
		$my_imp = array($MY_HTMLDIR,$my_dirs[$i]);
		if (file_exists(implode($my_imp)))
		{
			echo "<P><h1 align=\"center\"/><a href=\"$my_dirs[$i]\" class=\"tLink\">$my_dirs_UI[$i]</a></P>";
			if ($i < $my_total_apps - 1)
				echo "<div align=\"center\"><img src=\"/adsk_web_entry/images/line.gif\" width=\"$my_width\" height=\"$my_height\"></div>";
		}
	}

	?>


</body>
</html>
