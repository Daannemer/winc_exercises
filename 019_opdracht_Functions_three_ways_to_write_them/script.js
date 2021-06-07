function process(number1, number2) {

    console.log((number1 * number1 + number2 * number2) * (number1 * number1 + number2 * number2));
}
process(6, 6);

const process2 = function (number1, number2) {
    return ((number1 * number1 + number2 * number2) * (number1 * number1 + number2 * number2));
};

const answer = process2(6, 6);
console.log(answer);

const process3 = (number1, number2) => {
    return ((number1 * number1 + number2 * number2) * (number1 * number1 + number2 * number2));
};

const answer2 = process3(6, 6);
console.log(answer2);
