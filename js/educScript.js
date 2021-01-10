// "use strict";

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

// let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// let num1 = 50;
// do {
//     console.log(num1);
//     num1++;
// } while (num1 <= 55);

// let num2 = 50;
// for (let index = 0; index < num2; index++) {
//     if (index === 6) {
//         continue;
//     }
//     console.log(index);
// }

// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error!');
// }

// const num3 = 50;
// if (num3 < 49) {
//     console.log('Error!');
// } else if (num3 > 100) {
//     console.log('Error!');
// } else {
//     console.log('Ok!');
// }

// const abc = (num3 === 50) ? console.log('Ok!') : console.log('Error!');

// const num4 = 50;
// switch (num4) {
//     case 49:
//         console.log('Error!');
//         break;
//     case 100:
//         console.log('Error!');
//         break;
//     case 50:
//         console.log('Ok!');
//         break;
//     default:
//         console.log('Not Ok!');
//         break;
// }

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     num = 50;
// }
// showFirstMessage('Hello world!');
// console.log(num);

// function calc(a, b) {
//     return a + b;
// }
// console.log(calc(10, 20));

// function ret() {
//     let num = 100;

//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);

// let logger = function () {
//     console.log('Expression');
// };
// logger();

// const calcs = (a, b) => {
//     return a + b;
// };

// const str = "test1 test2";
// console.log(str.substring(11, 2));

// const num = 12.2;
// console.log(Math.round(num));

// const nums = '12.2px';
// console.log(parseInt(nums));

// function first() {
//     setTimeout(function () {
//         console.log(1);
//     }, 5000);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// learnJS('JS', first);

// learnJS('JS', function () {
//     console.log('Я прошел этот урок!');
// });

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log('counter');
//     }
// };

// options.makeTest();

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (const key in options) {
//     if (typeof (options[key]) === 'object') {
//         counter++;
//         for (const i in options[key]) {
//             console.log(`Свойство ${key}.${i} - значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} - значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// console.log(Object.keys(options).length);

// const {border, bg} = options.colors;
// console.log(border);
// console.log(bg);

// const arr = [1, 2, 3, 6, 8];
// arr.pop();
// arr.push(10);
// arr.shift();
// arr.unshift(50);

// console.log(arr);

// arr[99] = 0;

// for (const iterator of arr) {
//     console.log(iterator);
// }

// arr.forEach((value, index, arr) => {
//     console.log(`${index}: ${value} внутри массива ${arr}`);
// });

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort(compareNum);
// console.log(products.join('; '));

// function compareNum(a, b) {
//     return a - b;
// }

// let a = 5,
//     b = a;

// b=b+5;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1,
// };

// const copy = obj;

// copy.a=10;
// console.log(copy);
// console.log(obj);

// function copy(mainObject) {
//     let objCopy = {};
//     for (const key in mainObject) {
//         objCopy[key] = mainObject[key];
//     }
//     return objCopy;
// }
// const objCopy = copy(obj);
// console.log(obj);
// objCopy.a = 25;
// objCopy.b = 125;
// console.log(objCopy);

// const add = {
//     d: 17,
//     e: 20,
// };

// console.log(Object.assign({
//     objCopy
// }, add));

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();
// newArray[1] = 'asdsad';
// console.log(oldArray);
// console.log(newArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['abc', 'dfg', 'reqweqw'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];
// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ['a', 'b', 'c'];
// const newArr = [...array];

// const q = {
//     one: 1,
//     two: 2,
// };

// const newObj = {...q};
// newObj.one = 10;
// console.log(newObj);

// let str = 'some';
// let strObj = new String(str);
// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armor: 800,
// };

// const john= {
//     health: 100,
// };

// john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier);

// const johnHunter = Object.create(soldier);

// console.log(johnHunter.armor);

// console.log((String(null)));
// console.log((String(4)));
// console.log(typeof(5 + ''));
// const num =5;
// console.log('https://vk.com/catalog/' + num);
// const fontSize = 26 + 'px';

// console.log(typeof(Number('4')));
// console.log(typeof((+'4')));
// console.log(typeof(parseInt('15px', 10)));


// const falseVals = [0, '', null, undefined, NaN];
// let switcher = null;
// if (switcher) {
//     console.log('Working...');
// }
// switcher = 1;
// if (switcher) {
//     console.log('Working...');
// }

// console.log(typeof(Boolean('4')));

// console.log(typeof(!!'44444'));

// const box = document.getElementById('box');
// console.log(box);
// const button = document.getElementsByTagName('button')[1];
// const buttons = document.getElementsByTagName('button');
// console.log(button);
// console.log(buttons[1]);
// const circles = document.getElementsByClassName('circle');
// console.log(circles);

// const wrapper = document.querySelector('.wrapper');
// const hearts = document.querySelectorAll('.heart');
// console.log(hearts);
// hearts.forEach(item => {
//     console.log(item);
// });

// const heart = wrapper.querySelector('.heart');
// console.log(heart);

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

// box.style.cssText = 'background-color: red; width: 1000px';

// buttons[1].style.borderRadius = '100%';

// for (let index = 0; index < hearts.length; index++) {
//     hearts[index].style.backgroundColor = 'blue';
// }

// hearts.forEach(item => {
//     item.style.backgroundColor = 'green';
// });

// const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

// div.classList.add('black');
// document.body.append(div);
// document.querySelector('.wrapper').append(div);
// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[1].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

// wrapper.appendChild(div);
// wrapper.insertBefore(div, hearts[0]);
// wrapper.removeChild(hearts[1]);
// wrapper.replaceChild(circles[0], hearts[0]);

// div.innerHTML = '<h1>Hello world!</h1>';
// div.textContent = '<h1>Hello world!</h1>';

// div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');