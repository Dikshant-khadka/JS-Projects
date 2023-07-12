const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn= document.getElementById("btn");
const color= document.querySelector(".color");
btn.addEventListener("click", function(){
    // console.log(document.body);
    // get random number between 0-3
    const randomNumber=Math.floor(Math.random()*colors.length);
    // console.log(randomNumber); // console.log is a way of checking if the code is working using the console
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
    // btn.style.backgroundColor=colors[randomNumber];



})