//Alert me notification
const bttn = document.querySelector(".btn-alert");

const showAlert = function () {
    alert("You have clicked me!");
};

bttn.addEventListener("click", showAlert);

//Change background color on click

const bttn2 = document.querySelector(".btn-change");
const body = document.querySelector("body")

const changeBackground = function () {
    body.classList.add("red-background");
};

bttn2.addEventListener("click", changeBackground);

//Toggle background color on click

const bttn3 = document.querySelector(".btn-toggle");
const body2 = document.querySelector("body")

const toggleBackground = function () {
    body2.classList.toggle("red-background");
};

bttn3.addEventListener("click", toggleBackground);