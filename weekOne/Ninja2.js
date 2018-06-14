function Ninja (name){
	this.name = name;
	this.health = 100;
	var speed = 3;
	var strength = 3;

	this.showStats =function() {
		console.log("Name: " +this.name, "health: " + this.health, "speed: " + speed, "Strength: "+  strength);
		return this;
	}


	this.kick = function(kickedNinja){
		const damage = strength * 3;
		kickedNinja.health -= damage;
		console.log(kickedNinja.name + " was kicked by "+ this.name + " and lost " +damage+ " Health!");
	}

}

	Ninja.prototype.sayName = function() {
		console.log("My name is " + this.name);
		return this;
	}

	Ninja.prototype.drinkSake = function(){
		this.health += 10;
		return this;
	}

	Ninja.prototype.punch = function(punchedNinja){
		punchedNinja.health -= 5;
		console.log(punchedNinja.name + " was punched by "+ this.name + " and lost 5 Health!");
		return this;
	}



var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates")


blueNinja.sayName();
redNinja.sayName();
blueNinja.punch(redNinja);
redNinja.kick(blueNinja);
blueNinja.showStats();
redNinja.showStats();
