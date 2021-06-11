const askName = function () {
    var person = prompt("Please enter your name", "your name");
    if (person != null) {
        document.getElementById("demo").innerHTML =
            "Hello " + person + "! How are you today?";
    }
}

document.getElementById("demo").innerHTML = 5 + 6;
