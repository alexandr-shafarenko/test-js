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