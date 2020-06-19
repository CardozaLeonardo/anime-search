import React from 'react';
import './AnimeDetail.css';

const AnimeDetail = ({anime}) => {

    return (
        <div className="anime-detail">
            <h1>{anime.title}</h1>
            <p className="anime-synopsis">
                {anime.synopsis}
            </p>
        </div>
    )
}

export default AnimeDetail;