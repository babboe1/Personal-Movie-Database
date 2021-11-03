const startAddMovieBtn = document.querySelector('header button');
const addMovieBtn = document.getElementById('add-modal');
const backDrop = document.getElementById('backdrop');
const btnCancel = addMovieBtn.querySelector('.btn--passive');
const btnAdd = addMovieBtn.querySelector('.btn--success');
const userInput = addMovieBtn.querySelectorAll('input');
const inputValue = [];

const backDropToggle = () => {
	backdrop.classList.toggle('visible');
};
const addMovieToggle = () => {
	addMovieBtn.classList.toggle('visible');
};
const startAddMovieBtnHandler = () => {
	addMovieToggle();
	backDropToggle();
};
const btnCancelHandler = () => {
	addMovieToggle();
	backDropToggle();
};
const backDropHandler = () => {
	backDropToggle();
	addMovieToggle();
};
const clearInput = () => {
	for (const ursInput of userInput) {
		ursInput.value = '';
	}
};

const btnAddHandler = () => {
	const movieTitle = userInput[0].value;
	const imageUrl = userInput[1].value;
	const userRating = userInput[2].value;
	if (
		movieTitle.trim() === '' ||
		imageUrl.trim() === '' ||
		+userRating < 0 ||
		+userRating > 5
	) {
		alert('you have inputted the wrong values');
	}
	const getInputValue = {
		title: movieTitle,
		imageUrl: imageUrl,
		rating: userRating,
	};
	inputValue.push(getInputValue);
	const clearInput = () => {
		for (const ursInput of inputValue) {
			ursInput.value = '';
		}
	};
	console.log(inputValue);
	backDropToggle();
	addMovieToggle();
	clearInput();
};

startAddMovieBtn.addEventListener('click', startAddMovieBtnHandler);
btnCancel.addEventListener('click', btnCancelHandler);
backDrop.addEventListener('click', backDropHandler);
btnAdd.addEventListener('click', btnAddHandler);
