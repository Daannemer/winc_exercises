//While loop
let colors = ['yellow', 'blue', 'red', 'orange'];

var count = 0;
while (count < colors.length) {
    console.log(colors[count]);
    count++;

};

//For loop

for (i = 0; i < colors.length; i++)
    console.log(colors[i]);

const array1 = ['a', 'b', 'c'];

//forEach

colors.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

// 1. For loop --> 3 regels, While loop --> 5 regels.
// 2. forEach neemt 1 regel in beslag.
// 3. De array method is veel makkelijker leesbaar omdat het maar één regel code is en het gebruikt "meer logische" bewoordingen.
// 4. 
