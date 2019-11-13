import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import './app.css';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';
// import GotService from '../../services';


export default class App extends Component {

    state = {
        hide: false,
        error: false
    }

    // componentDidCatch() {
    //   console.log('error');
    //   this.setState({
    //     error: true
    //   })
    // }
    componentDidCatch = () =>  {
      this.setState(({error}) => ({error: true}));
    }

    clickTohide = () => { this.setState( ({hide}) => ({hide: !hide}) )}


    render(){
        // this.getConsoleRes();
          const {hide} = this.state;

          if (this.state.error){
            return <ErrorMessage/>
          }

        return (
            <> 
              
                <Container>
                    <Header />
                    <button color="link" className="random-hide" onClick={this.clickTohide}> {hide ? "press to show" : "press to hide"} </button>
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {hide || <RandomChar/> }
                        </Col>
                        
                    </Row>
                    <CharacterPage/>
                    <CharacterPage/>
                    <CharacterPage/>
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

