let section = undefined;

function initilize(domElement) {
    section = domElement;
}

async function getView() {
    return section;
}

let editMoviePage = {
    initilize,
    getView
};

export default editMoviePage;