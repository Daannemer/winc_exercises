const age = 26;

if (age > 18) {

    console.log("You shall pass");

} else {

    console.log("You shall not pass");

}

const isFemale = true;

if (isFemale) {

    console.log("Welcome on Ladies Night");

} else {

    console.log("Not welcome on Ladies Night");

}

const driverStatus = "Henk";

if (driverStatus === "Bob") {

    console.log("Suitable to drive");

} else {

    console.log("Not suitable to drive");

}

if (age > 18 && age < 25) {

    console.log("You receive 50% discount");

}

const Name = "Sarah";

if (Name === "Bram" || Name === "Sarah") {

    console.log("You get one beer for free!");

}

const totalAmount = 14.55;

if (totalAmount > 100) {

    console.log("You get a bottle of champagne for free!");

} else if (totalAmount > 50) {

    console.log("You get nachos for free!");

} else if (totalAmount > 25) {

    console.log("You get bitterballs for free!");

} else if (totalAmount < 25) {

    console.log("Order something for");
    console.log(25 - totalAmount);
    console.log("euro or more to get bitterballs for free!");

}