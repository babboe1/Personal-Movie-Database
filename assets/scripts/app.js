const startAddMovieBtn = document.querySelector('header button');
const addMovieBtn = document.getElementById('add-modal');
const backDrop = document.getElementById('backdrop');
const btnCancel = addMovieBtn.querySelector('.btn--passive');
const btnAdd = btnCancel.nextElementSibling;
const userInput = addMovieBtn.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const inputValue = [];

const backDropToggle = () => {
	backdrop.classList.toggle('visible');
};
const addMovieToggle = () => {
	addMovieBtn.classList.toggle('visible');
	backDropToggle();
};
const startAddMovieBtnHandler = () => {
	addMovieToggle();
	backDropToggle();
};
const btnCancelHandler = () => {
	addMovieToggle();
	clearInput();
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
const newMovieElement = (title, image, rating) => {
	const newElement = document.createElement('li');
	newElement.className = 'movie-element';
	newElement.innerHTML = `
      <div class="movie-element__image">
         <img src="${image}" alt="${title}"/>
      </div>
      <div class="movie-element__info">
         <h2>${title}</h2>
         <p>${rating}/5 stars</p>
      </div>
      `;
	const movieList = document.getElementById('movie-list');
	movieList.append(newElement);
};
const btnAddHandler = () => {
	const movieTitle = userInput[0].value;
	const imageUrl = userInput[1].value;
	const userRating = userInput[2].value;
	if (
		movieTitle.trim() === '' ||
		imageUrl.trim() === '' ||
		userRating.trim() === '' ||
		+userRating < 0 ||
		+userRating > 5
	) {
		alert('you have inputted the wrong values');
		return;
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
	newMovieElement(
		getInputValue.title,
		getInputValue.imageUrl,
		getInputValue.rating
	);
	updateUI();
};

startAddMovieBtn.addEventListener('click', startAddMovieBtnHandler);
btnCancel.addEventListener('click', btnCancelHandler);
backDrop.addEventListener('click', backDropHandler);
btnAdd.addEventListener('click', btnAddHandler);
