import server from './base';

const searchAnime = async (term) => {
    
    //var data = null;
    var data = await fetch(`${server.base_url}/search/anime?q=${term}&page=1`)
    .then(response => response.json())
    .then(response => {return response.results})

    return data;
}

const getAnimeImage = async (id) => {
    var data = await fetch(`${server.base_url}/anime/${id}/pictures`)
    .then(response => response.json())
    .then(response => {return response.pictures[0].large})

    if(data === undefined) {
        return "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png";
    }

    return data;
}

export {searchAnime, getAnimeImage};