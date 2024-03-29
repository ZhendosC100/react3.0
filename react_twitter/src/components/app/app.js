import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';

const App = () => {

    const data = [
        0,
        {label: 'Going to learn react', important: true, id: 'jkg'},
        {label: 'That is so good', important: false, id: 'gfg'},
        {label: 'I need a sea.. :)', important: false, id: 'jhf'}
    ]

    return (
        <div className="app">
            <AppHeader/>
            <div className='search-panel d-flex'>
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}

export default App;