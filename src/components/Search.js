import React from 'react';

const Search = (props) => {

    return (
        <div className="search_container">
            <h2> Search your product</h2>

            <input type="text" onChange={event => props.keywords(event)}/>
            <button onClick={props.handleSearch}>Enviar</button>

        </div>
    )
}

export default Search;