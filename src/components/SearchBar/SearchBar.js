import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

    state = {entry: ''};

    onInputChange = (event) => {
        this.setState({entry: event.target.value});
    }

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.entry);
    }

    render() {
        return(
            <div className="search-bar">
                <form onSubmit={this.onFormSubmit}>
                    <input 
                    type="text"
                    placeholder="Search anime" 
                    value={this.state.entry}
                    onChange={this.onInputChange}/>
                </form>
            </div>
        )
    }
}

export default SearchBar;