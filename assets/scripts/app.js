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
const startAddMovieBtnHandler = () => {
	addMovieToggle();
	backDropClickHandler();
};
const btnCancelHandler = () => {
	addMovieToggle();
	backDropClickHandler();
};
const backDropHandler = () => {
	backDropClickHandler();
	addMovieToggle();
};
const btnAddHandler = () => {
	const movieTitle = userInput[0].value;
	const imageUrl = userInput[1].value;
	const userRating = userInput[2].value;
   if (
		movieTitle === '' ||
		imageUrl === '' ||
		+userRating < 0 ||
		+userRating > 5
	) {
		alert('you have inputted the wrong values');
	}
   return;
};

startAddMovieBtn.addEventListener('click', startAddMovieBtnHandler);
btnCancel.addEventListener('click', btnCancelHandler);
backDrop.addEventListener('click', backDropHandler);
btnAdd.addEventListener('click', btnAddHandler);
