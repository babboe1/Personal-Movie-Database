const startAddMovieBtn = document.querySelector('header button');
const addMovieBtn = document.getElementById('add-modal');
const backDrop = document.getElementById('backdrop');
const btnCancel = document.querySelector('.btn--passive');

const backDropClickHandler = () => {
	backdrop.classList.toggle('visible');
};

const addMovieToggle = () => {
	addMovieBtn.classList.toggle('visible');
};

startAddMovieBtn.addEventListener('click', () => {
	addMovieToggle();
	backDropClickHandler();
});

const CANCEL_EVENT = () => {
	btnCancel.addEventListener('click', () => {
		addMovieToggle();
		backDropClickHandler();
	});
	backDrop.addEventListener('click', () => {
		backDropClickHandler();
		addMovieToggle();
	});
};
CANCEL_EVENT();
