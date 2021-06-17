# Вся домашка в одном месте

## Установка и запуск сервера

0. [Установить git](https://clck.ru/V9Qx2)*

    `*` - при работе с git

0. [Установить nodejs](https://clck.ru/V9Qx2)

0. Клонировать репозиторий:
    * Скачать проект (для работы без git)
    * Клонировать проект

0. Перейти в каталог demo/server:

    `cd ./server`

0. Запустить сервер:

    `npm start`

0. Замените `index.html` и `css/style.css` на свои, сделанные в модуле по верстке:

0. Открыть в браузере http://localhost:3000/

## Домашка 1: Делаем mock (рандомные данные)

0. В папке `js` создайте файл `mock.js` и подключите его к вашему html файлу как модуль (`module`)

0. напишите функцию возвращающую случайное булевое значение

0. напишите функцию возвращающую случайную дату

0. напишите функцию возвращающую случайное целое число в диапазоне от min до max

0. напишите функцию возвращающую случайную строчку из набора
    ```
    'Веницианский карнавал танцев и богохульных плясок: смотрим вместе',
    'Солнцестоим вместе или как провести выходные продуктивно',
    'Бредовые макеты и как с ним работать: спитч о проблемах друзей-фронтендеров',
    'Аукцион: лоснящаяся шкура золотого дракона Монина. Что скрывается в повале офиса Нагатино?',
    'К посещению приглашаются сотрудники 18-',
    'Если вы люите солнце и стоять - то данный курс вам очень подойдет. Мы вместе будем стоять и смотреть на солнце. Чистый кайф.',
    'Что делать если в дизайне, который вам отправил дизайнер написаны бредовые тексты? Посмеяться?! Это что для вас шуточки?!',
    'Если у вас еще осталась зарплата - приходите, мы будем рады ее забрать'
    ```

0. напишите функцию возвращающую случайное комбинацию имени из набора
    ```
    имена: 'Петр', 'Василий', 'Николай', 'Олег', 'Павел'
    фамилии: 'Иванов', 'Петров', 'Гагарин', 'Сюткин', 'Грозный'
    ```

0. напишите функцию возвращающую объект (event) с полями
    ```
    date - случайная дата,
    title - случайный текст,
    description - случайный текст,
    countLikes - случайное число,
    names - случайное Имя Фамилия,
    registrationDisabled - случайное булевое значение
   ```

0. напишите функцию возвращающую массив с 10 событиями

0. выведите в консоль результат выполнения функции

## Домашка 2: Получаем данные с сервера
0. В папке `js` создайте файл `getData.js` и подключите его к вашему html файлу как модуль (`module`)

0. Напишите `GET` запрос получения данных с сервера `/data`

0. выведите массив с данными в консоль

0. Добавьте функции параметр callback

0. После получения данных, если callback был передан вызовите его с полученными данными

## Домашка 3: Работаем с DOM
0. В папке `js` создайте файл `renderList.js` и подключите модулем

0. Напишите функцию отрисовки данных в таблице

0. Передайте в метод getData в качестве callback renderList

0. В папке `js` создайте файл `popup.js` и подключите модулем

0. Напишите функцию открытия попапа

0. Напишите функции закрытия поппа по нажатию на крестик или esc

0. При создании кнопки `"Зарегистрироваться"` добавьте слушатель на клик для открытия попапа

## Домашка 4: Настраиваем сборку
0. Установите пакеты eslint, webpack, webpack-cli, webpack-dev-server

0. Создайте файл webpack.config.js

0. Добавьте конфигурацию сборки

0. Добавьте конфигурацию для dev server'а

0. Добавьте скрипты для линтера, сборки и запуска dev server'а

## Домашка 5: Создаем класс Api
0. В папке `js` создайте файл `api.js` и подключите модулем

0. Напишите класс с методами CRUD для отправления соответствующих запросов на сервер
