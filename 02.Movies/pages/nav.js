let section = undefined;

function initilize(domElement) {
    section = domElement;
}

async function getView() {
    return section;
}

let nav = {
    initilize,
    getView
};

export default nav;