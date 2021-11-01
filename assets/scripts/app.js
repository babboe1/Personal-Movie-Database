const movieBtn = document.querySelector('header').lastElementChild;
const addMovie = document.getElementById('add-modal')
movieBtn.addEventListener('click', () => {
  addMovie.classList.toggle('visible');
});