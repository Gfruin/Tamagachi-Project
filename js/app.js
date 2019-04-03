
class Barbarian {
    constructor(name) {
        this.name = name;
        this.hunger = Math.floor(Math.random() * (10 - 1) + 1);
        this.exhaustion = Math.floor(Math.random() * (10 - 1) + 1);
        this.rage = 0;
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
    displayAge() { 
    	$('#age').text(`Age ${game.currentPlayer.age}`);
    }
    increaseAge() {
    	if (game.timer % 5 ==0) {
    	this.age = this.age + 1
    	}
    }
    increaseExhaustion() {
    	if (game.timer % 5 ==0) {
    	this.exhaustion = this.exhaustion + 1
    	}
    }increaseHunger() {
    	if (game.timer % 5 ==0) {
    	this.hunger = this.hunger + 1
    	}
    }decreaseRage() {
    	if (game.timer % 5 ==0) {
    	this.rage = this.rage - 1
    	}
    }
    
}


const game = {
    currentPlayer: null,
    timer: 0,
    interval: null,
    isAlive: true,
    gameOver() { 
    	if(!this.isAlive) {
    		clearInterval(this.interval);
    		
    	}
    },
    lifeCheck: function() {
    	if(this.currentPlayer.rage === 0 || this.currentPlayer.hunger === 10 || this.currentPlayer.exhaustion === 10) {
    		this.isAlive = false
    	}
    },
    start: function() {
        this.currentPlayer = new Barbarian('Barb');
        console.log(this.currentPlayer);
        game.currentPlayer.attack();
        game.currentPlayer.induceRage();
    	this.interval = setInterval(function() {
		game.lifeCheck();
		game.gameOver();
        game.currentPlayer.displayName();
		game.currentPlayer.displayHunger();
		game.currentPlayer.displayExhaustion();
		game.currentPlayer.displayRage();
		game.currentPlayer.displayAge();
		game.currentPlayer.increaseAge();
		game.currentPlayer.increaseExhaustion();
		game.currentPlayer.increaseHunger();
		game.currentPlayer.decreaseRage();
		$('#timer').text("Timer " + game.timer);
		game.timer++;
		}, 1000)

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
	game.currentPlayer.displayExhaustion();
			
})

$('#submit-btn').on('click', () => {
	game.currentPlayer.displayName();
	// console.log('click works');
	

})

// $('#timer').text("Timer" + game.timer);










