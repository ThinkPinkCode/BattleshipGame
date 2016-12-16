
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
    numShips: 3,
    shipsSunk: 0,
    shipLength: 3,


    ships: [
        {locations: ["00", "01", "02"], hits: []},
        {locations: ["06", "13", "20"], hits: []},
        {locations: ["47", "48", "49"], hits: []}

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

    processGuess: function (guess) {
        var formattedGuess = parseInt(guess) + 7;
    },

    isValid: function(guess){

        if( guess.length !== 2){
            return false;
        }

        

    }
//GET AND PROCESS PLAYER'S GUESS


// KEEP TRACK OF # OF GUESSES
// ASK MODEL TO UPDATE ITSELF BASED ON LATEST GUESS
// DETERMINE WHEN THE GAME IS OVER

}



// ----------------- TESTING ------------------------
model.fire("02");
model.fire("07");
model.fire("00");
model.fire("01");
console.log("ships sunk :" + model.shipsSunk);


