import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './post-list.css';
import PostListItem from '../post-list-item';

const PostList = ({posts, onDelete})=> {

    const postsFilt = posts.filter(item => typeof(item) === 'object' && 
        item !== null && item !== undefined && item !== Boolean && Array.isArray(item)=== false);
    
    const elements = postsFilt.map((item) => {
        const {id, ...itemProps} = item;
            return (
                <ListGroupItem key={id}>
                    <PostListItem {...itemProps}
    
                        // label={item.label}
                        // important={item.important}
                        onDelete={() => onDelete(id)}
                    />
                </ListGroupItem>
            )

        
    });

    return(
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;