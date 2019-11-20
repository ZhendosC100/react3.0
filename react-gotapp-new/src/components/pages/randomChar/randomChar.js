import React, {useState, useEffect} from 'react';
import Spinner from '../../spinner';
import ErrorMessage from '../../errorMessage';
import './randomChar.css';
import GotService from '../../../services';


function RandomChar () {

  const gotService = new GotService();

    const[char, setOnChar] = useState([]);
    const[loading, setOnLoading] = useState(false);
    const[error, setOnError] = useState(false);


    useEffect(()=>{
      updateChar();
      const timerId = setInterval(updateChar, 15000);
      return () => {
        clearInterval(timerId);
      }
    }, [])

   const onError = (err) => {
     setOnError(true);
     setOnLoading(false);
    }

   const onCharLoaded = (char) => {
      setOnChar(char);
      setOnLoading(false);
    }



 const updateChar = () => {
   
    const id = Math.floor(Math.random()*140 + 25);
    // const id = 11038365643;
    // this.setState({loading: true})
    setOnLoading(true);
    gotService.getCharacter(id)
      .then(onCharLoaded)
      .catch(onError)
  }    

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

export default RandomChar;