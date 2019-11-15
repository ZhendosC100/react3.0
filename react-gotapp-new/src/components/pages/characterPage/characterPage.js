import React, {Component} from 'react';
import './characterPage.css';
// import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import ErrorMessage from '../../errorMessage';
import gotService from '../../../services';
import RowBlock from '../rowBlock';




export default class CharacterPage extends Component {
  gotService = new gotService();

  state = {
    selectedItem: 130,
    error: false
  }

  componentDidCatch = () =>  {
    this.setState(({error}) => ({error: true}));
  }

  onItemSelected = (id) => {

    this.setState({
      selectedItem: id
    })
    
  }
    render(){

      if(this.state.error) {
        return <ErrorMessage/>
      }

      const itemList = (
          <ItemList 
            onItemSelected={this.onItemSelected} 
            getData={this.gotService.getAllCharacters}
            renderItem={({name, gender}) => `${name} (${gender})`}/>
      );

      const charDetails = (
        <CharDetails 
          nameItemBlock={'character'}
          itemId={this.state.selectedItem}
          getItemData={this.gotService.getCharacter}>
            <Field field='gender' label='Gender'/>
            <Field field='born' label='Born'/>
            <Field field='died' label='Died'/>
            <Field field='culture' label='Culture'/>
        </CharDetails>
      );

      return (
        <RowBlock left={itemList} right={charDetails}/>
      )
    }
}