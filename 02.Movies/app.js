//1. setup sections
//2. add data to html in order to work with html correctly
//3. create logic for showing views - routing 

import addMoviePage from "./pages/addMovie.js";
import editMoviePage from "./pages/editMovie.js";
import homePage from "./pages/home.js";
import loginPage from "./pages/login.js";
import movieDetailsPage from "./pages/movieDetails.js";
import registerPage from "./pages/register.js";
import viewFinder from "./viewFinder.js";

setup();

async function setup(){
    //setup html page login
    //setup html page register
    //setup html page logout??? - maybe only logic
    //setup html page homepage
    //setup html page add movie
    //setup html page movie details
    //setup html page edit movie
    //setup html page likes?? - maybe only logic
    //setup html page delete?? - maybe only logic

    loginPage.initiliaze(document.getElementById('form-login'));
    registerPage.initiliaze(document.getElementById('form-sign-up'));
    homePage.initiliaze(document.getElementById('home-page'));
    addMoviePage.initiliaze(document.getElementById('add-movie'));
    movieDetailsPage.initiliaze(document.getElementById('movie-details'));
    editMoviePage.initiliaze(document.getElementById('edit-movie'));
    console.log('here');
    viewFinder.initiliaze(document.querySelectorAll('.link'));

    viewFinder.navigateTo('home');
}


