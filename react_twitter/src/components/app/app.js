import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import styled from 'styled-components';

import nextId from "react-id-generator";
// import './app.css';

const AppBlock = styled.div`
        margin: 0 auto
        max-width: 800px
`

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            data: [
                0,
                'khjgh',
                {label: 'Going to learn react', important: true, id: 'er'},
                {label: 'That is so good', important: false, id: 'erf'},
                {label: 'I need a sea.. :)', important: false, id: 'xvb'}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.maxId = nextId('new_id_');;
    }

    deleteItem(id){
        this.setState(({data}) => {
            const dataFilt = data.filter(item => typeof(item) === 'object' && 
        item !== null && item !== undefined && item !== Boolean && Array.isArray(item)=== false);
            const index = dataFilt.findIndex(elem => elem.id === id);
            // const index = data.findIndex(elem => elem.id === id);

            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);

            // const newArr = [...before, ...after];


            const newArr = [...dataFilt.slice(0, index), ...dataFilt.slice(index + 1)];
            return {
                data: newArr
            }
        });
    }

    addItem(body){
        const newItem = {
            label: body,
            important: false,
            id: this.maxId
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render() {
        return (
            <AppBlock className="app">
                <AppHeader/>
                <div className='search-panel d-flex'>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts={this.state.data}
                    onDelete={this.deleteItem}/>
                <PostAddForm
                onAdd={this.addItem}/>
            </AppBlock>
        );
    }
}

