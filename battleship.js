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

    },
};


var model = {
    boardSize: 49,
    numShips: 3,
    shipsSunk: 0,
    shipLength: 3,

//array of ships, values temp hard-coded

    ships: [
        {locations: ["06", "16", "26"], hits: ["", "", ""]},
        {locations: ["24", "34", "44"], hits: ["", "", ""]},
        {locations: ["10", "11", "12"], hits: ["", "", ""]},

    ],

    fire: function(guess){
        for (var i =0; i < this.numShips; i++){

            var ship = this.ships[i];
            var locations = ship.locations;



            if(locations.indexOf(guess)> -1){
                view.displayHit(guess);
                view.displayMessage("A hit!");
            }
        }
    }


};

model.fire("10");














// /**
//  * Created by melanie.myers on 12/15/16.
//  */
//
// var boardCoordinates = [];
// var shipCoordinates = [];
// var missCount;
// var hitCount;
// var guessCount;
//
//
// function initBoard(boardSize) {
//     for (var i = 0; i < boardSize; i++) {
//         boardCoordinates.push(i);
//     }
//
//     function placeShips(numOfShips) {
//
//         for (var i = 0; i < numOfShips; i++) {
//             var randomLoc = Math.floor(Math.random() * boardCoordinates.length);
//             shipCoordinates.push(randomLoc);
//             //todo: add way to verify locations aren't duplicates
//         }
//
//         console.log(shipCoordinates);
//     }
//
//     placeShips(3);
//
// }
//
//
// function userHit(squareId) {
//     document.getElementById(squareId).className = "hit";
//     hitCount++;
//     guessCount++;
//     alert("Hit");
// }
//
// function userMiss(squareId) {
//     document.getElementById(squareId).className = "miss";
//     missCount++;
//     guessCount++;
//     alert("Miss!");
//
// }
//
//
// function evalGuess() {
//     var guess = document.getElementById("userGuess").target;
//     //todo: convert userGuess to squareID (i.e. A1 to 00)
//     console.log("user guessed " + guess);
//
//     if (shipCoordinates.indexOf(guess) < 0) {
//         userMiss(guess);
//         console.log("user miss");
//
//     } else {
//         userHit(guess)
//         console.log("user hit");
//     }
// }




