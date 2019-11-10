import React, {Component} from 'react';
// import './randomChar.css';

import styled from 'styled-components';

const RandomBlockDiv = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 0.25rem !important;
    h4{
        margin-bottom: 20px;
        text-align: center;
    }
`

const RandomListUl = styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
`

const RandomListLi = styled.li`
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-right: 0;
    border-left: 0;
    border-radius: 0;
`


const TermSpan = styled.span`
    font-weight: bold;
` 

export default class RandomChar extends Component {

    render() {

        return (
            <RandomBlockDiv>
                <h4>Random Character: John</h4>
                <RandomListUl>
                    <RandomListLi>
                        <TermSpan>Gender </TermSpan>
                        <span>male</span>
                    </RandomListLi>
                    <RandomListLi>
                        <TermSpan>Born </TermSpan>
                        <span>11.03.1039</span>
                    </RandomListLi>
                    <RandomListLi>
                        <TermSpan>Died </TermSpan>
                        <span>13.09.1089</span>
                    </RandomListLi>
                    <RandomListLi>
                        <TermSpan>Culture </TermSpan>
                        <span>Anarchy</span>
                    </RandomListLi>
                </RandomListUl>
            </RandomBlockDiv>
        );
    }
}
