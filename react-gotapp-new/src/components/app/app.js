import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GotService from '../../services'


export default class App extends Component {


    getConsoleRes = () => {

        const gotService = new GotService();

            gotService.getAllCharacters()
                .then(res => console.log(res));

            gotService.getCharacter(103)
                .then(res => console.log(res));

            gotService.getAllbooks()
                .then(res => console.log(res));

            gotService.getBook(4)
                .then(res => console.log(res));
            
            gotService.getAllHouses()
                .then(res => console.log(res));
            
            gotService.getHouse(2)
                .then(res => console.log(res));

    }

    render(){
        this.getConsoleRes();
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            <RandomChar/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};
