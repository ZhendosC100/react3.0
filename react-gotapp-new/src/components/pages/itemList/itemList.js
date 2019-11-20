import React, {useState, useEffect} from 'react';
import './itemList.css';
import Spinner from '../../spinner';
import ErrorMessage from '../../errorMessage';


function ItemList ({getData, renderItem, onItemSelected}) {

  const [itemList, setUpdateList] = useState([]);
  const [err, setOnError] = useState(false);

const onError = () => {
  setOnError(true);
}
  
  useEffect(() => {
    getData()
    .then((res) => {
      return setUpdateList(res);
    })
    .catch(onError);
  }, [])

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
      
    if(err){ return <ErrorMessage/>}
    if(itemList.length === 0){
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
