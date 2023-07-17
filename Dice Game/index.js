function diceGenerator() {
    var number = Math.random();
    number = number * 6;
    number = Math.floor(number) + 1;
    return number;

}




function diceImage1() {


    var number1 = diceGenerator();
    

    if (number1 === 1) {
        document.getElementById("img1").src = "images/dice1.png";



    } else if (number1 === 2) {

        document.getElementById("img1").src = "images/dice2.png";


    } else if (number1 === 3) {
        document.getElementById("img1").src = "images/dice3.png";


    } else if (number1 === 4) {

        document.getElementById("img1").src = "images/dice4.png";

    } else if (number1 === 5) {
        document.getElementById("img1").src = "images/dice5.png";



    } else {

        document.getElementById("img1").src = "images/dice6.png";



    }

    return number1;



}

function diceImage2() {

    var number2 = diceGenerator();

    if (number2 === 1) {
        document.getElementById("img2").src = "images/dice1.png";



        // var img1 = document.createElement("img");
        // img1.src = "images/dice1.png";
    } else if (number2 === 2) {

        document.getElementById("img2").src = "images/dice2.png";

        // var img2 = document.createElement("img");
        // img2.src = "images/dice2.png";
    } else if (number2 === 3) {
        document.getElementById("img2").src = "images/dice3.png";


        // var img3 = document.createElement("img");
        // img3.src = "images/dice3.png";
    } else if (number2 === 4) {

        document.getElementById("img2").src = "images/dice4.png";

        // var img4 = document.createElement("img");
        // img4.src = "images/dice4.png";
    } else if (number2 === 5) {
        document.getElementById("img2").src = "images/dice5.png";

        // var img5 = document.createElement("img");
        // img5.src = "images/dice5.png";

    } else {

        document.getElementById("img2").src = "images/dice6.png";

        // var img6 = document.createElement("img");
        // img6.src = "images/dice6.png";


    }

    return number2;


}





function finalDisplay() {
   
   
    var left = diceImage1();
   var right=  diceImage2();



    if (left > right) {
        document.querySelector("h1").innerHTML = "Player 1 wins";


    } else if(right>left){
        document.querySelector("h1").innerHTML = "Player 2 wins";

    } else if(left===right){
        document.querySelector("h1").innerHTML = "Press Play again";
    }
}

