import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../pages/randomChar';
import './app.css';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../pages/characterPage';
import BookPage from '../pages/bookPage';
import HousePage from '../pages/housePage'; 
// import ItemList from '../itemList';
// import CharDetails from '../charDetails';
import GotService from '../../services';


export default class App extends Component {
  gotService = new GotService();

    state = {
        hide: false,
        error: false
    }

    componentDidCatch = () =>  {
      this.setState(({error}) => ({error: true}));
    }

    clickTohide = () => { this.setState( ({hide}) => ({hide: !hide}) )}


    render(){
        
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
                <BookPage/>
                <HousePage/>
                </Container>
            </>
        );
    }
};