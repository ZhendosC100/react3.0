import React from 'react';
// import './app-header.css';
import styled from 'styled-components';

const AppHeaderBlock = styled.div`
    align-items: flex-end
    justify-content: space-between

    h1{
        font-size: 26px
    }

    h2{
        font-size: 1.2rem
        color: grey
    }
`

const AppHeader = ({liked, allPosts}) => {
    return(
        <AppHeaderBlock className="app-header d-flex">
            <h1>Yauhen Tretsyak</h1>
            <h2>{allPosts} posts, liked {liked}</h2>
        </AppHeaderBlock>
    )
}

export default AppHeader;