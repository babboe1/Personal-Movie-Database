const startAddMovieBtn = document.querySelector('header button');
const addMovieBtn = document.getElementById('add-modal');
const backDrop = document.getElementById('backdrop');
const btnCancel = addMovieBtn.querySelector('.btn--passive');
const btnAdd = btnCancel.nextElementSibling;
const userInput = addMovieBtn.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const movieList = document.getElementById('movie-list');
const deleteMovieModal = document.getElementById('delete-modal');
const cancelDeleteBtn = deleteMovieModal.querySelector('.btn--passive');
const confirmDeleteBtn = document.querySelector('.btn--danger');
const inputValue = [];

const loadData = () => {
   updateUI();
	const data =
		localStorage.getItem('data') !== null
			? JSON.parse(localStorage.getItem('data'))
			: [];
	data?.map((item) => {
      addToMovieList(item);
	});
};

const backDropToggle = () => {
	backDrop.classList.toggle('visible');
};
const addMovieToggle = () => {
	addMovieBtn.classList.toggle('visible');
	backDropToggle();
};
const startAddMovieBtnHandler = () => {
	addMovieToggle();
};
const btnCancelHandler = () => {
	if (deleteMovieModal.click) {
		backDropToggle();
		addMovieBtn.classList.remove('visible');
		deleteMovieModal.classList.remove('visible');
	} else {
		addMovieToggle();
	}
	clearInput();
};
const backDropHandler = () => {
	if (deleteMovieModal.click) {
		addMovieBtn.classList.remove('visible');
		backDrop.classList.remove('visible');
		deleteMovieModal.classList.remove('visible');
	} else {
		backDropToggle();
	}
};
const clearInput = () => {
	for (const ursInput of userInput) {
		ursInput.value = '';
	}
};
const updateUI = () => {
	if (
		localStorage.getItem('data') === null ||
		JSON.parse(localStorage.getItem('data')).length === 0
	) {
		entryTextSection.style.display = 'block';
	} else {
		entryTextSection.style.display = 'none';
	}
};

const addToMovieList = (item) => {
   const newElement = document.createElement('li');
   newElement.setAttribute('id', item.id);
	newElement.className = 'movie-element';
	newElement.innerHTML = `
      <div class="movie-element__image">
         <img src="${item.imageUrl}" alt="${item.title}"/>
      </div>
      <div class="movie-element__info">
         <h2>${item.title}</h2>
         <p>${item.rating}/5 stars</p>
      </div>
      `;
	movieList.append(newElement);
	newElement.addEventListener('click', deleteMovieHandler.bind(null, item.id));
};

const deleteMovieHandler = (movieId) => {
	deleteMovieModal.classList.add('visible');
	backDrop.classList.toggle('visible');
	confirmDeleteBtn.onclick = () => {
		deleteMovie(movieId);
		deleteMovieModal.classList.remove('visible');
		backDrop.classList.toggle('visible');
		updateUI();
	};
};
const deleteMovie = (movieId) => {
	let data = JSON.parse(localStorage.data);
   let updatedData = data.filter((movie) => movie.id !== movieId);
   movieList.removeChild(document.getElementById(movieId));
	localStorage.setItem('data', JSON.stringify(updatedData));
};

const btnAddHandler = () => {
	const movieTitle = userInput[0].value;
	const imageUrl = userInput[1].value;
	const userRating = userInput[2].value;

	if (
		!/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(
			imageUrl
		)
	) {
		alert('Enter valid url');
		return;
	}
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
		id: `${movieTitle}${Math.round(Math.random())}`,
		title: movieTitle,
		imageUrl: imageUrl,
		rating: userRating,
	};

	// inputValue.push(getInputValue);
	console.log(inputValue);
	localStorage.setItem('data', JSON.stringify([...inputValue, getInputValue]));
	addMovieToggle();
	clearInput();
	updateUI();
};

window.onload = () => {
	updateUI();
	const data = JSON.parse(localStorage.data);
	data.map((item) => {
		const newElement = document.createElement('li');
		newElement.className = 'movie-element';
		newElement.innerHTML = `
         <div class="movie-element__image">
            <img src="${item.imageUrl}" alt="${item.title}"/>
         </div>
         <div class="movie-element__info">
            <h2>${item.title}</h2>
            <p>${item.rating}/5 stars</p>
         </div>
         `;
		movieList.append(newElement);
		newElement.addEventListener(
			'click',
			deleteMovieHandler.bind(null, item.id),
		);
	});
};

startAddMovieBtn.addEventListener('click', startAddMovieBtnHandler);
btnCancel.addEventListener('click', btnCancelHandler);
cancelDeleteBtn.addEventListener('click', btnCancelHandler);
backDrop.addEventListener('click', backDropHandler);
btnAdd.addEventListener('click', btnAddHandler);
