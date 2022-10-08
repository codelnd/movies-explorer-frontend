# Movies Explorer

***

## Проект Movies Explorer - выпускная работа по профессии веб-разработчик курса [Яндекс.Практикум](https://praktikum.yandex.ru 'Яндекс Практикум')

## Описание проекта:

Пользователь вводит в строку ключевые слова и нажимает кнопку поиска. После этого сайт должен выполнить два действия:

- отправить запрос к сервису MoviesAPI, найти все подходящие материалы и отобразить карточки с ними;
- когда пользователь сохранит понравившиеся фильмы, они должны отобразиться в специальном разделе на сайте.

Сайт состоит из четырех основных страниц:

- Главная: содержит небольшое описание проекта и информацию о разработчике.
- Странца с данными пользователя: содержит информацию об электронной почте и имени пользователя, которые можно изменить.
- Странца с фильмами: содержит окно поиска
- Страница с сохранёнными фильмами. На ней отображаются карточки, которые пользователь добавил в избранное.

Кроме них на сайте есть страницы регистрации и авторизации.


## Функционал:
- Регистрация и авторизация пользователей
- Возможность изменить имя и email зарегистрированного пользователя
- Поиск фильмов 
- Фильтр короткометражных фильмов
- Сохранение фильмов на отдельной странице
- При клике на превью фильма ссылка ведет на его трейлер
- Подгрузка фильмов нажатием на кнопку "Еще", адаптированная под определенное разрешения экрана
- Прелоадер при ожидании запроса
- Валидация всех полей


## Стек технологий:
![JavaScript](https://img.shields.io/badge/-JavaScript-000?style=for-the-badge&logo=javascript)
![ReactJs](https://img.shields.io/badge/-React-000?style=for-the-badge&logo=react)
![Webpack](https://img.shields.io/badge/-webpack-000?style=for-the-badge&logo=webpack)
![HTML](https://img.shields.io/badge/-HTML-000?style=for-the-badge&logo=html5)
![CSS](https://img.shields.io/badge/-CSS-000?style=for-the-badge&logo=css3)


## Как запустить:
Клонировать репозиторий и установить зависимости.
```
git clone https://github.com/codelnd/movies-explorer-frontend.git
cd movies-explorer-frontend
npm install
```

## Планы по доработке:
- Рефакторинг стилей на Sass
- Добавить Redux или MobX для избавления от излишней вложенности
- Переписать код на TypeScript
- Переписать запросы на Async/Await


## CLI:
```
npm run start // Запуск dev сервера
npm run build // Сборка проекта
```

## Ссылки:

[Ссылка на Pull Request](https://github.com/codelnd/movies-explorer-frontend/pull/2)

Проект: *https://findmovies.nomoredomains.xyz*
