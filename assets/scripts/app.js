const startAddMovieBtn = document.querySelector('header button');
const addMovieBtn = document.getElementById('add-modal');
const backDrop = document.getElementById('backdrop');
const btnCancel = addMovieBtn.querySelector('.btn--passive');
const btnAdd = addMovieBtn.querySelector('.btn--success');
const userInput = addMovieBtn.querySelectorAll('input');

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

startAddMovieBtn.addEventListener('click', startAddMovieBtnHandler);
btnCancel.addEventListener('click', btnCancelHandler);
backDrop.addEventListener('click', backDropHandler);
btnAdd.addEventListener('click', btnAddHandler);
