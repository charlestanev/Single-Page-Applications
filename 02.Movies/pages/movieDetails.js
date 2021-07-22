let section = undefined;

function initilize(domElement) {
    section = domElement;
}

async function getView() {
    return section;
}

let movieDetailsPage = {
    initilize,
    getView
};

export default movieDetailsPage;