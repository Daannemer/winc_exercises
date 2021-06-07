/*const numberCheck = function (number) {
  const check = number > 100;
return check;
};

result = numberCheck(99);
console.log(result);
*/

/*const bouncerBrenda = function (age, maxGuests, guests) {
    //  const checkAge = age < 18;
    if (age < 18) {
        return "this is a club for adults";
    }

    const maxCapacity = maxGuests - guests;
    if (maxCapacity > 0) {
        return "come in";
    }

    return "it's too busy now, come back later";
};

answer = bouncerBrenda(18, 100, 91);
console.log(answer);
*/

const calculation = function (number1, number2, number3, number4, number5) {
    const average = ((number1 + number2 + number3 + number4 + number5) / arguments.length);
    return average;
};

result = calculation(10, 20, 30, 40, 50);
console.log(result);


