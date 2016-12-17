var newPlayer = new Battle.Dome.Droid()
console.log(newPlayer)

// INITIAL PAGE HIDES FOR SPA EXECUTION

$('#player-names').hide();
$('#choose-robot-class').hide();
$('#choose-robot-type').hide();
$('.robot-types').hide();


$(document).ready(function () {
	$('#player-names').show('slow');
})

// CLICK EVENTS FOR PAGE TRANSITIONS

$('#choose-class').click(function (e){
		$('#player-names').hide('slow');
		$('#choose-robot-class').show('slow');
})

$('#choose-robot').click(function (e){
	$('#choose-robot-class').hide('slow');
	$('#choose-robot-type').show('slow');
})

$('#droid-button').click(function (e) {
	$('.android').hide();
	$('.cyborg').hide();
	$('.droid').show();
})

$('#cyborg-button').click(function (e) {
	$('.droid').hide();
	$('.android').hide();
	$('.cyborg').show();
})

$('#android-button').click(function (e) {
	$('.cyborg').hide();
	$('.droid').hide();
	$('.android').show();
})
