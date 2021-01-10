"use strict";

const numberOfFilmQuestions = 2;
const numberOfGenreQuestions = 3;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    showDB: function () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },
    start: function () {
        personalMovieDB.count = personalMovieDB.checkNumber('Сколько фильмов вы уже посмотрели?', 'Введите число...');
    },
    rememberMyFilms: function () {
        for (let i = 0; i < numberOfFilmQuestions; i++) {
            const key = personalMovieDB.checkString('Один из последних просмотренных фильмов?', 'Введите название фильма...'),
                value = personalMovieDB.checkNumber('На сколько оцените его?', 'Введите число...');
            personalMovieDB.movies[key] = value;
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов!');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель!');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман!');
        } else {
            alert('Произошла ошибка!');
        }
    },
    whriteYourGenres: function () {
        // for (let index = 0; index < numberOfGenreQuestions; index++) {
        //     personalMovieDB.genres[index] = personalMovieDB.checkString(`Ваш любимый жанр под номером ${index + 1}`, 'Введите название жанра...');
        // }
        // personalMovieDB.genres.forEach((value, index) => {
        //     console.log(`Любимый жанр #${index + 1} - это ${value}`);
        // });
        let genres = personalMovieDB.checkString(`Ваши любимые жанры`, 'Введите названия жанров через запятую...').toLowerCase();
        personalMovieDB.genres = genres.split(', ');
        personalMovieDB.genres.sort();

        personalMovieDB.genres.forEach((value, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${value}`);
        });
    },
    checkNumber: function (message, defaultAnswer) {
        let question;
        do {
            question = parseInt(prompt(message, defaultAnswer));
        } while (isNaN(question));
        return question;
    },
    checkString: function (message, defaultAnswer) {
        let question;
        let checkedQuestion;
        do {
            question = prompt(message, defaultAnswer);
            checkedQuestion = (question != null && question != '' && question.length < 50 && question != defaultAnswer) ? true : false;
        } while (!checkedQuestion);
        return question;
    },
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.whriteYourGenres();
// personalMovieDB.showDB();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showDB();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showDB();