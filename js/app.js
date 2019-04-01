
class Barbarian {
	constructor(name, hunger, exhaustion, rage, age) {
		this.name = name;
		this.hunger = Math.random() * (10 - 1) + 1;
		this.exhaustion = Math.random() * (10 - 1) + 1;
		this.rage = 2;
		this.age = Math.random() * (100 - 1) + 1;

	}
	attack() {
		console.log(this.name +  " attacks!!");
	}
}

const game = {
	start: () => {
		attack();
		
	}


}

$('#barbarian').on('click', () => {
	console.log("RAAAAAAGGGGGGEEEEEEEE!!!!!");
})

const barb = new Barbarian('Barb');
console.log(barb);

game.start()










