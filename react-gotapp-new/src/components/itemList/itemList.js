import React, {Component} from 'react';
// import './itemList.css';

import styled from 'styled-components';

const CharListUl = styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
`
const CharNameLi = styled.li`
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
`

const CharNameFirstLi = styled(CharNameLi)`
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
`

const CharNameLastLi = styled(CharNameLi)`
    margin-bottom: 0;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
`

export default class ItemList extends Component {

    render() {
        return (
            <CharListUl>
                <CharNameFirstLi>
                    John Snow
                </CharNameFirstLi>
                <CharNameLi>
                    Brandon Stark
                </CharNameLi>
                <CharNameLastLi>
                    Geremy
                </CharNameLastLi>
            </CharListUl>
        );
    }
}