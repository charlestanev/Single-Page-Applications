let section = undefined;

function initilize(domElement) {
    section = domElement;
}

async function getView() {
    return section;
}

let registerPage = {
    initilize,
    getView
};

export default registerPage;