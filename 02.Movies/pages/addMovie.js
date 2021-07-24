let section = undefined;

export function initiliaze(domElement){
    section = domElement;
}

export async function getView(){
    return section;
}

let addMoviePage = {
    initiliaze,
    getView
};

export default addMoviePage;