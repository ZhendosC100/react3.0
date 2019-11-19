import React, {Component} from 'react';
import GotService from '../../../services';
import CharDetails, {Field} from '../charDetails';
import './booksItem.css';

export default class BooksItem extends Component {
    gotService = new GotService();


    render() {
        return(
        <div className="books-page">
          <CharDetails 
          nameItemBlock={'book'}
          itemId={this.props.bookId}
          getItemData={this.gotService.getBook}>
            <Field field='numberOfPages' label='Number of Pages'/>
            <Field field='publisher' label='Publisher'/>
            <Field field='released' label='Released'/>
            <Field field='authors' label='Authors'/>
        </CharDetails>
        </div>
        )
    }
}