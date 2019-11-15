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
    selectedItem: 12,
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
            getData={this.gotService.getAllBooks}
            renderItem={({name, publisher}) => `${name} (${publisher})`}/>
      );

      const charDetails = (
        <CharDetails 
          nameItemBlock={'book'}
          itemId={this.state.selectedItem}
          getItemData={this.gotService.getBook}>
            <Field field='numberOfPages' label='Number of Pages'/>
            <Field field='publisher' label='Publisher'/>
            <Field field='released' label='Released'/>
            <Field field='authors' label='Authors'/>
        </CharDetails>
      );

      return (
        <RowBlock left={itemList} right={charDetails}/>
      )
    }
}