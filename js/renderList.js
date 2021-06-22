import {handleClickButton} from './popup.js';

const createRow = (data) => {
	const tr = document.getElementById('row').content.cloneNode(true);
	const date = tr.querySelector('.row__date');
	const title = tr.querySelector('.row__title');
	const subtitle = tr.querySelector('.row__subtitle');
	const likes = tr.querySelector('.row__likes');
	const tdNames = tr.querySelector('.row__names');
	const button = tr.querySelector('.row__btn');

	date.textContent = data.date;

	title.textContent = data.title;
	subtitle.textContent = data.description;

	likes.textContent = data.countLikes;

	data.names.map(name => {
		const pNames = tdNames.querySelector('p').cloneNode(true);
		pNames.textContent = name;
		tdNames.appendChild(pNames);
	})

	button.textContent = data.registrationDisabled ? 'Регистрация закрыта' : 'Зарегистрироваться';
	if (data.registrationDisabled) {
		button.setAttribute( 'disabled', 'disabled');
		button.classList.remove('open-popup');
	}
	button.addEventListener('click', handleClickButton);

	return tr;
}

export const renderList = (list) => {
	const tbody = document.querySelector('tbody');

	list.map(item => {
		tbody.appendChild(createRow(item));
	})
}
