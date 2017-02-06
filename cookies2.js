$(document).ready(function() {

// cookie values
// chocolatechip
// peanutbutter
// oatmeal
	
	// this is current setting the total count from chocolate chip,
	// may want to have the others included too...
	$('.chocolatechip .count').text(~~Cookies.get('chocolatechip'));
	$('.peanutbutter .count').text(~~Cookies.get('peanutbutter'));
	$('.oatmeal .count').text(~~Cookies.get('oatmeal') || 0);
	$('.totalcookies .count').text(
		~~Cookies.get('chocolatechip') +
		~~Cookies.get('peanutbutter') +
		~~Cookies.get('oatmeal')
	);
	
	$('.chocolatechip').click(function(){
		var numberOfCookies= $('.chocolatechip .count').text();
		var cookiesPlusOne= parseInt(numberOfCookies)+1;
		Cookies.set('chocolatechip',cookiesPlusOne);
		$('.chocolatechip .count').text(cookiesPlusOne);
		$('.totalcookies .count').text(~~$('.totalcookies .count').text()+1);
	});

$('.peanutbutter').click(function(){

		var numberOfCookies= $('.peanutbutter .count').text()
		var cookiesPlusOne= parseInt(numberOfCookies)+1;
		Cookies.set('peanutbutter',cookiesPlusOne);
		$('.peanutbutter .count').text(cookiesPlusOne);
		$('.totalcookies .count').text(~~$('.totalcookies .count').text()+1);
});
$('.oatmeal').click(function(){
		var numberOfCookies= $('.oatmeal .count').text()
		var cookiesPlusOne= parseInt(numberOfCookies)+1;
		Cookies.set('oatmeal',cookiesPlusOne);
		$('.oatmeal .count').text(cookiesPlusOne);
		$('.totalcookies .count').text(~~$('.totalcookies .count').text()+1);
});
$('.clearcookies').click(function(){
	Cookies.expire('chocolatechip')
	Cookies.expire('peanutbutter')
	Cookies.expire('oatmeal')
	$('.count').text(0);
});








})