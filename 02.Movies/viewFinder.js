// 1. add data to html in order to be able to select links
// 2. add data to html links that keeps information for changing views
// 3. add eventlistener to links

import homePage from "./pages/home.js";
import loginPage from "./pages/login.js";
import registerPage from "./pages/register.js";

let views = {
    'home': homePage.getView,
    'login': loginPage.getView,
    'register': registerPage.getView,
};

letCallback = undefined;

// function initialize(allLinks) {
//     let allLinks = document.querySelectorAll('.link');
//     allLinks.forEach(a => a.addEventListener('click', changeViewHandler));
// }
function initialize(allLinkElements) {
    allLinkElements.forEach(a => a.addEventListener('click', changeViewHandler));
}

export async function changeViewHandler(e) {
    // e = current id/route
    let route = e.target.dataset.route;
    navigateTo(route);
}

export async function navigateTo(route) {
    console.log(route);
    if (views.hasOwnProperty(route)) {
        // page view = page view with this route/id
        let view = await views[route]();
        let appElement = document.getElementById('main');
        appElement.querySelectorAll('.view').forEach(v => v.remove());
        appElement.appendChild(view);
    }
}

let viewFinder = {
    initialize,
    changeViewHandler,
    navigateTo
};

export default viewFinder;