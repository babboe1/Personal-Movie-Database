const startAddMovieBtn = document.querySelector('header button');
const addMovieBtn = document.getElementById('add-modal');
const backDrop = document.getElementById('backdrop');
const btnCancel = document.querySelector('.btn--passive');

const backDropToggle = () => {
	backdrop.classList.toggle('visible');
};

startAddMovieBtn.addEventListener('click', () => {
	addMovieBtn.classList.toggle('visible');
	backDropToggle();
});

btnCancel.addEventListener('click', () => {
	addMovieBtn.classList.toggle('visible');
	backDropToggle();
});
