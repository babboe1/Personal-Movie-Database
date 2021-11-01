<<<<<<< HEAD
const movieBtn = document.querySelector('header').lastElementChild;
const addMovie = document.getElementById('add-modal')
movieBtn.addEventListener('click', () => {
  addMovie.classList.toggle('visible');
});
=======
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
>>>>>>> 956201adb82d7c9bc063ee4c872bafe211738856
