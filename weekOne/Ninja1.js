function Ninja (name){
	this.name = name;
	this.health = 100;
	var speed = 3;
	var strength = 3;

	this.sayName = function() {
		console.log("My ninja name is " + this.name + "!");
		return this;
	}
	this.showStats =function() {
		console.log("Name: " +this.name, "health: " + this.health, "speed: " + speed, "Strength: "+  strength);
	}

	this.drinkSake =function() {
		this.health = this.health + 10;
		console.log(this.health);
	}
}

var ninja1 = new Ninja("Naruto");
ninja1.drinkSake();
ninja1.sayName();
ninja1.showStats();

