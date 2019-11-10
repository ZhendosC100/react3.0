import React, {Component} from 'react';
// import './charDetails.css';

import styled from 'styled-components';

const CharBlockDiv = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 0.25rem !important;
    h4{
        margin-bottom: 20px;
        text-align: center;
    }
`
const CharGroupLi = styled.li`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-right: 0;
    border-left: 0;
    border-radius: 0;
    ul{
        display: flex;
        flex-direction: column;
        padding-left: 0;
        margin-bottom: 0;
    }
`

const TermSpan = styled.span`
    font-weight: bold;
` 


export default class CharDetails extends Component {

    render() {
        return (
            <CharBlockDiv>
                <h4>John Snow</h4>
                <ul>
                    <CharGroupLi>
                        <TermSpan>Gender</TermSpan>
                        <span>male</span>
                    </CharGroupLi>
                    <CharGroupLi>
                        <TermSpan>Born</TermSpan>
                        <span>1783</span>
                    </CharGroupLi>
                    <CharGroupLi>
                        <TermSpan>Died</TermSpan>
                        <span>1820</span>
                    </CharGroupLi>
                    <CharGroupLi>
                        <TermSpan>Culture</TermSpan>
                        <span>First</span>
                    </CharGroupLi>
                </ul>
            </CharBlockDiv>
        );
    }
}