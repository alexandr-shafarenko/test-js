/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'),
    films = document.querySelectorAll('.promo__interactive-item');

adv.forEach(item => {
    item.remove();
});

genre.textContent = 'Драма';

const bg = document.querySelector('.promo__bg');
bg.style.backgroundImage = "url('../img/bg.jpg')";

movieDB.movies.sort();
movieDB.movies.forEach((item, key) => {
    console.log(films[key].textContent);
    films[key].textContent = key + ". " + item;
});

// movieList.innerHTML = "";
// movieDB.movies.sort();
// movieDB.movies.forEach((item, key) => {
//     movieList.innerHTML += `
//         <li class="promo__interactive-item">${key + 1}. ${item}
//             <div class="delete"></div>
//         </li>
//     `;
// });