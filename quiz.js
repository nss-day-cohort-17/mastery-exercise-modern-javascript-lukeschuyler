var newPlayer;
var newPlayerName;
var enemyPlayer;
var enemyPlayerName;
var enemyInfo;
var yourInfo;

// JQUERY STYLING 

// INITIAL PAGE HIDES FOR SPA EXECUTION

$('body').addClass('player-body');
$('#player-names').hide();
$('#choose-robot-class').hide();
$('#choose-robot-type').hide();
$('.robot-types').hide();
$('#battleground').hide();
$('#main-header-container').hide();
$('#choose-robot-class-2').hide();


$(document).ready(function () {
	$('#player-names').show('slow');
	$('#main-header-container').show('slow');
})

// CHECK IF FIELDS HAVE VALUE

$('#choose-class').prop('disabled', true);
$('.robot-input').keyup(function (e) {
	if($('#robot1').val() != '' && $('#robot2').val() != '') {
        $('#choose-class').prop('disabled', false);
    }
})

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

$('#choose-enemy').click(function(e) {
	$(".robot-types").hide('slow');
	$('#choose-robot-class').hide('slow');
	$('#choose-robot-class-2').show('slow');
})

$('#droid-button-2').click(function (e) {
	$('#main-header-container').hide('slow');
	$('.android-2').hide();
	$('.controller-2').hide();
	$('.droid-2').show('slow');
})

$('#controller-button-2').click(function (e) {
	$('#main-header-container').hide('slow');
	$('.droid-2').hide();
	$('.android-2').hide();
	$('.controller-2').show('slow');
})

$('#android-button-2').click(function (e) {
	$('#main-header-container').hide('slow');
	$('.controller-2').hide();
	$('.droid-2').hide();
	$('.android-2').show('slow');
})

$('#enter').click(function (e){
	$('#choose-robot-class-2').hide('slow');
	$('#main-header-container').hide('slow');
	$('body').fadeTo('slow', 1, function () {
	$('body').removeClass('player-body');
	$('body').addClass('battle-body');
	})
	$('#battleground').show('slow');
	battle();
})

function battle () {
enemyInfo =`<div id="enemyInfo" class="col-md-4 col-md-offset-10">
				<span class="enemy-span">You</span><br> Name: ${enemyPlayer.playerName}<br> Type: ${enemyPlayer.type.name}<br> Health: ${enemyPlayer.health}
			</div>`

yourInfo = `<div id="yourInfo" class="col-md-4">
				<span class="enemy-span">You</span><br> Name: ${newPlayer.playerName}<br> Type: ${newPlayer.type.name}<br> Health: ${newPlayer.health}
			</div>`

$('#battle-screen-top').html(enemyInfo);
$('#battle-screen-bottom').html(yourInfo)
}
