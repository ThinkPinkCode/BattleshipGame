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


var model = {
    boardSize: 49,
    numShips: 3,
    shipsSunk: 0,
    shipLength: 3,

//array of ships, values temp hard-coded

    ships: [
        {locations: ["00", "01", "02"], hits: []},
        {locations: ["06", "13", "20"], hits: []},
        {locations: ["47", "48", "49"], hits: []}

    ],

    fire: function (guess) {
        var miss;

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
            return true;
    }


};

model.fire("02");
model.fire("07");
model.fire("00");
model.fire("01");


