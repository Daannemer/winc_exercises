//HTML elements
const background = document.querySelector(".backgroundBody");
const dropDownDiv = document.querySelector(".expand");
const dropDownMenu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");

//Background elements
const homeBackground = document.querySelector(".home");
const redBackground = document.querySelector(".red");
const blueBackground = document.querySelector(".blue");
const greenBackground = document.querySelector(".green");


//Expand menu
hamburger.addEventListener("mouseover", function () {
    dropDownMenu.classList.toggle("visible");
})

//Changing backgrounds

//Home
homeBackground.addEventListener("click", function () {
    background.className = "home-background";
    dropDownMenu.classList.remove("visible");
    textBackground.innerHTML = "Background color is grey";
})

//Red
redBackground.addEventListener("click", function () {
    background.className = "red-background";
    dropDownMenu.classList.remove("visible");
    textBackground.innerHTML = "Background color is red";

})

//Blue
blueBackground.addEventListener("click", function () {
    background.className = "blue-background";
    dropDownMenu.classList.remove("visible");
    textBackground.innerHTML = "Background color is blue";
})

//Green
greenBackground.addEventListener("click", function () {
    background.className = "green-background";
    dropDownMenu.classList.remove("visible");
    textBackground.innerHTML = "Background color is green";
})

//Bonus
let textBackground = document.querySelector(".backgroundText");
