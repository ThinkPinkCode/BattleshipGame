/**
 * Created by melanie.myers on 12/15/16.
 */

var boardCoordinates = [];
var shipCoordinates = [];
var missCount = 0;
var hitCount = 0;
var guessCount = 0;

function setShipLocation(){
//todo: randomly choose 3 locations out of ship coordinates

    var ship1 =Math.floor(Math.random()* 48);

    var ship2 =Math.floor(Math.random()* 48);
    var ship3 =Math.floor(Math.random()* 48);


}

function evalGuess() {
    var userGuess = document.getElementById("userGuess").target;
    //todo: convert userGuess to squareID (i.e. A1 to 00)

    if (shipCoordinates.indexOf(userGuess) < 0){
        userMiss(userGuess);

    } else {
        userHit(userGuess)
    }
}

function userMiss(squareId){
    document.getElementById(squareId).innerHTML= "<img src='./images/miss.png'>";
    missCount++;
    guessCount++;

}

function userHit(squareId){
    document.getElementById(squareId).innerHTML = "<img src='./images/ship.png'>";
    hitCount++;
    guessCount++;
}

//for testing
userMiss(35);