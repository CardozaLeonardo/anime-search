import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import './App.css';
import MediaContainer from './MediaContainer';
import {searchAnime, getAnimeImage} from '../api/operations';
import AnimeDetail from './AnimeDetail/AnimeDetail';

class App extends React.Component {

    state = {animes: [], selectedAnime: null, cover: null, index: 0}

    onTermSubmit = async (entry) => {

        var data = await searchAnime(entry);

        this.setState({animes: data});
    }

     onAnimeSelect = async anime => {
        var image = await getAnimeImage(anime.mal_id);
        var activeIndex = anime.mal_id;
        this.setState({selectedAnime: anime, cover: image, index: activeIndex});
    }


    render() {
        return <div className="container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <MediaContainer selectedAnime={this.state.selectedAnime} 
            onAnimeSelect={this.onAnimeSelect} 
            animes={this.state.animes} cover={this.state.cover} index={this.state.index}/>
            {
                this.state.selectedAnime ? 
                <AnimeDetail anime={this.state.selectedAnime}/> :
                <div></div>
            }
            
        </div>;
    }
}

export default App;