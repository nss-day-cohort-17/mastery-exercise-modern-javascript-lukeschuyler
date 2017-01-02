var newPlayer;
var newPlayerName;
var enemyPlayer;
var enemyPlayerName;
var enemyInfo;
var yourInfo;
var twoPlayer = false;
let myAudio;
let enemyAudio;

// JQUERY STYLING 

// INITIAL PAGE HIDES FOR SPA EXECUTION

function reset () {

$('body').addClass('player-body');
$('#player-names').hide();
$('#choose-robot-class').hide();
$('#choose-robot-type').hide();
$('.robot-types').hide();
$('.robot-types-2').hide();
$('#battleground').hide();
$('#main-header-container').hide();
$('#choose-robot-class-2').hide();
$('#enter').hide();
$('#choose-enemy').hide();
$('#game-over').hide();
$('#battleground-2').hide();
$('#versus-container').hide();

}
reset();

// button click audio

$('button').mouseover(function(e) {
	var audio = new Audio('https://freesound.org/data/previews/43/43143_382148-lq.mp3');
	audio.play();
})

$('button').click(function (e) {	
	var audio = new Audio('http://cd.textfiles.com/cdaction/cdaction24b/Q2/SPLASH/WAV/BTNX.WAV');
	audio.play();
})

// initial show and hide

$(document).ready(function () {
	myAudio = new Audio('https://freesound.org/data/previews/347/347741_4322723-lq.mp3'); 
	myAudio.addEventListener('ended', function() {
    	this.currentTime = 0;
    	this.play();
	}, false);
	myAudio.play();
	
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

$('#choose-class-2').prop('disabled', true);
$('.robot-input').keyup(function (e) {
	if($('#robot1').val() != '' && $('#robot2').val() != '') {
        $('#choose-class-2').prop('disabled', false);
    }
})

// CLICK EVENTS FOR OBJECT INFO ASSIGNING

$('#choose-class').click(function (e) {
	newPlayerName = $('#robot1').val();
	enemyPlayerName = $('#robot2').val();
	newPlayer = new Battle.Combatant.Robot(newPlayerName);
	enemyPlayer = new Battle.Combatant.RobotTwo(enemyPlayerName);
	$('.player-s').html(`${newPlayer.playerName} Select Robot`)
	$('.player-2-s').html(`${enemyPlayer.playerName} Select Robot`)
	twoPlayer = false;
})

$('#choose-class-2').click(function (e) {
	newPlayerName = $('#robot1').val();
	enemyPlayerName = $('#robot2').val();
	newPlayer = new Battle.Combatant.Robot(newPlayerName);
	enemyPlayer = new Battle.Combatant.Robot(enemyPlayerName);
	$('.player-s').html(`${newPlayer.playerName} Select Robot`)
	$('.player-2-s').html(`${enemyPlayer.playerName} Select Robot`)
	twoPlayer = true;
})

$('.robot-types').click(function (e) {
    var typeText = this.innerText.toLowerCase();
    var newTypeText = typeText.charAt(0).toUpperCase() + typeText.slice(1);
    newPlayer.type = new Battle.Dome[newTypeText];
    $('#choose-enemy').show('slow');
  })

$('.class-button-group').click(function (e) {
    var typeText = this.innerText.toLowerCase();
    var newTypeText = typeText.charAt(0).toUpperCase() + typeText.slice(1);
    newPlayer.class = new Battle.Dome[newTypeText];
  
  })

$('.robot-types-2').click(function (e) {
    var typeText = this.innerText.toLowerCase();
    var newTypeText = typeText.charAt(0).toUpperCase() + typeText.slice(1);
    enemyPlayer.type = new Battle.Dome[newTypeText];
    $('#enter').show('slow');
  
  })

$('.class-button-group-2').click(function (e) {
    var typeText = this.innerText.toLowerCase();
    var newTypeText = typeText.charAt(0).toUpperCase() + typeText.slice(1);
    enemyPlayer.class = new Battle.Dome[newTypeText];
  
  })

// CLICK EVENTS FOR PAGE TRANSITIONS

$('#choose-class').click(function (e){
	$('#player-names').hide('slow');
	$('#choose-robot-class').show('slow');
})

$('#choose-class-2').click(function (e){
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
	$('.droid').show();
})

$('#controller-button').click(function (e) {
	$('#main-header-container').hide('slow');
	$('.droid').hide();
	$('.android').hide();
	$('.controller').show();
})

$('#android-button').click(function (e) {
	$('#main-header-container').hide('slow');
	$('.controller').hide();
	$('.droid').hide();
	$('.android').show();
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
	$('.droid-2').show();
})

$('#controller-button-2').click(function (e) {
	$('#main-header-container').hide('slow');
	$('.droid-2').hide();
	$('.android-2').hide();
	$('.controller-2').show();
})

$('#android-button-2').click(function (e) {
	$('#main-header-container').hide('slow');
	$('.controller-2').hide();
	$('.droid-2').hide();
	$('.android-2').show();
})

// click to show selected robots attributes

$('.robot-types').click(function(e) {
	var audio = new Audio('https://freesound.org/data/previews/256/256543_1490240-lq.mp3');
	audio.play();
	var typeText = this.innerText.toLowerCase();
    var newTypeText = typeText.charAt(0).toUpperCase() + typeText.slice(1);
    var hoverRobot = new Battle.Dome[newTypeText];
	$('.type-info').html(`<div class="col-md-3 col-md-offset-1">${newTypeText}:<br> Health: ${Battle.Dome[newTypeText].prototype.healthBonus + hoverRobot.healthBonus + 90} <br>
    								Strength: ${Battle.Dome[newTypeText].prototype.strengthBonus + 90 + hoverRobot.strengthBonus} <br>
    								CPU: ${Battle.Dome[newTypeText].prototype.CPUBonus + hoverRobot.CPUBonus}</div>`)
})

$('.robot-types-2').click(function(e) {
	var audio = new Audio('https://freesound.org/data/previews/256/256543_1490240-lq.mp3');
	audio.play();
	var typeText = this.innerText.toLowerCase();
    var newTypeText = typeText.charAt(0).toUpperCase() + typeText.slice(1);
    var hoverRobot = new Battle.Dome[newTypeText];
    $('.type-info-2').html(`<div class="col-md-3 col-md-offset-1">${newTypeText}:<br> Health: ${Battle.Dome[newTypeText].prototype.healthBonus + hoverRobot.healthBonus + 90} <br>
    								Strength: ${Battle.Dome[newTypeText].prototype.strengthBonus + 90 + hoverRobot.strengthBonus} <br>
    								CPU: ${Battle.Dome[newTypeText].prototype.CPUBonus + hoverRobot.CPUBonus}</div>`)
})

// mouseover to show robot type attributes

$('.robot-types').mouseover(function (e) {
    var typeText = this.innerText.toLowerCase();
    var newTypeText = typeText.charAt(0).toUpperCase() + typeText.slice(1);
    var hoverRobot = new Battle.Dome[newTypeText];
	$('.type-info').html(`<div class="col-md-3 col-md-offset-1">${newTypeText}:<br> Health: ${Battle.Dome[newTypeText].prototype.healthBonus + hoverRobot.healthBonus + 90} <br>
    								Strength: ${Battle.Dome[newTypeText].prototype.strengthBonus + 90 + hoverRobot.strengthBonus} <br>
    								CPU: ${Battle.Dome[newTypeText].prototype.CPUBonus + hoverRobot.CPUBonus}</div>`)
    
  })

$('.robot-types').mouseleave(function(e) {
	var typeText = this.innerText.toLowerCase();
    var newTypeText = typeText.charAt(0).toUpperCase() + typeText.slice(1);
    var hoverRobot = new Battle.Dome[newTypeText];
	$('.type-info').html(`<div class="invisibot col-md-3 col-md-offset-1">${newTypeText}:<br> Health: ${Battle.Dome[newTypeText].prototype.healthBonus + hoverRobot.healthBonus + 90} <br>
    								Strength: ${Battle.Dome[newTypeText].prototype.strengthBonus + 90 + hoverRobot.strengthBonus} <br>
    								CPU: ${Battle.Dome[newTypeText].prototype.CPUBonus + hoverRobot.CPUBonus}</div>`)
})

$('.robot-types-2').mouseover(function (e) {
    var typeText = this.innerText.toLowerCase();
    var newTypeText = typeText.charAt(0).toUpperCase() + typeText.slice(1);
    var hoverRobot = new Battle.Dome[newTypeText];
    $('.type-info-2').html(`<div class="col-md-3 col-md-offset-1">${newTypeText}:<br> Health: ${Battle.Dome[newTypeText].prototype.healthBonus + hoverRobot.healthBonus + 90} <br>
    								Strength: ${Battle.Dome[newTypeText].prototype.strengthBonus + 90 + hoverRobot.strengthBonus} <br>
    								CPU: ${Battle.Dome[newTypeText].prototype.CPUBonus + hoverRobot.CPUBonus}</div>`)
    
    
  })

$('.robot-types-2').mouseleave(function(e) {
	var typeText = this.innerText.toLowerCase();
    var newTypeText = typeText.charAt(0).toUpperCase() + typeText.slice(1);
    var hoverRobot = new Battle.Dome[newTypeText];
	$('.type-info-2').html(`<div class="invisibot col-md-3 col-md-offset-1">${newTypeText}:<br> Health: ${Battle.Dome[newTypeText].prototype.healthBonus + hoverRobot.healthBonus + 90} <br>
    								Strength: ${Battle.Dome[newTypeText].prototype.strengthBonus + 90 + hoverRobot.strengthBonus} <br>
    								CPU: ${Battle.Dome[newTypeText].prototype.CPUBonus + hoverRobot.CPUBonus}</div>`)
})

$('.robot-types').click(function (e) {
    var typeText = this.innerText.toLowerCase();
    var newTypeText = typeText.charAt(0).toUpperCase() + typeText.slice(1);
    var hoverRobot = new Battle.Dome[newTypeText];
	$('.type-info-selected').html(`<div class="col-md-3">${newTypeText}:<br> Health: ${Battle.Dome[newTypeText].prototype.healthBonus + hoverRobot.healthBonus + 90} <br>
    								Strength: ${Battle.Dome[newTypeText].prototype.strengthBonus + 90 + hoverRobot.strengthBonus} <br>
    								CPU: ${Battle.Dome[newTypeText].prototype.CPUBonus + hoverRobot.CPUBonus}</div>`)
    
  })

$('.robot-types-2').click(function (e) {
    var typeText = this.innerText.toLowerCase();
    var newTypeText = typeText.charAt(0).toUpperCase() + typeText.slice(1);
    var hoverRobot = new Battle.Dome[newTypeText];
    $('.type-info-2-selected').html(`<div class="col-md-3">${newTypeText}:<br> Health: ${Battle.Dome[newTypeText].prototype.healthBonus + hoverRobot.healthBonus + 90} <br>
    								Strength: ${Battle.Dome[newTypeText].prototype.strengthBonus + 90 + hoverRobot.strengthBonus} <br>
    								CPU: ${Battle.Dome[newTypeText].prototype.CPUBonus + hoverRobot.CPUBonus}</div>`)
})

// ENTER TO BATTLE 1 and 2 PLAYER

$('#enter').click(function (e){
	if (twoPlayer === false) {
	// $('#choose-robot-class-2').hide('slow');
	// $('#main-header-container').hide('slow');

	$('#choose-robot-class-2').fadeTo(1000, .01,  function () {
		$('#choose-robot-class-2').hide('slow');
		$('#main-header-container').hide('slow');
	})
	
	$('body').fadeIn('slow', .8, function(){
		$('body').removeClass('player-body');
		$('body').addClass('battle-body');
		$('#versus-container').show();
		$('#vs').html(newPlayer.playerName + ' vs ' + enemyPlayer.playerName)
		$('#versus').html('<span>GET READY...</span>');
		$('#controls').html('<div class="controls col-md-12">Press Spacebar to Attack!</div>')
	})

	setTimeout(function () {
		
		$('#versus').html('<span>3</span>')
		myAudio = new Audio ('https://freesound.org/data/previews/369/369251_6456158-lq.mp3');
		myAudio.play();
		new Audio('https://freesound.org/data/previews/130/130717_214099-lq.mp3').play();
			setTimeout(function () {
			new Audio('https://freesound.org/data/previews/130/130727_214099-lq.mp3').play();
			$('#versus').html('<span>2</span>')
			}, 1000);
			setTimeout(function () {
			new Audio('https://freesound.org/data/previews/130/130713_214099-lq.mp3').play();
				$('#versus').html('<span>1</span>')
			}, 2000)
			setTimeout(function () {
				new Audio('https://freesound.org/data/previews/276/276254_5299216-lq.mp3').play();
				$('#versus').html('<span>FIGHT!</span>')
			}, 3000);
			setTimeout(function () {
				battle();
			}, 4000)
	}, 3000);
	
	} else if (twoPlayer === true) {
		$('#choose-robot-class-2').hide('slow');
		$('#main-header-container').hide('slow');
		
		$('body').fadeTo('slow', 1, function () {
		$('body').removeClass('player-body');
		$('body').addClass('battle-body');
		})
		
		$('#versus-container').show();
		$('#vs').html(newPlayer.playerName + ' vs ' + enemyPlayer.playerName)
		$('#versus').html('<span>GET READY...</span>');
		$('#controls').html('<div class="controls-2 col-md-6">(Player 1): Press A to Attack!</div><div class="controls-2 col-md-6">(Player 2): Press L to Attack!</div>');
		setTimeout(function () {
		
		new Audio('https://freesound.org/data/previews/130/130717_214099-lq.mp3').play();
		myAudio = new Audio ('https://freesound.org/data/previews/369/369251_6456158-lq.mp3');
		myAudio.play();
		$('#versus').html('<span>3</span>')
			setTimeout(function () {
			new Audio('https://freesound.org/data/previews/130/130727_214099-lq.mp3').play();
			$('#versus').html('<span>2</span>')
			}, 1000);
			setTimeout(function () {
				new Audio('https://freesound.org/data/previews/130/130713_214099-lq.mp3').play();
				$('#versus').html('<span>1</span>')
			}, 2000)
			setTimeout(function () {
				new Audio('https://freesound.org/data/previews/276/276254_5299216-lq.mp3').play();
				$('#versus').html('<span>FIGHT!</span>')
			}, 3000);
			setTimeout(function () {
				battleTwo();
			}, 4000)
	}, 3000);
	}
})

// ENDGAME FUNCTION FOR 1 AND 2 PLAYER

function endGame () {
  if (newPlayer.health <= 0) {
  	$('body').addClass('overlay');

  	setTimeout(function () {
  		$('#battleground').hide('slow');
  		$('#battleground-2').hide('slow');
  		$('.game-end').html(`${enemyPlayer.playerName} (${enemyPlayer.type.name}) Defeated ${newPlayer.playerName} (${newPlayer.type.name})`);
  		$('#game-over').show('slow');
  	}, 200)


  } else if (enemyPlayer.health <= 0) {
  	$('body').addClass('overlay');

  	setTimeout(function () {
  		$('#battleground').hide('slow');
  		$('#battleground-2').hide('slow');
  		$('.game-end').html(`${newPlayer.playerName} Wins!`);
  		$('#game-over').show('slow');
  	}, 200)
  } 

  $('#exitBtn').click(function (e){
    location.reload()
})

}

// ONE PLAYER BATTLE AND ATTACKS

var accuracyCounter = 1;

function userAttack() {

	var yourSpeed = (1 / ((newPlayer.CPU + newPlayer.type.CPUBonus) / 100)) * 1000;

	if ((accuracyCounter % 5) === 0) {
		$('#attack').text('MISS!!');
		$('#attack').prop('disabled', true);
		setTimeout(function() {
			$('#attack').text('Attack');
		    $('#attack').prop('disabled', false);
    }, (yourSpeed))
	
	} else {

	var audioAttack = new Audio('https://freesound.org/data/previews/73/73214_100848-lq.mp3');
	audioAttack.play();
	
	enemyPlayer.health = enemyPlayer.health - (newPlayer.attack + newPlayer.type.strengthBonus);

    $('#enemyHealth').val(enemyPlayer.health);
    $('#attack').prop('disabled', true);
    setTimeout(function() {
      $('#attack').prop('disabled', false);
    }, yourSpeed)

	}
	accuracyCounter++;
}


function battle () {

newPlayer.health = newPlayer.health + newPlayer.type.healthBonus;
enemyPlayer.health = enemyPlayer.health + enemyPlayer.type.healthBonus;
console.log(newPlayer)
console.log(enemyPlayer)
$('#versus-container').hide()
$('#battleground').show('slow');
$('#health').val(newPlayer.health);
$('#enemyHealth').val(enemyPlayer.health);
enemyInfo =`<div id="enemyInfo" class="col-md-8">
				<span class="enemy-span">Enemy</span><br> 
				Name: ${enemyPlayer.playerName}<br> 
				Type: ${enemyPlayer.type.name}
				<progress id="enemyHealth" value="${enemyPlayer.health}" max="${enemyPlayer.health}"></progress>
			</div>`

yourInfo = `<div id="yourInfo" class="col-md-8">
				<span class="enemy-span">You</span><br> 
				Name: ${newPlayer.playerName}<br> 
				Type: ${newPlayer.type.name} 
				<progress id="health" value="${newPlayer.health}" max="${newPlayer.health}"></progress>
			</div>`

$('#battle-screen-top').html(enemyInfo);
$('#battle-screen-bottom').html(yourInfo)

var enemyAccuracy = 1;
function enemyAttack() {
	var rand = Math.round((Math.random() * 5) + 2);
	if ((enemyAccuracy % rand) === 0) {
	$('.battle-screen').addClass('battle-screen-miss');
  	setTimeout(function () {
    	$('.battle-screen').removeClass('battle-screen-miss');
      	endGame();
  	}, 200);
	
	} else {

	enemyAudio = new Audio('https://freesound.org/data/previews/360/360443_6512973-lq.mp3');
	enemyAudio.play();
  $('.battle-screen').addClass('battle-screen-hit');
  setTimeout(function () {
    $('.battle-screen').removeClass('battle-screen-hit');
      endGame();

  }, 200);
  		newPlayer.health = newPlayer.health - (enemyPlayer.attack + enemyPlayer.type.strengthBonus);
		$('#health').val(newPlayer.health);
	}
	enemyAccuracy++;
}

(function loop() {
   var rand = Math.round(Math.random() * 1500);
   var enemySpeed = (1 / ((enemyPlayer.CPU + enemyPlayer.type.CPUBonus) / 100)) * 1000;
   if (enemyPlayer.health > 0 && newPlayer.health > 0) {
   	setTimeout(function() {
      enemyAttack();
      loop(); 
    }, (enemySpeed - 1000) + rand); } else {
      endGame();
   }

}());
	$(document).keypress(function (e) { 
		if (e.keyCode === 32) {
			if ($('#attack').prop('disabled', true))
				userAttack();
  			} 
		})
}

$('#attack').click(function (e) {
	userAttack();
})


// 2 PLAYER BATTLE and ATTACKS


function playerOneAttack() {
	var audioAttack = new Audio('https://freesound.org/data/previews/73/73214_100848-lq.mp3');
	audioAttack.play();
	var playerOneSpeed = (1 / ((newPlayer.CPU + newPlayer.type.CPUBonus) / 100)) * 1000;
	enemyPlayer.health = enemyPlayer.health - newPlayer.attack;
    $('#enemyHealth2').val(enemyPlayer.health);
    $('#attack1').prop('disabled', true);
    setTimeout(function() {
      $('#attack1').prop('disabled', false);
    }, playerOneSpeed)

  	$('.battle-screen-2').addClass('battle-screen-hit');
  	setTimeout(function () {
    	$('.battle-screen-2').removeClass('battle-screen-hit');
      endGame();
	 }, 200);
    // endGame();
}

function playerTwoAttack() {
	var audioAttack = new Audio('https://freesound.org/data/previews/73/73214_100848-lq.mp3');
	audioAttack.play();
	var playerTwoSpeed = (1 / ((enemyPlayer.CPU + enemyPlayer.type.CPUBonus) / 100)) * 1000;
	newPlayer.health = newPlayer.health - enemyPlayer.attack;

    $('#health2').val(newPlayer.health);
    $('#attack2').prop('disabled', true);
    setTimeout(function() {
      $('#attack2').prop('disabled', false);
    }, playerTwoSpeed)

  	$('.battle-screen-1').addClass('battle-screen-hit');
  	setTimeout(function () {
    	$('.battle-screen-1').removeClass('battle-screen-hit');
      	endGame();
  	}, 200);
 	// endGame();
}


function battleTwo () {
myAudio = new Audio ('https://freesound.org/data/previews/369/369251_6456158-lq.mp3');
myAudio.play();
newPlayer.health = newPlayer.health + newPlayer.type.healthBonus;
enemyPlayer.health = enemyPlayer.health + enemyPlayer.type.healthBonus;
$('#versus-container').hide()
$('#battleground-2').show('slow');
$('#health').val(newPlayer.health);
$('#enemyHealth').val(enemyPlayer.health);
enemyInfo =`<div id="enemyInfo" class="col-md-4">
				<span class="enemy-span">Player 2</span><br> 
				Name: ${enemyPlayer.playerName}<br> 
				Type: ${enemyPlayer.type.name} Health: 
				<progress id="enemyHealth2" value="${enemyPlayer.health}" max="${enemyPlayer.health}"></progress>
			</div>`

yourInfo = `<div id="yourInfo" class="col-md-4">
				<span class="enemy-span">Player 1</span><br> 
				Name: ${newPlayer.playerName}<br> 
				Type: ${newPlayer.type.name} Health: 
				<progress id="health2" value="${newPlayer.health}" max="${newPlayer.health}"></progress>
			</div>`

$('#battle-screen-bottom-1').html(yourInfo)
$('#battle-screen-bottom-2').html(enemyInfo)
endGame();

// keyboard keys for attacking

$(document).keypress(function (e) { 
	if (e.keyCode === 97) {
		$('#attack1').click();
  	}	
})


$(document).keypress(function (e) { 
	if (e.keyCode === 108) {
		$('#attack2').click();
  	}	
})

}

$('#attack1').click(function (e) {
	playerOneAttack();
})

$('#attack2').click(function (e) {
	playerTwoAttack();
})
