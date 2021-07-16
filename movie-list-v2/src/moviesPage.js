let moviesSection = document.querySelector('.movies');

function showPage() {
    moviesSection.classList.remove('hidden');
    fetchMovies();
}

function hidePage() {
    moviesSection.classList.add('hidden');
}

function fetchMovies() {
    fetch(`http://localhost:3030/data/movies`)
        .then(res => res.json())
        .then(renderMovies);
}

function renderMovies(movies) {
    let movieTemplate = moviesSection.querySelector('#movie-card-template');
    let movieListElement = document.querySelector('.movie-list');
    movieListElement.innerHTML = '';
    
    for (const movie of movies) {
        let currentMovieElement = movieTemplate.cloneNode(true);
        currentMovieElement.classList.remove('hidden');
        currentMovieElement.removeAttribute('id');

        let titleElement = currentMovieElement.querySelector('.card-title');
        titleElement.textContent = movie.title;

        let descriptionElement = currentMovieElement.querySelector('.card-text');
        descriptionElement.textContent = movie.description;

        movieListElement.appendChild(currentMovieElement);
    }

    moviesSection.appendChild(movieListElement)
}

export default {
    showPage,
    hidePage,
}