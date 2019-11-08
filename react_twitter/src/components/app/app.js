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

    state={
        data: [
            0,
            'khjgh',
            {label: 'Going to learn react', important: true, liked: false, id: 'er'},
            {label: 'That is so good', important: false, liked: false, id: 'erf'},
            {label: 'I need a sea.. :)', important: false, liked: false, id: 'xvb'}
        ],
        term: "",
        filter: "all"
    };
    

    deleteItem = (id) => {
        
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

    
    addItem = (body) => {
        if(body !== ''){
            const newItem = {
                label: body,
                important: false,
                id: nextId('new_id_')
            }
            this.setState(({data}) => {
                const dataFilt = data.filter(item => typeof(item) === 'object' && 
            item !== null && item !== undefined && item !== Boolean && Array.isArray(item)=== false);
                const newArr = [...dataFilt, newItem];
                return {
                    data: newArr
                }
            });
        }
    }

    // onToggleImportant = (id) => {
    //     this.setState(({data}) => {
    //         const index = data.findIndex(elem => elem.id === id);

    //         const old = data[index];
    //         const newItem = {...old, important: !old.important};

    //         const newArr = [...data.slice(0, index), newItem , ...data.slice(index + 1)];

    //         return {
    //             data: newArr
    //         }
    //     });
    // }

    // onToggleLiked = (id, isImportant) => {
        
    //     this.setState(({data}) => {
    //         const index = data.findIndex(elem => elem.id === id);

    //         const old = data[index];
    //         const newItem = isImportant ?{...old, important: !old.important} : {...old, like: !old.like};

    //         const newArr = [...data.slice(0, index), newItem , ...data.slice(index + 1)];

    //         return {
    //             data: newArr
    //         }
    //     });
    // }

    onToggle = (id, isImportant) => {
        console.log(isImportant);
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = isImportant ?{...old, important: !old.important} : {...old, like: !old.like};

            const newArr = [...data.slice(0, index), newItem , ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    searchPost = (items, term) => {
        if(term.length === 0){
            return items
        }

        return items.filter((item)=>{
            return item.label.indexOf(term) > -1
        });
    }

    filterPosts = (items, filter) => {
        if(filter === 'like'){
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onUpdateSearch = (term) =>{
        this.setState({term});
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPosts(this.searchPost(data, term), filter);

        return (
            <AppBlock className="app">
                <AppHeader
                liked={liked}
                allPosts={allPosts}
                />
                <div className='search-panel d-flex'>
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggle={this.onToggle}
                />
                <PostAddForm
                    onAdd={this.addItem}/>
            </AppBlock>
        );
    }
}

