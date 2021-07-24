// 1. setup sections
// 2. add data to HTML in order to work with HTML correctly
// 3. create logic for showing views - routing

import addMoviePage from "./pages/addMovie.js";
import editMoviePage from "./pages/editMovie.js";
import homePage from "./pages/home.js";
import loginPage from "./pages/login.js";
import movieDetailsPage from "./pages/movieDetails.js";
import registerPage from "./pages/register.js";
import viewFinder from "./viewFinder.js";

setup();

async function setup() {
    // setup HTML page login
    // setup HTML page register
    // setup HTML page logout ??? -maybe only logic
    // setup HTML page homepage
    // setup HTML page add movie
    // setup HTML page movie details 
    // setup HTML page edit movie
    // setup HTML page likes ??? -maybe only logic
    // setup HTML page delete ??? -maybe only logic

    let appElement = document.getElementById('main');

    loginPage.initilize(document.getElementById('form-login'));
    registerPage.initilize(document.getElementById('form-sign-up'));
    homePage.initilize(document.getElementById('home-page'));
    addMoviePage.initilize(document.getElementById('add-movie'));
    movieDetailsPage.initilize(document.getElementById('movie-details'));
    editMoviePage.initilize(document.getElementById('edit-movie'));
    viewFinder.initialize(document.querySelectorAll('.links'));

    viewFinder.navigateTo('home');
}