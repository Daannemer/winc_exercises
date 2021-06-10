//Greeting Hey kiddo & Hello there
const greeting = function (age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

const sayHello = function (age) {
    if (greeting(age)) {
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
}

console.log(sayHello(14));
console.log(sayHello(25));

//VAT calculations #1

const price = function (basePrice, vatPercentage) {
    const perc = vatPercentage / 100;
    return basePrice * perc;
};

const priceWithVat = function (basePrice, vatPercentage) {
    const priceTotal = price(basePrice, vatPercentage);
    return basePrice + priceTotal;
};

console.log(priceWithVat(1000, 21));
console.log(priceWithVat(2, 9));

