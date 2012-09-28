
<?php
	error_reporting(E_NONE);
	ini_set('display_errors', false);
	if (isset($_GET['stopid']))
  {
		$stopid = $_GET['stopid'];
	} else {
		$stopid = '13895'; // 63 Ossington southbound at Dupont 
	}

	get_final_url('http://webservices.nextbus.com/service/publicXMLFeed?command=predictions&a=ttc&stopId=' . $stopid);
function get_final_url( $url, $timeout = 5 )
{
    $url = str_replace( "&amp;", "&", urldecode(trim($url)) );

    $cookie = tempnam ("/tmp", "CURLCOOKIE");
    $ch = curl_init();
    curl_setopt( $ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows; U; Windows NT 5.1; rv:1.7.3) Gecko/20041001 Firefox/0.10.1" );
    curl_setopt( $ch, CURLOPT_URL, $url );
    curl_setopt( $ch, CURLOPT_COOKIEJAR, $cookie );
    curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, true );
    curl_setopt( $ch, CURLOPT_ENCODING, "" );
    curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
    curl_setopt( $ch, CURLOPT_AUTOREFERER, true );
    curl_setopt( $ch, CURLOPT_CONNECTTIMEOUT, $timeout );
    curl_setopt( $ch, CURLOPT_TIMEOUT, $timeout );
    curl_setopt( $ch, CURLOPT_MAXREDIRS, 10 );
    $content = curl_exec( $ch );
    $response = curl_getinfo( $ch );
    curl_close ( $ch );
    if ($response['http_code'] == 301 || $response['http_code'] == 302)
    {
        ini_set("user_agent", "Mozilla/5.0 (Windows; U; Windows NT 5.1; rv:1.7.3) Gecko/20041001 Firefox/0.10.1");
        $headers = get_headers($response['url']);

        $location = "";
        foreach( $headers as $value )
        {
            if ( substr( strtolower($value), 0, 9 ) == "location:" )
                return get_final_url( trim( substr( $value, 9, strlen($value) ) ) );
        }
    }

    if (    preg_match("/window\.location\.replace\('(.*)'\)/i", $content, $value) ||
            preg_match("/window\.location\=\"(.*)\"/i", $content, $value)
    )
    {
        return get_final_url ( $value[1] );
    }
    else
    {
				$myXML = simplexml_load_string($content);
				//var_dump($myXML->children());
				$myArr = (array)$myXML;
				$myArr2 = (array)$myArr['predictions'][1];
				//echo var_dump($myArr2) . "<p /> <p />";
				$myArr3 = (array)$myArr2['direction'];
				//var_dump( $myArr3['prediction']);
				foreach ($myArr3['prediction'] as $elem)
				{
					$allBuses = (array)$elem;
					foreach($allBuses AS $bus)
					{ 
						$thisbus = (array)$bus;
						$nextArrivals[] = $thisbus['seconds'];
					}
				}
				echo json_encode($nextArrivals);
    }
}

?>