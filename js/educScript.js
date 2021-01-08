"use strict";

// a = 15;
// console.log(a);

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// // leftBorderWidth = 20;
// // console.log(leftBorderWidth);

// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);

// console.log(name);

// var name = 'Sanya';
// name = 'Alex';

// {
//     let result = 50;
//     var name = 'Sanya';
// }

// console.log(result);
// console.log(name);

// alert(5);
// [].push('a');

// let number1 = 4.6;

// console.log(-4/0);
// console.log('-4/0' * 9);

// const name1 = 'Alex'; 

// const bool = true;
// console.log(bool);

// console.log(asdfsdfa);

// let und;
// console.log(und);

// const obj1 = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(obj1.name);
// console.log(obj1["name"]);

// let arr = ['plum.png', 'orange.jpg', 4, 'apple.bmp', {}, []];
// console.log(arr[4]);

// alert("Hello");

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Are you 18?", "18");
// console.log(typeof(answer + 5));

// const answers = [];

// answers[0] = prompt('What is you first-name?', '');
// answers[1] = prompt('What is you last-name?', '');
// answers[2] = prompt('What is you full-name?', '');


// console.log(typeof(answers));
// console.log(typeof(null));
// document.write(answers);

// const category = 'toys';

// console.log('https://someurl.com/' + category + '/' + '4');
// console.log(`https://someurl.com/${category}/5`);

// const user = 'Alex';
// alert(`Hi, ${user}`);

// console.log('arr' + " - object");
// console.log(4 + " - object");
// console.log(4 + +"5");

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;
// console.log(incr);
// console.log(decr);

// ++incr;
// --decr;
// console.log(incr);
// console.log(decr);

// console.log(++incr);
// console.log(--decr);
// console.log(incr++);
// console.log(decr--);

// console.log(5 % 2);
// console.log(5 == '5');
// console.log(5 === '5');

// const isChecked = false,
//     isClose = false;
// console.log(isChecked || !isClose);
// console.log('Hi!');

let num = 50;
while (num <= 55) {
    console.log(num);
    num++;
}

let num1 = 50;
do {
    console.log(num1);
    num1++;
} while (num1 <= 55);

let num2 = 50;
for (let index = 0; index < num2; index++) {
    if (index === 6) {
        continue;
    }
    console.log(index);
}

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error!');
}

const num3 = 50;
if (num3 < 49) {
    console.log('Error!');
} else if (num3 > 100) {
    console.log('Error!');
} else {
    console.log('Ok!');
}

const abc = (num3 === 50) ? console.log('Ok!') : console.log('Error!');

const num4 = 50;
switch (num4) {
    case 49:
        console.log('Error!');
        break;
    case 100:
        console.log('Error!');
        break;
    case 50:
        console.log('Ok!');
        break;
    default:
        console.log('Not Ok!');
        break;
}