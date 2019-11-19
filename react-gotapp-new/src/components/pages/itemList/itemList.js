import React, {useState, useEffect} from 'react';
import './itemList.css';
import Spinner from '../../spinner';
// import ErrorMessage from '../../errorMessage';


function ItemList ({getData, renderItem, onItemSelected}) {

  const [itemList, updateList] = useState([]);


  // componentDidCatch = () => {
  //   this.setState(({error}) => ({error: true}));  !!!!   Как отловить ошибку с помощью хуков?
  // }

  useEffect(() => {
    getData()
    .then((data) => {
      updateList(data)
    });
  }, [])
  // componentDidMount = () => {
    

   let renderItems = (arr) => {
      return arr.map((item, i) => {
        const {id} = item;
        const label = renderItem(item);
        return(
          <li 
            key={id}
            className="list-group-item"
            onClick={() => {onItemSelected(id)}}
            >
            {label}
          </li>
          
        )
      });
    }

    // if(this.state.error){
    //   return <ErrorMessage/>
    // }
      
    if(itemList.length){
      return <Spinner/>
    }
   
    const items = renderItems(itemList);
      return (
          <ul className="item-list list-group">
              {items}
          </ul>
      );
    
}
export default ItemList;
// export default class ItemList extends Component {


//   state = {
//     itemList: null,
//     error: false
//   }

//   componentDidCatch = () => {
//     this.setState(({error}) => ({error: true}));
//   }


//   componentDidMount = () => {
//     const {getData} = this.props;
//     getData()
//       .then((itemList) => {
//         this.setState({
//           itemList
//         })
//       });
//   }

//     renderItems = (arr) => {
//       return arr.map((item, i) => {
//         const {id} = item;
//         const label = this.props.renderItem(item);
//         return(
//           <li 
//             key={id}
//             className="list-group-item"
//             onClick={() => {this.props.onItemSelected(id)}}
//             >
//             {label}
//           </li>
          
//         )
//       });
//     }

    

//     render() {
      
//       if(this.state.error){
//         return <ErrorMessage/>
//       }
        
//       const {itemList} = this.state;
//       if(!itemList){
//         return <Spinner/>
//       }
     
//       const items = this.renderItems(itemList);
//         return (
//             <ul className="item-list list-group">
//                 {items}
//             </ul>
//         );
//     }
// }