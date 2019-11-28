import React from 'react';

const Search = (props) => {

    return (
        <div className="search_container">
            <h2> Encuentra tu producto</h2>
            <input type="text" onChange={event => props.keywords(event)}/>
        </div>
    )
}

export default Search;