
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
}


const game = {
    currentPlayer: null,
    start: function() {
        this.currentPlayer = new Barbarian('Barb');
        console.log(this.currentPlayer);
        this.currentPlayer.attack();
        this.currentPlayer.induceRage();

    }


}



game.start()



// for debugging -- gives you console access to the most recently clicked element as $it
let $it;
$(document).on('click', (e) => {
  $it = $(e.target);
})


$('.slime').on('click', (e) => {
	game.currentPlayer.attack()
	
})


$('#barbarian').on('click', (e) => {
	game.currentPlayer.induceRage()
			
})

$('#submit-btn').on('click', () => {
	console.log('click works');
})
