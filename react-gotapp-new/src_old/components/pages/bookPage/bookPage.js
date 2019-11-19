import React, {Component} from 'react';
import '.';
// import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import ErrorMessage from '../../errorMessage';
import gotService from '../../../services';
import {withRouter} from 'react-router-dom';
import './bookPage';

class BookPage extends Component {
  gotService = new gotService();

  state = {
    error: false
  }

  componentDidCatch = () =>  {
    this.setState(({error}) => ({error: true}));
  }

    render(){

      if(this.state.error) {
        return <ErrorMessage/>
      }

      return (
          <ItemList
            onItemSelected={(itemId) => {
              this.props.history.push(itemId)
            }} 
            getData={this.gotService.getAllBooks}
            renderItem={({name, publisher}) => `${name} (${publisher})`}/>
      )
    }
}

export default withRouter(BookPage);