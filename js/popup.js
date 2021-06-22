const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

const handleClickClose = () => {
	popup.classList.remove('show');
	window.removeEventListener('keydown', handleKeydownEsc);
	close.removeEventListener('click', handleClickClose);
};

const handleKeydownEsc = (e) => {
	if (e.keyCode == 27 || e.key === 'Escape') {
		popup.classList.remove('show');
		window.removeEventListener('keydown', handleKeydownEsc);
		close.removeEventListener('click', handleClickClose);
	}
};

export const handleClickButton = () => {
	if (!popup.classList.contains('show')) {
		popup.classList.add('show');
		window.addEventListener('keydown', handleKeydownEsc);
		close.addEventListener('click', handleClickClose);
	}
};
