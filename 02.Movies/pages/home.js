let section = undefined;

function initilize(domElement) {
    section = domElement;
}

async function getView() {
    return section;
}

let homePage = {
    initilize,
    getView
};

export default homePage;