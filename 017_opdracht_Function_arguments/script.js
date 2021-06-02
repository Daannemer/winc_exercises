//No arguments
const paintWalls = function () {

    console.log('The wall has been painted red');

};

paintWalls();

//Single argument
const paintWalls2 = function (color) {

    console.log('The wall has been painted ' + color);

};

paintWalls2('green');

const paintWalls3 = function (color) {

    console.log('The wall has been painted ' + color);

};

const color = 'yellow';

paintWalls3(color);

//Multiple arguments
const paintWalls4 = function (wall, color2) {

    console.log('The ' + wall + ' wall has been painted ' + color2);

};

const wall = 'north';
const color2 = 'orange';

paintWalls4(wall, color2);
