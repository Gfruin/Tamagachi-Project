class Barbarian {
    constructor(name) {
        this.name = name;
        this.hunger = Math.floor(Math.random() * (10 - 1) + 1);
        this.exhaustion = Math.floor(Math.random() * (10 - 1) + 1);
        this.rage = 6;
        this.age = Math.floor(Math.random() * (100 - 1) + 1);

    }
    attack() {

        if (this.hunger > 0) {
            this.hunger = this.hunger - 1;
        }
        if (this.exhaustion < 10) {
            this.exhaustion = this.exhaustion + 1;
        }
        this.rage = this.rage + 1;

        // this.rage = this.rage + 1;
        // console.log(this.name + " attacks!!");
        $('#words').text(` ${this.name} CONSUMES THE WEAK!!!!`)

    }
    induceRage() {
        if (this.rage > 0) {
            this.rage = this.rage + 1;
            $('#words').text("RAAAAAAAGGGGGGGGGGEEEEEEEEEE!!!!!!!!!!");
            // console.log("RAAAAAAGGGGGGEEEEEEEE!!!!!");

        }
        if (this.exhaustion > 0) {
            this.exhaustion = this.exhaustion - 1;
        }
    }
    displayName() {
        // const valueOfInput = $('#input-box').val();
        // console.log(valueOfInput);

        $('#name').text(` ${this.name}`);
        $('#input-box').val('');
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
        if (game.timer % 5 == 0) {
            this.age = this.age + 1
        }
    }
    increaseExhaustion() {
        if (game.timer % 5 == 0) {
            this.exhaustion = this.exhaustion + 1
        }
    }
    increaseHunger() {
        if (game.timer % 5 == 0) {
            this.hunger = this.hunger + 1
        }
    }
    decreaseRage() {
        if (game.timer % 5 == 0) {
            this.rage = this.rage - 1
        }
    }
    evolve() {
        if (this.rage >= 20) {
            $('#picBro').attr('src', 'https://vignette.wikia.nocookie.net/pfadventures/images/c/c1/Amiri_portrait_alternate-1323-0.png/revision/latest?cb=20170819202803');
            $('#words').text(`NO ONE CAN STOP ${this.name} !!!!!!! RAMPAGE!!!!`)
        }
    }
    noSleep() {
        // console.log("no sleep function fired");
        if (this.exhaustion > 0) {
            this.exhaustion = this.exhaustion + 1;
            $('#words').text("NO SLEEPING, WEAKLING!!!!")
            // $('#words').text('');
        }
    }
    // switchImg() {
    // 	function change() {
    // 		let newPic = document.getElementbyId('#barbarian');
    // 		if(this.rage >= 20) {
    // 			image.src ="https://vignette.wikia.nocookie.net/pfadventures/images/c/c1/Amiri_portrait_alternate-1323-0.png/revision/latest?cb=20170819202803"
    // 	}

    // 	}
    // }

}


const game = {
    name: null,
    currentPlayer: null,
    timer: 0,
    interval: null,
    isAlive: true,
    // gameOn: false,
    gameWin() {
        if (this.rage === 10) {
            $('#gameover').text('FEAST ON THE BONES OF THE SLAIN!!!!!')
            clearInterval(this.interval);
        }
    },
    gameOver() {
        if (!this.isAlive) {
            // const newImg = "Amiri"
            $('#gameover').text(`${this.name} has FAILED!!!! ${this.name}, you failed to CRUSH your ENEMIES and CONSUME their SOULS! The lowly SLIMES reign victorious over your LONELY BONES!!!`);
            clearInterval(this.interval);

        }
    },
    lifeCheck: function() {
        if (this.currentPlayer.rage === 0 || this.currentPlayer.hunger === 10 || this.currentPlayer.exhaustion === 10) {
            this.isAlive = false
        }
    },
    start() {

        this.name = $('#input-box').val();

        $('#name').text(` ${this.name}`);

        // get value of input 
        // const valueOfInput = ;

        this.currentPlayer = new Barbarian(this.name);
        // if ( game.gameOn === false) {
        game.currentPlayer.displayName();
        // console.log(this.currentPlayer);
        // game.currentPlayer.noSleep();
        // game.currentPlayer.attack();
        // game.currentPlayer.induceRage();
        // game.currentPlayer.switchImg();
        this.interval = setInterval(function() {
            game.lifeCheck();
            game.gameOver();
            game.gameWin();
            game.currentPlayer.displayHunger();
            game.currentPlayer.displayExhaustion();
            game.currentPlayer.displayRage();
            game.currentPlayer.displayAge();
            game.currentPlayer.increaseAge();
            game.currentPlayer.increaseExhaustion();
            game.currentPlayer.increaseHunger();
            game.currentPlayer.decreaseRage();
            game.currentPlayer.evolve();
            $('#timer').text("Timer " + game.timer);
            game.timer++;
        }, 1000)

        // }
    }
}



// game.start()



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

$('#submit-btn').on('click', (e) => {
    /// get name
    // game.currentPlayer.displayName();
    e.preventDefault();
    game.start();
    // console.log('click works');

})

$('#sleep-btn').on('click', (e) => {
    game.currentPlayer.noSleep();
    console.log("button clicked!");

})

// $('#timer').text("Timer" + game.timer);