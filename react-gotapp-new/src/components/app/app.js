import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import './app.css';
// import GotService from '../../services';


export default class App extends Component {

    state = {
        hide: false,
        btn: 'click to hide'
    }

    clickTohide = () => {
      const {hide} = this.state;
      if (!hide){
        this.setState({
          hide: !hide,
          btn: 'click to show'
        })
      } else {
        this.setState({
          hide: !hide,
          btn: 'click to hide'
        })
      }
    }

    render(){
        // this.getConsoleRes();
          const {hide, btn} = this.state;

          const randomBlock = !hide ? <RandomChar/> : null
        return (
            <> 
              
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomBlock}
                        </Col>
                        <button className="random-hide" onClick={this.clickTohide}> {btn} </button>
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

 // getConsoleRes = () => {

    //     const gotService = new GotService();

    //         gotService.getAllCharacters()
    //             .then(res => console.log(res));

    //         gotService.getCharacter(103)
    //             .then(res => console.log(res));

    //         gotService.getAllbooks()
    //             .then(res => console.log(res));

    //         gotService.getBook(4)
    //             .then(res => console.log(res));
            
    //         gotService.getAllHouses()
    //             .then(res => console.log(res));
            
    //         gotService.getHouse(2)
    //             .then(res => console.log(res));

    // }

