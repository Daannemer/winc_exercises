let person = {
    name: 'Daniël',
    age: 33,
    evaluations: [7, 10, 9]

};

let colors = ['green', 'blue', 'red'];

console.log(person);

console.log(person.age);

person.name = 'Sadek';

person['age'] = 32;

console.log(person);

console.log(person.evaluations);

console.log(colors)

console.log(colors.length);

console.log(colors[colors.length - colors.length]);

console.log(colors[colors.length - 1]);

colors.push('yellow');

console.log(colors);

colors.push(5);

console.log(colors);

colors.push('Hi I am an object');

console.log(colors);

console.log(colors[colors.length - 1]);
