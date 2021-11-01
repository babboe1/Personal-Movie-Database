const startAddMovieBtn = document.querySelector('header button');
const addMovieBtn = document.getElementById('add-modal');
const backDrop = document.getElementById('backdrop');
const btnCancel = document.querySelector('.btn--passive');

const backDropFunction = () => {
	backDrop.classList.toggle('visible');
};

startAddMovieBtn.addEventListener('click', () => {
	addMovieBtn.classList.toggle('visible');
	backDropFunction();
});

btnCancel.addEventListener('click', () => {
	backdrop.classList.toggle('visible');
	addMovieBtn.classList.toggle('visible');
});
