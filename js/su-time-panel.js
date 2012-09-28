var weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";

function zeroPad(num, places) {
	var zero = places - num.toString().length + 1;
	return Array(+(zero > 0 && zero)).join("0") + num;
}
function calcTime(offset) {

		// create Date object for current location
		d = new Date();

		// convert to msec
		// add local time zone offset
		// get UTC time in msec
		utc = d.getTime() + (d.getTimezoneOffset() * 60000);

		// create new Date object for different city
		// using supplied offset
		nd = new Date(utc + (3600000*offset));

		// return time as a string
		return zeroPad(nd.getHours(), 2) + ':' + zeroPad(nd.getMinutes(), 2) + ':' + zeroPad(nd.getSeconds(), 2);

}
function calcDate(offset) {

		// create Date object for current location
		d = new Date();

		// convert to msec
		// add local time zone offset
		// get UTC time in msec
		utc = d.getTime() + (d.getTimezoneOffset() * 60000);

		// create new Date object for different city
		// using supplied offset
		nd = new Date(utc + (3600000*offset));

		// return date as a string
			return weekday[nd.getDay()];
}

function cos(deg) {
		return Math.cos(deg * Math.PI / 180);
}
function sin(deg) {
		return Math.sin(deg * Math.PI / 180);
}
function h_to_hms(h) {
		var x = h * 3600;
		var hh = Math.floor(x / 3600);
		if (hh < 10) hh = "0" + hh;
		var y = x % 3600;
		var mm = Math.floor(y / 60);
		if (mm < 10) mm = "0" + mm;
		var ss = Math.round(y % 60);
		if (ss < 10) ss = "0" + ss;
		return hh + ":" + mm + ":" + ss;
}
function add_commas(n) {
		n += "";
		var x = n.split(".");
		var x1 = x[0];
		var x2 = x.length > 1 ? "." + x[1] : "";
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
				x1 = x1.replace(rgx, "$1" + "," + "$2");
		}
		return x1 + x2;
}
function within_24(n) {
		if (n < 0) {
				n += 24;
		} else if (n >= 24) {
				n -= 24;
		}
		return n;
}

function Stardate(now)
{
				var YY;
				var DDD;
				var T;
				var DDDadd = 0;  // days so far in the year
				var Mod;
				var TT;

				EarthMonth = now.getMonth();
				EarthDay = now.getDate();
				EarthYear = now.getYear() + 1900;
				EarthHours = now.getHours();
				EarthMinutes = now.getMinutes();

				mod = EarthYear / 4;
				mod = parseInt(mod);
				mod = EarthYear - (4 * mod ) ;

				if (mod == 0)
								Leap_Year=1;
				else Leap_Year = 0;


				if (EarthMonth == 1)
								DDDadd = 0;

				if (EarthMonth == 2)
								DDDadd = 31;

				if (EarthMonth == 3)
								DDDadd = 59 + Leap_Year;

				if (EarthMonth == 4)
								DDDadd = 90 + Leap_Year;

				if (EarthMonth == 5)
								DDDadd = 120 + Leap_Year;

				if (EarthMonth == 6)
								DDDadd = 151 + Leap_Year;

				if (EarthMonth == 7)
								DDDadd = 181 + Leap_Year;

				if (EarthMonth == 8)
								DDDadd = 212 + Leap_Year;

				if (EarthMonth == 9)
								DDDadd = 243 + Leap_Year;

				if (EarthMonth == 10)
								DDDadd = 273 + Leap_Year;

				if (EarthMonth == 11)
								DDDadd = 304 + Leap_Year;

				if (EarthMonth == 12)
								DDDadd = 334 + Leap_Year;

				YY = (EarthYear) - 2323;
				DDD= ((EarthDay + DDDadd) / (365 + Leap_Year)) * 1000;

				T = ((EarthHours * 60) + EarthMinutes)/1440;
				T = Math.floor(T*10)/10;
				//T += 0.1;
				
				DDD = Math.ceil(DDD);

				if (YY > 0)
								return YY * 1000 + DDD + T;
				else
								return YY * 1000 - DDD - T;
}
function stardate() 
{
	now = new Date();
	nowMonth = now.getMonth();
	nowDate = now.getDate();
	nowYear = now.getYear() + 1900;
	nowHour = now.getHours();
	nowMinute = now.getMinutes();
	nowSecond = now.getSeconds();
	now = null;
	var Elapsed = nowSecond + 60 * (nowMinute) + 3600 * (nowHour) +86400 * (nowDate - 1)

	if (nowMonth>10) {var Elapsed = Elapsed + (86400*334)} 
		else if (nowMonth>9) {var Elapsed = Elapsed + (86400*304)} 
		else if (nowMonth>8) {var Elapsed = Elapsed + (86400*273)}
		else if (nowMonth>7) {var Elapsed = Elapsed + (86400*243)}
		else if (nowMonth>6) {var Elapsed = Elapsed + (86400*212)}
		else if (nowMonth>5) {var Elapsed = Elapsed + (86400*181)}
		else if (nowMonth>4) {var Elapsed = Elapsed + (86400*151)}
		else if (nowMonth>3) {var Elapsed = Elapsed + (86400*120)}
		else if (nowMonth>2) {var Elapsed = Elapsed + (86400*90)}
		else if (nowMonth>1) {var Elapsed = Elapsed + (86400*59)}
		else if (nowMonth>0) {var Elapsed = Elapsed + (86400*31)}
	if (nowYear>2100) {var nowYear = nowYear-1900}

	var thisyear = Math.round(Elapsed / 315.36) / 100
	var lpyra= Math.round(nowYear/400)
	var lpyrb= nowYear/400
	if (lpyra=lpyrb) {
	if (nowMonth>2) {var Elapsed = Elapsed + (86400)}
	}
	var issue = Math.round(((nowYear-2323)/100)-.5);
	var yearspast = (nowYear - (2323+(issue * 100))) * 1000
	var total = thisyear+yearspast
	if (nowMinute<10) {var mns="0"} else {var mns=""}
	if (nowSecond<10) {var scs="0"} else {var scs=""}
	//var Temp2= '['+issue+']  '+total+'    '+nowHour+':'+mns+nowMinute+':'+scs+nowSecond
	return ('['+issue+']  '+total);

}

function update() {
	var d = new Date();
	$(".utc-time").text(d.toTimeString());
	$(".utc-date").text(d.toDateString());
	$(".stardate").text(Stardate(d));
	$('.specified-in-timezone').each(function () {
			$(this).text(calcTime($(this).attr('data-utc-offset')*1));
			$(this).siblings().children('.local-date').text(calcDate($(this).attr('data-utc-offset')*1));				 
	});
	var millis = d.getTime();
	var jd_ut = 2440587.5 + (millis / 8.64E7);
	var jd_tt = jd_ut + (35 + 32.184) / 86400;
	var j2000 = jd_tt - 2451545.0;
	var m = (19.3870 + 0.52402075 * j2000) % 360;
	var alpha_fms = (270.3863 + 0.52403840 * j2000) % 360;
	var e = (0.09340 + 2.477E-9 * j2000);
	var pbs =
			0.0071 * cos((0.985626 * j2000 /  2.2353) +  49.409) +
			0.0057 * cos((0.985626 * j2000 /  2.7543) + 168.173) +
			0.0039 * cos((0.985626 * j2000 /  1.1177) + 191.837) +
			0.0037 * cos((0.985626 * j2000 / 15.7866) +  21.736) +
			0.0021 * cos((0.985626 * j2000 /  2.1354) +  15.704) +
			0.0020 * cos((0.985626 * j2000 /  2.4694) +  95.528) +
			0.0018 * cos((0.985626 * j2000 / 32.8493) +  49.095);
	var nu_m = (10.691 + 3.0E-7 * j2000) * sin(m) +
			0.623 * sin(2 * m) +
			0.050 * sin(3 * m) +
			0.005 * sin(4 * m) +
			0.0005 * sin(5 * m) +
			pbs;
	var nu = nu_m + m;
	var l_s = (alpha_fms + nu_m) % 360;
	var eot = 2.861 * sin(2 * l_s) - 0.071 * sin(4 * l_s) + 0.002 * sin(6 * l_s) - nu_m;
	var eot_h = eot * 24 / 360;
	var msd = (((j2000 - 4.5) / 1.027491252) + 44796.0 - 0.00096);
	var mtc = (24 * msd) % 24;
	
	var curiosity_lambda = 360 - 137.4;
	var curiosity_sol = Math.floor(msd - curiosity_lambda / 360) - 49268;
	var curiosity_lmst = within_24(mtc - curiosity_lambda * 24 / 360);
	var curiosity_ltst = within_24(curiosity_lmst + eot * 24 / 360);
	
	var opportunity_sol_date = msd - 46235 - 0.042431;
	var opportunity_sol = Math.floor(opportunity_sol_date);
	var opportunity_mission = (24 * opportunity_sol_date) % 24;
	var opportunity_ltst = within_24(opportunity_mission + eot * 24 / 360);
	
	$(".millis").text(add_commas(millis));
	$(".jd_ut").text(add_commas(jd_ut.toFixed(5)));
	$(".jd_tt").text(add_commas(jd_tt.toFixed(5)));
	$(".j2000").text(add_commas(j2000.toFixed(5)));
	$(".m").text(m.toFixed(5));
	$(".alpha_fms").text(alpha_fms.toFixed(5));
	$(".pbs").text(pbs.toFixed(5));
	$(".e").text(e.toFixed(5));
	$(".nu_m").text(nu_m.toFixed(5));
	$(".nu").text(nu.toFixed(5));
	$(".l_s").text(l_s.toFixed(5));
	$(".eot").text(eot.toFixed(5));
	$(".eot_h").text(h_to_hms(eot_h.toFixed(5)));
	$(".msd").text(add_commas(msd.toFixed(5)));
	$(".mtc").text(h_to_hms(mtc));
	
	$(".curiosity_lmst").text(h_to_hms(curiosity_lmst));
	$(".curiosity_ltst").text(h_to_hms(curiosity_ltst));
	$(".curiosity_sol").text(curiosity_sol);
	
	$(".opportunity_mission").text(h_to_hms(opportunity_mission));
	$(".opportunity_ltst").text(h_to_hms(opportunity_ltst));
	$(".opportunity_sol").text(opportunity_sol);
}
$(function() {
	update();
	getWeatherData();
	setInterval("update()", 1000);
	setInterval("getWeatherData()", 100000);
});

$(document).ready(getWeatherData);

function getWeatherData()
{
	$('.weather-icon').each(function() {
		mycity = $(this).attr('data-weather-code');
		var myItem = $(this);
		var Result = $.getJSON("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20location%3D%22" + mycity + "%22&format=json", 
			"",

		function (data) {
			myItem.html(Math.round(((data.query.results.channel.item.condition.temp  - 32) * (5/9)), 1) + 'C <img width="30" src="http://l.yimg.com/a/i/us/we/52/' + data.query.results.channel.item.condition.code + '.gif" />');
		});
	});

	$('.large-weather-icon').each(function() {
		mycity = $(this).attr('data-weather-code');
		var myItem = $(this);
		var Result = $.getJSON("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20location%3D%22" + mycity + "%22&format=json", 
			"",

		function (data) {
			myItem.html('<img width="30" src="http://l.yimg.com/a/i/us/we/52/' + data.query.results.channel.item.condition.code + '.gif" />');
// 							$("body").append("Sunrise: " + data.query.results.channel.astronomy.sunrise + "<br />");
// 							$("body").append("SuntSet: " + data.query.results.channel.astronomy.sunset + "<br />");
		});
	});


}			
