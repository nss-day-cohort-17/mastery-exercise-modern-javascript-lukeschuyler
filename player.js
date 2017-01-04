var Battle = Battle || {};

Battle.Combatant = {};



Battle.Combatant.Robot = function(name) {
var randomAttack = Math.round(Math.random() * 2)
var randomNumber = Math.round(Math.random() * 30);
  this.type = null;
  this.class = null;
  this.attack = 5;
  this.playerName = name;
  this.health = (60 + randomNumber);
  this.strength = (60 + randomNumber);
  this.CPU = 90;
}

Battle.Combatant.RobotTwo = function(name) {
var randomAttack = Math.round(Math.random() * 2)
var randomNumber = Math.round(Math.random() * 30);
  this.type = null;
  this.class = null;
  this.attack = 5;
  this.playerName = name;
  this.health = (60 + randomNumber);
  this.strength = (60 + randomNumber);
  this.CPU = 90;
}
