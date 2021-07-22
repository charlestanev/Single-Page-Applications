let section = undefined;

function initilize(domElement) {
    section = domElement;
}

async function getView() {
    return section;
}

let loginPage = {
    initilize,
    getView
};

export default loginPage;