import React, {Component} from 'react';
import './characterPage.css';
// import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services';
import RowBlock from '../rowBlock';



export default class CharacterPage extends Component {
  gotService = new gotService();

  state = {
    selectedChar: 130,
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

      if(this.state.error) {
        return <ErrorMessage/>
      }

      const itemList = (
          <ItemList 
            onCharSelected={this.onCharSelected} 
            getData={this.gotService.getAllCharacters}
            renderItem={({name, gender}) => `${name} (${gender})`}/>
      );

      const charDetails = (
        <CharDetails charId={this.state.selectedChar}/>
      );

      return (
        <RowBlock left={itemList} right={charDetails}/>
      )
    }
}