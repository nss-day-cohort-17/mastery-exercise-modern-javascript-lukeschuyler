var newPlayer;
var newPlayerName;
var enemyPlayer;
var enemyPlayerName;
var enemyInfo;
var yourInfo;
var twoPlayer = false;

// JQUERY STYLING 

console.log(Math.round(Math.random() * 10))

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
// $('#versus-container').hide();

}
reset();

$(document).ready(function () {
	$('#player-names').show('slow');
	$('#main-header-container').show('slow');
})

// $('button').mouseover(function (e) {
// 	$(this).addClass('hover-button');
// });

// 1 Player 


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
	enemyPlayer = new Battle.Combatant.Robot(enemyPlayerName);
	twoPlayer = false;
	console.log(twoPlayer)
})

$('#choose-class-2').click(function (e) {
	newPlayerName = $('#robot1').val();
	enemyPlayerName = $('#robot2').val();
	newPlayer = new Battle.Combatant.Robot(newPlayerName);
	enemyPlayer = new Battle.Combatant.Robot(enemyPlayerName);
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
		$('#vs').html(newPlayer.playerName + ' vs ' + enemyPlayer.playerName)
		$('#versus').html('<span>GET READY...</span>');
	})
	



	setTimeout(function () {
		$('#versus').html('<span>3</span>')
			setTimeout(function () {
			$('#versus').html('<span>2</span>')
			}, 1000);
			setTimeout(function () {
				$('#versus').html('<span>1</span>')
			}, 2000)
			setTimeout(function () {
				$('#versus').html('<span>FIGHT!</span>')
			}, 3000);
			setTimeout(function () {
				battle();
			}, 4000)
	}, 3000);
	
	} else if (twoPlayer === true) {
		console.log(twoPlayer);
		console.log('hey');
		$('#choose-robot-class-2').hide('slow');
		$('#main-header-container').hide('slow');
		
		$('body').fadeTo('slow', 1, function () {
		$('body').removeClass('player-body');
		$('body').addClass('battle-body');
		})
		
		$('#vs').html(newPlayer.playerName + ' vs ' + enemyPlayer.playerName)
		$('#versus').html('<span>GET READY...</span>');

		setTimeout(function () {
		$('#versus').html('<span>3</span>')
			setTimeout(function () {
			$('#versus').html('<span>2</span>')
			}, 1000);
			setTimeout(function () {
				$('#versus').html('<span>1</span>')
			}, 2000)
			setTimeout(function () {
				$('#versus').html('<span>FIGHT!</span>')
			}, 3000);
			setTimeout(function () {
				battleTwo();
			}, 4000)
	}, 3000);
	}
})

function endGame () {
  if (newPlayer.health <= 0) {
  	$('body').addClass('overlay');
  	setTimeout(function () {
  		$('#battleground').hide('slow');
  		$('#battleground-2').hide('slow');
  		$('.game-end').html(`${enemyPlayer.playerName} Wins<br>You Lose`);
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
	
	enemyPlayer.health = enemyPlayer.health - newPlayer.attack;

    $('#enemyHealth').val(enemyPlayer.health);
    $('#attack').prop('disabled', true);
    setTimeout(function() {
      $('#attack').prop('disabled', false);
    }, yourSpeed)

	}
	accuracyCounter++;
}

function playerOneAttack() {
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

    endGame();
}

function playerTwoAttack() {
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

    endGame();
}



$('#attack').click(function (e) {

	userAttack();
})

$('#attack1').click(function (e) {

	playerOneAttack();

})

$('#attack2').click(function (e) {

	playerTwoAttack();

})


function battle () {
console.log(newPlayer)
console.log(enemyPlayer)
newPlayer.health = newPlayer.health + newPlayer.type.healthBonus;
enemyPlayer.health = enemyPlayer.health + enemyPlayer.type.healthBonus;
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

	if ((enemyAccuracy % 4) === 0) {
		
	$('.battle-screen').addClass('battle-screen-miss');
  setTimeout(function () {
    $('.battle-screen').removeClass('battle-screen-miss');
      endGame();

  }, 200);
		
	} else {
 
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
   // var rand = Math.round(Math.random() * (3000 - 500)) + 1000;
   var enemySpeed = (1 / ((enemyPlayer.CPU + enemyPlayer.type.CPUBonus) / 100)) * 1000;
   if (enemyPlayer.health > 0) {
   	setTimeout(function() {
      enemyAttack();
      loop();  
    }, enemySpeed); } else {
      endGame();
   }

}());

$(document).keypress(function (e) { 
	if (e.keyCode === 32) {
		userAttack();
  	}	
})

}


function battleTwo () {
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
				<progress id="enemyHealth2" value="${enemyPlayer.health}" max="130"></progress>
			</div>`

yourInfo = `<div id="yourInfo" class="col-md-4">
				<span class="enemy-span">Player 1</span><br> 
				Name: ${newPlayer.playerName}<br> 
				Type: ${newPlayer.type.name} Health: 
				<progress id="health2" value="${newPlayer.health}" max="130"></progress>
			</div>`


$('#battle-screen-bottom-1').html(yourInfo)
$('#battle-screen-bottom-2').html(enemyInfo)



endGame();

$(document).keypress(function (e) { 
	if (e.keyCode === 97) {
		playerOneAttack();
  	}	
})


$(document).keypress(function (e) { 
	if (e.keyCode === 108) {
		playerTwoAttack();
  	}	
})

}
