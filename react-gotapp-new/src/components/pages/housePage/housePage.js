import React, {Component} from 'react';
import '.';
// import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import ErrorMessage from '../../errorMessage';
import gotService from '../../../services';
import RowBlock from '../rowBlock';




export default class BookPage extends Component {
  gotService = new gotService();

  state = {
    selectedItem: null,
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
            getData={this.gotService.getAllHouses}
            renderItem={({name, region}) => `${name} (${region})`}/>
      );

      const charDetails = (
        <CharDetails 
          nameItemBlock={'house'}
          itemId={this.state.selectedItem}
          getItemData={this.gotService.getHouse}
          >
            <Field field='region' label='Region'/>
            <Field field='words' label='Words'/>
            <Field field='titles' label='Titles'/>
            <Field field='overlord' label='Overlord'/>
            <Field field='ancestralWeapons' label='Ancestral Weapons'/>
        </CharDetails>
      );

      return (
        <RowBlock left={itemList} right={charDetails}/>
      )
    }
}