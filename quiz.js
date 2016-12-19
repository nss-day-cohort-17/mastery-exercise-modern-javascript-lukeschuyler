var newPlayer;
var newPlayerName;
var enemyPlayer;
var enemyPlayerName;

// JQUERY STYLING 

// INITIAL PAGE HIDES FOR SPA EXECUTION

$('body').addClass('player-body');
$('#player-names').hide();
$('#choose-robot-class').hide();
$('#choose-robot-type').hide();
$('.robot-types').hide();
$('#battleground').hide();
$('#main-header-container').hide();


$(document).ready(function () {
	$('#player-names').show('slow');
	$('#main-header-container').show('slow');
})

// CHECK IF FIELDS HAVE VALUE

// $('#choose-class').prop('disabled', true);
// $('.robot-input').keyup(function (e) {
// 	if($('#robot1').val() != '' && $('#robot2').val() != '') {
//         $('#choose-class').prop('disabled', false);
//     }
// })

// CLICK EVENTS FOR OBJECT INFO ASSIGNING

$('#choose-class').click(function (e) {
	newPlayerName = $('#robot1').val();
	enemyPlayerName = $('#robot2').val();
	newPlayer = new Battle.Combatant.Robot(newPlayerName);
	enemyPlayer = new Battle.Combatant.Robot(enemyPlayerName);
	console.log(newPlayer.playerName + ' vs ' + enemyPlayer.playerName);
})

$('.robot-types').click(function (e) {
    var typeText = this.innerText.toLowerCase();
    var newTypeText = typeText.charAt(0).toUpperCase() + typeText.slice(1);
    newPlayer.type = new Battle.Dome[newTypeText];
    console.log(newPlayer)
  })

$('.class-button-group').click(function (e) {
    var typeText = this.innerText.toLowerCase();
    var newTypeText = typeText.charAt(0).toUpperCase() + typeText.slice(1);
    newPlayer.class = new Battle.Dome[newTypeText];
    console.log(newPlayer)
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
	$('#main-header-container').hide('slow');
	$('.android').hide();
	$('.controller').hide();
	$('.droid').show('slow');
})

$('#controller-button').click(function (e) {
	$('#main-header-container').hide('slow');
	$('.droid').hide();
	$('.android').hide();
	$('.controller').show('slow');
})

$('#android-button').click(function (e) {
	$('#main-header-container').hide('slow');
	$('.controller').hide();
	$('.droid').hide();
	$('.android').show('slow');
})

$('#enter').click(function (e){
	$('#choose-robot-class').hide('slow');
	$('#main-header-container').hide('slow');
	$('body').fadeTo('slow', 1, function () {
		$('body').removeClass('player-body');
	})
	$('#battleground').show('slow');
	battle();
})

function battle () {
	console.log('battle')
}
