
// ----------------- VIEW ------------------------
var view = {
    displayMessage: function (message) {

        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = message;
    },

    displayHit: function (location) {
        var squareId = document.getElementById(location);
        squareId.setAttribute("class", "hit");
    },

    displayMiss: function (location) {
        var squareId = document.getElementById(location);
        squareId.setAttribute("class", "miss");

    }
};


// ----------------- MODEL ------------------------


var model = {
    boardSize: 49,
    boardWidth: 7,
    numShips: 3,
    shipsSunk: 0,
    shipLength: 3,


    ships: [
        {locations: [0, 1, 2], hits: []},
        {locations: [6, 13, 20], hits: []},
        {locations: [47, 48, 49], hits: []}

    ],

    fire: function (guess) {
        var miss = true;

        for (var i = 0; i < this.numShips; i++) {

            if (this.ships[i].locations.indexOf(guess) > -1) {
                view.displayHit(guess);
                view.displayMessage("A hit!");
                this.ships[i].hits.push(guess);
                miss = false;
            }

            if(!miss){
                this.isSunk(i);
                return;
            }
        }

        if (miss) {
            view.displayMiss(guess);
            view.displayMessage("Miss!");
        }



    },


    isSunk: function (i) {
        if (this.ships[i].hits.length !== model.shipLength) {
            console.log("not sunk");
            return false;
        } else
            console.log("Ship Sunk!");
            this.shipsSunk++;
            this.isGameOver();
            return true;
    },



    isGameOver: function() {
        if(this.shipsSunk < 3 ){
            return false;
        } else {
            view.displayMessage("Game Over! All 3 ships are sunk");
            return true;
        }
    }


};

// ----------------- CONTROLLER ------------------------

var controller
= {
    guesses: 0,
    formattedGuess: "",
    validFirstChar: ["a", "b", "c", "d", "e", "f", "g"],

    processGuess: function (guess) {

        guess.toLowerCase();
        guess.isValid();
        guess.convertToNum();


    },

    isValid: function(guess){


        var validSecondChar = [0, 1, 2, 3, 4, 5, 6];

        if( guess.length !== 2 || this.validFirstChar.indexOf(guess.charAt(0)) < 0 || validSecondChar.indexOf(guess.charAt(1))< 0){
            return false;
        }

        return true;
    },

    convertToNum: function(guess){
        this.formattedGuess = parseInt(guess) + (this.validFirstChar.indexOf(guess.charAt(0)) * model.boardWidth)

    },



//GET AND PROCESS PLAYER'S GUESS


// KEEP TRACK OF # OF GUESSES
// ASK MODEL TO UPDATE ITSELF BASED ON LATEST GUESS
// DETERMINE WHEN THE GAME IS OVER

}



// ----------------- TESTING ------------------------
model.fire(2);
model.fire(7);
model.fire(0);
model.fire(1);
console.log("ships sunk :" + model.shipsSunk);


