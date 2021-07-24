import auth from "../helpers/auth.js";
import { jsonRequest } from "../helpers/httpService.js";
import viewFinder from "../viewFinder.js";

let section = undefined;

function initiliaze(domElement) {
    section = domElement;
    let form = section.querySelector('#register-form');
    form.addEventListener('submit', registerUser);
}

async function getView() {
    return section;
}

async function registerUser(e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);

    let email = formData.get('email');
    let password = formData.get('password');
    let repeatPassword = formData.get('repeatPassword');


    if (email === '' ||
        password === '' ||
        (password.length < 6) ||
        password !== repeatPassword) {
        alert('Fields must not be empty and passwords must match');
    }

    let user = {
        email: formData.get('email'),
        password: formData.get('password')
    }

    let url = 'http://localhost:3030/users/register';
    let result = await jsonRequest(url, 'Post', user);
    auth.setAuthToken(result.accessToken);
    auth.setUserId(result._id);
    form.reset();
    viewFinder.navigateTo('home');
}


let registerPage = {
    initiliaze,
    getView
};

export default registerPage;