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

function checkNumber(message, defaultAnswer) {
    let question;
    do {
        question = parseInt(prompt(message, defaultAnswer));
        if (!isNaN(question)) {
            return question;
        }
    } while (isNaN(question));
}

const numberOfFilms = checkNumber('Сколько фильмов вы уже посмотрели?', 'Введите число...');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const numberOfFilmQuestions = 2;

for (let i = 0; i < numberOfFilmQuestions; i++) {
    let key = prompt('Один из последних просмотренных фильмов?', 'Введите название фильма...');
    let value = checkNumber('На сколько оцените его?', 'Введите число...');
    personalMovieDB.movies[key] = value;
}