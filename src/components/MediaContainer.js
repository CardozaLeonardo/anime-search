import React from 'react';
import image from '../assets/unsplash.jpg';
import ResultContainer from './ResultContainer';
import ListItem from './ListItem/ListItem';


const MediaContainer = ({selectedAnime, onAnimeSelect, animes, cover, index}) => {

    const renderList = animes.map(anime => {
        return <ListItem onAnimeSelect={onAnimeSelect} key={anime.mal_id} 
        anime={anime} activeIndex={index}/>
    });

    
    
    return(


        <div className="media-container">
            {selectedAnime== null || cover == null ?
           <img className="media-bg" src={image} alt="cover" />
            :
           <img className="media-bg" src={cover} 
            alt="cover" />}

            <ResultContainer>
                {renderList}
            </ResultContainer>
        </div>
    )
}

export default MediaContainer;