var newPlayer;
var newPlayerName;
var enemyPlayer;
var enemyPlayerName;
// INITIAL PAGE HIDES FOR SPA EXECUTION

$('#player-names').hide();
$('#choose-robot-class').hide();
$('#choose-robot-type').hide();
$('.robot-types').hide();


$(document).ready(function () {
	$('#player-names').show('slow');
})

// CLICK EVENTS FOR OBJECT INFO ASSIGNING

if ($('#robot1').val('') || $('#robot2').val('')) {
	$('#choose-class').prop('disabled', true)
}

$('#choose-class').click(function (e) {
	newPlayerName = $('#robot1').val();
	enemyPlayerName = $('#robot2').val();
	newPlayer = new Battle.Combatant.Robot(newPlayerName);
	enemyPlayer = new Battle.Combatant.Robot(enemyPlayerName);
	console.log(newPlayer.playerName + ' vs ' + enemyPlayer.playerName);
})

if ($('#robot1').val('') || $('#robot2').val('')) {
	$('#choose-class').prop('disabled', true)
}

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
