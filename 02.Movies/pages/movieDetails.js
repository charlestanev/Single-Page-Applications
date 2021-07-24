import auth from "../helpers/auth.js";
import { jsonRequest } from "../helpers/httpService.js";
import viewFinder from "../viewFinder.js";
import homePage from "./home.js";

let section = undefined;

function initiliaze(domElement) {
    section = domElement;
}

async function getView(id) {
    let movieDetail = await jsonRequest(`http://localhost:3030/data/movies/${id}`);
    console.log(movieDetail);

    let movieContainer = section.querySelector('#movie-details-container');
    [...movieContainer.children].forEach(x => x.remove());
    let userId = auth.getUserId();
    let userLikesArr = await jsonRequest(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22`);
    let movieLikes = await jsonRequest(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count `);
    console.log(movieLikes);
    let movieDetails = createMovieDetails(movieDetail, userLikesArr.length > 0, movieLikes);
    movieContainer.innerHTML = movieDetails; 
    movieContainer.querySelectorAll('.link').forEach(e => e.addEventListener('click', viewFinder.changeViewHandler));
    return section;
}

async function like(movieId){
    let body = { movieId: movieId};
    let result = await jsonRequest(`http://localhost:3030/data/likes`, 'Post', body, true);
    return movieDetailsPage.getView(movieId);
}

function createMovieDetails(movie, hasLiked, likes) {
    let editButton = `<a class="btn btn-warning link" data-route="edit" data-id="${movie._id}" href="#">Edit</a>`;
    let deleteButton = `<a class="btn btn-danger link" data-route="delete" data-id="${movie._id}" href="#">Delete</a>`;
    let likeButton = `<a class="btn btn-primary link" data-route="like" data-id="${movie._id}" href="#">Like</a>`;
    let buttons = [];
    let isOwner = auth.getUserId() === movie._ownerId;
    if (isOwner) {
        buttons.push(deleteButton, editButton);
    }
    if(!hasLiked && !isOwner) {
        buttons.push(likeButton);
    }

    let buttonsSection = buttons.join('\n');

    let elem = `<div class="row bg-light text-dark">
                        <h1>Movie title: ${movie.title}</h1>

                        <div class="col-md-8">
                            <img class="img-thumbnail"
                                src="${movie.img}" alt="Movie">
                        </div>
                        <div class="col-md-4 text-center">
                            <h3 class="my-3 ">Movie Description</h3>
                            <p>${movie.description}</p>
                            ${buttonsSection}
                            <span class="enrolled-span">Liked: ${likes}</span>
                        </div>
                    </div>`;

    return elem;
}

let movieDetailsPage = {
    initiliaze,
    getView,
    like
};

export default movieDetailsPage;