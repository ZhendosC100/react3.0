import React from 'react';
import './search-panel';

const SearchPanel = () => {
    return(
        <input
            className="form-control search-input"
            type="text"
            placeholder="Search posts"
        />
    )
}

export default SearchPanel;