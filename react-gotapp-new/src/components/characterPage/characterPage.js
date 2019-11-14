import React, {Component} from 'react';
import './characterPage.css';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';

export default class CharacterPage extends Component {
  
  state = {
    selectedChar: this.props.startChar,
    error: false
  }

  componentDidCatch = () =>  {
    this.setState(({error}) => ({error: true}));
  }

  onCharSelected = (id) => {
    
    this.setState({
      selectedChar: id
    })
    
  }
    render(){
    const {pageId} = this.props;
      if(this.state.error) {
        return <ErrorMessage/>
      }

      return (
        <Row>
        <Col md='6'>
          <ItemList onCharSelected={this.onCharSelected} pageId={pageId} />
        </Col>
        <Col md='6'>
            <CharDetails charId={this.state.selectedChar}/>
        </Col>
      </Row>
      )
    }
}