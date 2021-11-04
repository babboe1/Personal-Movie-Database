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
const updateUI = () => {
	if (inputValue.length === 0) {
		entryTextSection.style.display = 'block';
	} else {
		entryTextSection.style.display = 'none';
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
	console.log(inputValue);
	backDropToggle();
	addMovieToggle();
	clearInput();
	updateUI();
};

startAddMovieBtn.addEventListener('click', startAddMovieBtnHandler);
btnCancel.addEventListener('click', btnCancelHandler);
backDrop.addEventListener('click', backDropHandler);
btnAdd.addEventListener('click', btnAddHandler);
