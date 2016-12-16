var Battle = {};
Battle.Dome = {};

Battle.Dome.RobotClass = function () {
	this.name = "Mr. Roboto";
	this.healthBonus = 0;
	this.strengthBonus = 0;
	this.CPUBonus = 0;

}



Battle.Dome.Droid = function () {
	this.name = "Droid"
	this.healthBonus = 10;
	this.strengthBonus = -50;
	this.CPUBonus = 50;
}

Battle.Dome.Droid.prototype = new Battle.Dome.RobotClass();


Battle.Dome.Nozzel = function () {
	this.name = "Nozzel"
	this.healthBonus = 0;
	this.strengthBonus = 0;
	this.CPUBonus = 0;
}

Battle.Dome.Spud = function () {
	this.name = "Spud"
	this.healthBonus = 0;
	this.strengthBonus = 0;
	this.CPUBonus = 0;
}

Battle.Dome.Booker = function () {
	this.name = "Booker"
	this.healthBonus = 0;
	this.strengthBonus = 0;
	this.CPUBonus = 0;
}

Battle.Dome.Brainstorm = function () {
	this.name = "Brainstorm"
	this.healthBonus = 0;
	this.strengthBonus = 0;
	this.CPUBonus = 0;
}


Battle.Dome.Entity = function () {
	this.name = "Entity"
	this.healthBonus = 0;
	this.strengthBonus = 0;
	this.CPUBonus = 0;
}
