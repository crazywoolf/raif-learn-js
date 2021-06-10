const randomBoolean = () => Boolean(Math.round(Math.random()));

const randomInteger = (min, max) => Math.round(Math.random() * (max - min)) + min;

const randomDate = () => new Date(randomInteger(946688400000, 1623286800000));

const randomLine = () => {
    const lines = [
        'Веницианский карнавал танцев и богохульных плясок: смотрим вместе',
        'Солнцестоим вместе или как провести выходные продуктивно',
        'Бредовые макеты и как с ним работать: спитч о проблемах друзей-фронтендеров',
        'Аукцион: лоснящаяся шкура золотого дракона Монина. Что скрывается в повале офиса Нагатино?',
        'К посещению приглашаются сотрудники 18-',
        'Если вы любите солнце и стоять - то данный курс вам очень подойдет. Мы вместе будем стоять и смотреть на солнце. Чистый кайф.',
        'Что делать если в дизайне, который вам отправил дизайнер написаны бредовые тексты? Посмеяться?! Это что для вас шуточки?!',
        'Если у вас еще осталась зарплата - приходите, мы будем рады ее забрать'
    ];

    return lines[randomInteger(0, 7)];
}

const randomName = () => {
    const firstnames = ['Петр', 'Василий', 'Николай', 'Олег', 'Павел'];
    const surnames = ['Иванов', 'Петров', 'Гагарин', 'Сюткин', 'Грозный'];

    return `${firstnames[randomInteger(0, 4)]} ${surnames[randomInteger(0, 4)]}`;
}

const randomEvent = () => {
    return {
        date: randomDate(),
        title: randomLine(),
        description: randomLine(),
        countLikes: randomInteger(0, 1000),
        names: randomName(),
        registrationDisabled: randomBoolean()
    };
}

const randomEvents = (num) => {
    const events = [];
    for (let i = 0; i < num; i++) {
        events.push(randomEvent());
    }

    return events;
}