
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
    whatsMyName() {
    	const valueOfInput = $('#input-box').val();
		console.log(valueOfInput);
		$('h1').append(` ${valueOfInput}`);
		$('#input-box').val('');
    }
    whatsMyHunger() { 
    	$('h2').append(` ${game.currentPlayer.hunger}`);
		$('h2').val('');

    }
}


const game = {
    currentPlayer: null,
    start: function() {
        this.currentPlayer = new Barbarian('Barb');
        console.log(this.currentPlayer);
        this.currentPlayer.attack();
        this.currentPlayer.induceRage();
        this.currentPlayer.whatsMyName();
		this.currentPlayer.whatsMyHunger();


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
	game.currentPlayer.whatsMyHunger();
	// $('h2').append(` ${game.curre}`);
	// $('h2').val('');
	
})


$('#barbarian').on('click', (e) => {
	game.currentPlayer.induceRage()
			
})

$('#submit-btn').on('click', () => {
	game.currentPlayer.whatsMyName();
	// console.log('click works');
	

})












