import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../pages/randomChar';
import './app.css';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../pages/characterPage';
import BookPage from '../pages/bookPage';
import HousePage from '../pages/housePage'; 
import BooksItem from '../pages/booksItem/';
import GotService from '../../services';
import {BrowserRouter as Router, Route} from 'react-router-dom';


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

          const RandomBlock = () => {
            return(
                <Row>
                  <Col lg={{size: 5, offset: 0}}>
                    {hide || <RandomChar/> }
                    <button color="link" className="random-hide" onClick={this.clickTohide}> {hide ? "press to show random" : "press to hide random"} </button>
                  </Col> 
                  <Col lg={{size: 7, offset: 0}}>
                    <div>
                      <p className="title_welcome">Welcome to the world of Game Of Trones!!</p>
                      <p className="title_select">Please, select a theme.</p>
                    </div>
                  </Col>    
                </Row>
            )
          }


        return (
            <Router>
              <div className="app"> 
              <Container>
                <Header />
              </Container>
              <Container>
                <Route path='/' exact  component={RandomBlock}/>
                <Route path='/characters' component={CharacterPage} />
                <Route path='/houses' component={HousePage} />
                <Route path='/books' exact component={BookPage} />
                <Route path='/books/:id'  render={
                  ({match}) => {
                    const {id} = match.params;
                   return <>
                            <BooksItem 
                            bookId={id}/>
                          </>
                  }
                }/>
                
                </Container>
              </div>
            </Router>
        );
    }
};