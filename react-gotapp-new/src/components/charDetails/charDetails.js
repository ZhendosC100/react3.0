import React, {Component} from 'react';
import './charDetails.css';
import ErrorMessage from '../errorMessage';
import gotService from '../../services';
import Spinner from '../spinner';

const Field =({char, field, label}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="term"> {label} </span>
      <span> {char[field] || "no data..."} </span>
  </li>
  )
}
 
export {Field};

export default class CharDetails extends Component {

  gotService = new gotService();

  state ={
    char: null, 
    error: false
  }

  componentDidCatch = () =>{
    this.setState(({error}) => ({error: true}));
  }

  componentDidMount = () => {
    this.updateChar();
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.charId !== prevProps.charId){
      this.updateChar();
    }
  }

  updateChar = () => {
    const {charId} = this.props;
    if (!charId) {
      return;
    }
    this.gotService.getCharacter(charId)
      .then((char) => {
        this.setState({char});
      })
      // this.foo.bar = 0;
  }
    render() {

      if(this.state.error){
       return <ErrorMessage/>
      }

      if(!this.state.char){
        return (
          <>
            <span className='select-error'>Please select a character</span>
            <Spinner/>
          </>
        )
      }

      const {char} = this.state;
      const{name} = char;
      
        return (
            <div className="char-details rounded">
                <h4> {name || "no data..."} </h4>
                <ul className="list-group list-group-flush">
                  {
                    React.Children.map(this.props.children, (child) => {
                      return React.cloneElement(child, {char})
                    })
                  }
                </ul>
            </div>
        );
    }
}