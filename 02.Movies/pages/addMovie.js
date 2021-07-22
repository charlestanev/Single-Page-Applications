let section = undefined;

export function initilize(domElement) {
    section = domElement;
}

export async function getView() {
    return section;
}

let addMoviePage = {
    initilize,
    getView
};

export default addMoviePage;