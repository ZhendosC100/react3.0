import React, {Component} from 'react';
import Spinner from '../../spinner';
import ErrorMessage from '../../errorMessage';
import './randomChar.css';
import gotService from '../../../services';


export default class RandomChar extends Component {

    gotService = new gotService();

    state = {
      char: {},
      loading: false,
      error: false
    }

    componentDidMount(){
      // console.log('mounting');
      this.updateChar();
      this.timerId = setInterval(this.updateChar, 3500);
    }

    componentWillUnmount(){
      // console.log('unmounting');
      clearInterval(this.timerId);
    }

    onError = (err) => {
      this.setState({
        error: true,
        loding: false
      })
    }

    onCharLoaded = (char) => {
      this.setState({ 
        char,
        loading: false
      })
    }



  updateChar = () => {
   
    const id = Math.floor(Math.random()*140 + 25);
    // const id = 11038365643;
    this.setState({loading: true})
    this.gotService.getCharacter(id)
      .then(this.onCharLoaded)
      .catch(this.onError)
  }    

    render() {

      // console.log('render');
      const {char, loading, error} = this.state;

      const errorMessage = error&&<ErrorMessage/>
      const spinner = (!error&&loading ) && <Spinner/>
      const content = !( loading || error) && <View char={ char }/>

      return (
          <div className="random-block rounded">
              {errorMessage}
              {spinner}
              {content}
          </div>
      );
    }
}

const View = ({char}) => {

    const {name, gender, born, died, culture} = char;
    return(
        <>
        <h4>Random Character: {name} </h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between">
              <span className="term">Gender </span>
              <span>{gender || "no data..."}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span className="term">Born </span>
              <span> {born || "no data..."} </span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span className="term">Died </span>
              <span> {died || "no data..."} </span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span className="term">Culture </span>
              <span> {culture || "no data..."} </span>
            </li>
          </ul>
      </>
    )
}