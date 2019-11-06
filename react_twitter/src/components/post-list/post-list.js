import React from 'react';
import './post-list.css';
import PostListItem from '../post-list-item';

const PostList = ({posts, onDelete})=> {

    const postsFilt = posts.filter(item => typeof(item) === 'object' && 
        item !== null && item !== undefined && item !== Boolean && Array.isArray(item)=== false);
    
    const elements = postsFilt.map((item) => {
        const {id, ...itemProps} = item;
            return (
                <li key={id} className='list-group-item'>
                    <PostListItem {...itemProps}
    
                        // label={item.label}
                        // important={item.important}
                        onDelete={() => onDelete(id)}
                    />
                </li>
            )

        
    });

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;