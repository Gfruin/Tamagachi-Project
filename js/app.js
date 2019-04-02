
class Barbarian {
	constructor(name) {
		this.name = name;
		this.hunger = Math.random() * (10 - 1) + 1;
		this.exhaustion = Math.random() * (10 - 1) + 1;
		this.rage = 2;
		this.age = Math.random() * (100 - 1) + 1;

	}
	attack() {
		$('.slime').on('click', (e) => {
			console.log('clicked!');
			if(this.hunger >= 0) {
				this.hunger = this.hunger - 1;
			}
			this.rage = this.rage + 1 ;
			
			
		})
		// this.rage = this.rage + 1;
		console.log( this.name +  " attacks!!");
		
		}
	}

const game = {
	currentPlayer: null,
	start: function() {
		this.currentPlayer = new Barbarian('Barb');
		console.log(this.currentPlayer);
		this.currentPlayer.attack();
		
	}


}

$('#barbarian').on('click', () => {
	console.log("RAAAAAAGGGGGGEEEEEEEE!!!!!");
})



game.start()










