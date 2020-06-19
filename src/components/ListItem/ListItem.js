import React from 'react';
import './ListItem.css';


const ListItem = ({onAnimeSelect, anime, activeIndex}) => {

    const className = anime.mal_id === activeIndex ? 'list-item active':'list-item';
    return (
        
        <div onClick={() => onAnimeSelect(anime)} className={className}>
            <img className="item-image" 
            src={anime.image_url} alt={anime.title}/>
            <div className="item-info">
                <p className="info-title">
                    {anime.title}
                </p>

                <p className="info-desc">
                    {anime.rated}
                </p>
            
            </div>
        </div> 
    )
}

export default ListItem;