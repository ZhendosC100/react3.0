import React from 'react';
import './post-list.css';
import PostListItem from '../post-list-item';

const PostList = ({posts})=> {

    console.log(posts);

    const postsFilt = posts.filter(item => typeof(item) === 'object');
    
    const elements = postsFilt.map((item) => {
        const {id, ...itemProps} = item;
            return (
                <li key={id} className='list-group-item'>
                    <PostListItem {...itemProps}
    
                        // label={item.label}
                        // important={item.important}
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