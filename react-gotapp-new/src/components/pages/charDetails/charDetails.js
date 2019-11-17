import React, {Component} from 'react';
import './charDetails.css';
import ErrorMessage from '../../errorMessage';
import gotService from '../../../services';
import Spinner from '../../spinner';

const Field =({itemObj, field, label}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="term"> {label} </span>
      <span> {itemObj[field] || "no data..."} </span>
    </li>
  )
}
 
export {Field};

export default class CharDetails extends Component {

  gotService = new gotService();

  state ={
    itemObj: null,
    loading: false,
    error: false
  }

  componentDidCatch = () =>{
    this.setState(({error}) => ({error: true}));
  }

  componentDidMount = () => {
    this.updateItem();
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.itemId !== prevProps.itemId){
      this.updateItem();
    }
  }

  onItemLoaded = () => {
    this.setState({ 
      loading: false
    })
  }

  updateItem = () => {
    const {itemId} = this.props;
    if (!itemId) {
      return;
    }
    this.setState({loading: true});
    const {getItemData} = this.props;
    getItemData(itemId)
      .then((itemObj) => {
        // this.setState({itemObj});
        // if(itemObj){

        //   this.setState({loading: false});
        // }
        this.setState({itemObj});
        if(itemObj){

          for(let key in itemObj){
            if(itemObj[key] === [""] || itemObj[key] == ""){
              itemObj[key] = "no data..((";
            }
          }

          this.setState({itemObj});
          this.setState({loading: false});
        }
      });
      // this.foo.bar = 0;
  }
    render() {
      const {nameItemBlock} = this.props;
      const {error, itemObj, loading} = this.state;
      if(error){
       return <ErrorMessage/>
      }

      if(loading){
        return (
          <>
            <Spinner/>
          </>
        )
      }
      
      if(!itemObj){
        return (
          <>
            <span className='select-error'>Please select a {nameItemBlock || "something..."}</span>
          </>
        )
      }
      
        const{name} = itemObj;
        
        return (
          <div className="char-details rounded">
              <h4> {name || "no data..."} </h4>
              <ul className="list-group list-group-flush">
                {
                  React.Children.map(this.props.children, (child) => {
                    return React.cloneElement(child, {itemObj}||'no data..')
                  })
                }
              </ul>
          </div>
        );

    }
}