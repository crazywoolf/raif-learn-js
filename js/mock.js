const names = ['Петр', 'Василий', 'Николай', 'Олег', 'Павел'];
const surnames = ['Иванов', 'Петров', 'Гагарин', 'Сюткин', 'Грозный'];
const texts = [
	'Веницианский карнавал танцев и богохульных плясок: смотрим вместе',
	'Солнцестоим вместе или как провести выходные продуктивно',
	'Бредовые макеты и как с ним работать: спитч о проблемах друзей-фронтендеров',
	'Аукцион: лоснящаяся шкура золотого дракона Монина. Что скрывается в повале офиса Нагатино?',
	'К посещению приглашаются сотрудники 18-',
	'Если вы люите солнце и стоять - то данный курс вам очень подойдет. Мы вместе будем стоять и смотреть на солнце. Чистый кайф.',
	'Что делать если в дизайне, который вам отправил дизайнер написаны бредовые тексты? Посмеяться?! Это что для вас шуточки?!',
	'Если у вас еще осталась зарплата - приходите, мы будем рады ее забрать'
];

const getRandomInteger = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomName = () => {
	return `${names[getRandomInteger(0, names.length - 1)]} ${surnames[getRandomInteger(0, surnames.length - 1)]}`;
};

const getRandomText = () => {
	return texts[getRandomInteger(0, texts.length - 1)];
};

const getRandomBoolean = () => Boolean(Math.round(Math.random()));

const getRandomDate = () => {
	return new Date(+(new Date()) - Math.floor(Math.random()*10000000000));
}

const generateEvent = () => {
	return {
		date: getRandomDate().toISOString().substring(0, 10),
		title: getRandomText(getRandomInteger(20, 40)),
		description: getRandomText(getRandomInteger(20, 40)),
		countLikes: getRandomInteger(10, 140),
		names: Array(getRandomInteger(1, 3)).fill({}).map(() => getRandomName()),
		registrationDisabled: getRandomBoolean()
	}
};

export const eventsData = Array(10).fill({}).map(() => generateEvent());
console.log(eventsData);
