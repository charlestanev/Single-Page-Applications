let section = undefined;

function initilize(domElement) {
    section = domElement;
    let form = section.querySelector('#login-form');
    form.addEventListener('submit', loginUser);
}

async function getView() {
    return section;
}

async function loginUser(e) {
    let form = e.target;
    let formData = new FormData(form);
    let user = {
        email: formData.get('email'),
        password: formData.get('password')
    }
}

let loginPage = {
    initilize,
    getView
};

export default loginPage;