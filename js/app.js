
class Barbarian {
    constructor(name) {
        this.name = name;
        this.hunger = Math.floor(Math.random() * (10 - 1) + 1);
        this.exhaustion = Math.floor(Math.random() * (10 - 1) + 1);
        this.rage = 2;
        this.age = Math.floor(Math.random() * (100 - 1) + 1);

    }
    attack() {

        if (this.hunger > 0) {
            this.hunger = this.hunger - 1;
        }
        if(this.exhaustion < 10) {
        	this.exhaustion = this.exhaustion + 1;
        }
        this.rage = this.rage + 1;

        // this.rage = this.rage + 1;
        console.log(this.name + " attacks!!");

    }
    induceRage() {
        if (this.rage > 0) {
            this.rage = this.rage + 1;
            console.log("RAAAAAAGGGGGGEEEEEEEE!!!!!");

        }
        if(this.exhaustion > 0) {
        	this.exhaustion = this.exhaustion - 1;
        }
    }
    displayName() {
    	const valueOfInput = $('#input-box').val();
		console.log(valueOfInput);
		$('#name').text(` ${valueOfInput}`);
		// $('#input-box').val('');
    }
    displayHunger() { 
    	$('#hunger').text(`Hunger ${game.currentPlayer.hunger}`);
		// $('h2').val('');

    }
    displayExhaustion() { 
    	$('#exhaustion').text(`Exhaustion ${game.currentPlayer.exhaustion}`);
    }
    displayRage() { 
    	$('#rage').text(`Rage ${game.currentPlayer.rage}`);
    }

}


const game = {
    currentPlayer: null,
    start: function() {
        this.currentPlayer = new Barbarian('Barb');
        console.log(this.currentPlayer);
        this.currentPlayer.attack();
        this.currentPlayer.induceRage();
        this.currentPlayer.displayName();
		this.currentPlayer.displayHunger();
		this.currentPlayer.displayExhaustion();
		this.currentPlayer.displayRage();



	}

}



game.start()



// for debugging -- gives you console access to the most recently clicked element as $it
let $it;
$(document).on('click', (e) => {
  $it = $(e.target);
})


$('.slime').on('click', (e) => {
	game.currentPlayer.attack();
	game.currentPlayer.displayHunger();
	game.currentPlayer.displayExhaustion();
	// $('h2').append(` ${game.curre}`);
	// $('h2').val('');
	
})


$('#barbarian').on('click', (e) => {
	game.currentPlayer.induceRage();
	game.currentPlayer.displayRage();
			
})

$('#submit-btn').on('click', () => {
	game.currentPlayer.displayName();
	// console.log('click works');
	

})












