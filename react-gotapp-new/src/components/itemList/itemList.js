import React, {Component} from 'react';
import gotService from '../../services';
import './itemList.css';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
export default class ItemList extends Component {

  gotService = new gotService();

  state = {
    charList: null,
    error: false
  }

  componentDidCatch = () => {
    this.setState(({error}) => ({error: true}));
  }

  componentDidMount = () => {
    const {pageId} = this.props;
    // console.log(this.props)
    this.gotService.getAllCharacters(pageId)
      .then((charList) => {
        this.setState({
          charList
        })
      });
  }

    renderItems = (arr) => {
      return arr.map((item, i) => {
        const iDchar = item.url.match(/\d+/)[0];
        return(
          <li 
            key={i}
            className="list-group-item"
            onClick={() => {this.props.onCharSelected(iDchar)}}
            >
            {item.name}
          </li>
          
        )
      });
    }

    

    render() {

      if(this.state.error){
        return <ErrorMessage/>
      }
        
      const {charList} = this.state;
      if(!charList){
        return <Spinner/>
      }
     
      const items = this.renderItems(charList);
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}