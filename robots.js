var Battle = {};
Battle.Dome = {};

Battle.Dome.RobotClass = function () {
	this.name = "Mr. Roboto";
	this.healthBonus = 0;
	this.strengthBonus = 0;
	this.CPUBonus = 0;

}

// DROIDS

Battle.Dome.Droid = function () {
	this.healthBonus = 10;
	this.strengthBonus = -50;
	this.CPUBonus = 50;
}

Battle.Dome.Droid.prototype = new Battle.Dome.RobotClass();

// 

Battle.Dome.Nozzel = function () {
	this.name = "Nozzel"
	this.healthBonus = 60;
	this.strengthBonus = 0;
	this.CPUBonus = 0;
}

Battle.Dome.Nozzel.prototype = new Battle.Dome.Droid();

Battle.Dome.Spud = function () {
	this.name = "Spud"
	this.healthBonus = 10;
	this.strengthBonus = -30;
	this.CPUBonus = 80;
}

Battle.Dome.Spud.prototype = new Battle.Dome.Droid();

Battle.Dome.Booker = function () {
	this.name = "Booker"
	this.healthBonus = 20;
	this.strengthBonus = 30;
	this.CPUBonus = -10;
}

Battle.Dome.Booker.prototype = new Battle.Dome.Droid();

// ANDROIDS

Battle.Dome.Android = function () {
	this.healthBonus = 0;
	this.strengthBonus = 0;
	this.CPUBonus = 0;	
	this.human = 'sort of';
	this.limbs = true;
}

Battle.Dome.Android.prototype = new Battle.Dome.RobotClass();

// 

Battle.Dome.Paranoid = function () {
	this.name = "Paranoid"
	this.healthBonus = 0;
	this.strengthBonus = 0;
	this.CPUBonus = 0;
}

Battle.Dome.Paranoid.prototype = new Battle.Dome.Android();

Battle.Dome.Entity = function () {
	this.name = "Entity"
	this.healthBonus = -20;
	this.strengthBonus = 70;
	this.CPUBonus = 10;
}

Battle.Dome.Entity.prototype = new Battle.Dome.Android();

Battle.Dome.Replicant = function () {
	this.name = "Replicant"
	this.healthBonus = 30;
	this.strengthBonus = 30;
	this.CPUBonus = 0;
}

Battle.Dome.Replicant.prototype = new Battle.Dome.Android();

// CONTROLLERS

Battle.Dome.Controller = function () {
	this.healthBonus = -15;
	this.strengthBonus = -10;
	this.CPUBonus = 40;
	this.limbs = false;
}

Battle.Dome.Controller.prototype = new Battle.Dome.RobotClass();

// 

Battle.Dome.Brainstorm = function () {
	this.name = "Brainstorm"
	this.healthBonus = -10;
	this.strengthBonus = 30;
	this.CPUBonus = 40;
}

Battle.Dome.Brainstorm.prototype = new Battle.Dome.Controller();

Battle.Dome.Hal9000= function () {
	this.name = "Hal9000"
	this.healthBonus = -20;
	this.strengthBonus = -30;
	this.CPUBonus = 120;
}

Battle.Dome.Hal9000.prototype = new Battle.Dome.Controller();

Battle.Dome.Architect = function () {
	this.name = "Architect"
	this.healthBonus = -30;
	this.strengthBonus = -10;
	this.CPUBonus = 100;
}

Battle.Dome.Architect.prototype = new Battle.Dome.Controller();
