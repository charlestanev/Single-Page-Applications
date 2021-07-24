let section = undefined;

function initiliaze(domElement){
    section = domElement;
}

async function getView(){
    return section;
}

let editMoviePage = {
    initiliaze,
    getView
};

export default editMoviePage;