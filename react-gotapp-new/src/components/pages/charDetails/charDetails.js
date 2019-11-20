import React, {useState, useEffect} from 'react';
import './charDetails.css';
import ErrorMessage from '../../errorMessage';
// import gotService from '../../../services';
import Spinner from '../../spinner';


const Field =({field, label, obj}) => {
  
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="term"> {label} </span>
      <span> {obj[field] || "no data..."} </span>
    </li>
  )
}
 
export {Field};

function CharDetails ({itemId, getItemData, nameItemBlock, children}){


  const [itemObj, setItemObj] = useState([]);
  const [loading, setOnLoading] = useState(false);
  const [err, setOnError] = useState(false);

  const onError = () => {
    setOnLoading(false)
    setOnError(true)
  }

  useEffect(() => {
        update()
  }, [itemId])

const update = () => {
  setOnLoading(true)
    if(!itemId) return
    getItemData(itemId)
       .then((res) => {
          for (let key in res){
            if(res[key] === [""] || res[key] == ""){
              res[key] = "no data..(("
            }
          }
          setItemObj(res)
          setOnLoading(false)
       })
       .catch(onError)
     
}

      const{name} = itemObj;

      const DetailsList = ({childrens, names, obj}) => {
        return (
          <div className="char-details rounded">
              <h4> {names || "no data..."} </h4>
              <ul className="list-group list-group-flush">
                {
                  React.Children.map(childrens, (child) => {
                    return React.cloneElement(child, {obj}||'no data..')
                  })
                  
                }
              </ul>
          </div>
        );
      }

      if(err) {return <ErrorMessage/>}

      if(itemObj.length === 0){ return <span className='select-error'>Please select a {nameItemBlock || "something..."}</span> }

      return (
        <>
          {loading ? <Spinner/> : <DetailsList names={name} childrens={children} obj={itemObj}/>}
        </>
      )  
    
}
 

export default CharDetails;

////98787556454453453234

// function CharDetails({itemId, getItemData, nameItemBlock}) {

//   // let gotService = new gotService();

//   // state ={
//   //   itemObj: [],
//   //   loading: false,
//   //   error: false
//   // }

//   const [itemObj, setUpdateObj] = useState([]);
//   const [loading, setOnLoaded] = useState(false);
//   // componentDidCatch = () =>{
//   //   this.setState(({error}) => ({error: true}));
//   // }


//   console.log(itemId);
//   useEffect(() => {
//     if (itemId) {
//       getItemData(itemId)
//     .then((response) => {
//         setOnLoaded (true);
//         setUpdateObj(response);
//         setOnLoaded (false);
//         console.log(itemObj);
      
//     });
//     }
//     console.log(itemId);
    
    
//   }, []);

//   // onItemLoaded = () => {
//   //   this.setState({ 
//   //     loading: false
//   //   })
//   // }

//  let updateItem = () => {
    
//     if (!itemId) {
//       return;
//     }
    
    
//       // this.foo.bar = 0;
//   }
  
    
//       // const {nameItemBlock} = this.props;
//       // const {error, itemObj, loading} = this.state;
//       // if(error){
//       //  return <ErrorMessage/>
//       // }

//       if(loading){ return <Spinner/> };
//       if(!itemObj){ return <span className='select-error'>Please select a {nameItemBlock || "something..."}</span> }
      
//         const[name] = itemObj;
//         console.log(itemObj);
        
//         return (
//           <div className="char-details rounded">
//               <h4> {name || "no data..."} </h4>
//               <ul className="list-group list-group-flush">
//                 {
//                   React.Children.map(this.props.children, (child) => {
//                     return React.cloneElement(child, {itemObj}||'no data..')
//                   })
//                 }
//               </ul>
//           </div>
          
//         );

    
// }

// export default CharDetails;

////89675456453mnvhgcfdgfdss



// export default class CharDetails extends Component {

//   gotService = new gotService();

//   state ={
//     itemObj: null,
//     loading: false,
//     error: false
//   }

//   componentDidCatch = () =>{
//     this.setState(({error}) => ({error: true}));
//   }

//   componentDidMount = () => {
//     this.updateItem();
//   }

//   componentDidUpdate = (prevProps) => {
//     if (this.props.itemId !== prevProps.itemId){
//       this.updateItem();
//     }
//   }

//   onItemLoaded = () => {
//     this.setState({ 
//       loading: false
//     })
//   }

//   updateItem = () => {
//     const {itemId} = this.props;
//     if (!itemId) {
//       return;
//     }
//     this.setState({loading: true});
//     const {getItemData} = this.props;
//     getItemData(itemId)
//       .then((itemObj) => {
//         // this.setState({itemObj});
//         // if(itemObj){

//         //   this.setState({loading: false});
//         // }
//         this.setState({itemObj});
//         if(itemObj){

//           for(let key in itemObj){
//             if(itemObj[key] === [""] || itemObj[key] == ""){
//               itemObj[key] = "no data..((";
//             }
//           }

//           this.setState({itemObj});
//           this.setState({loading: false});
//         }
//       });
//       // this.foo.bar = 0;
//   }
//     render() {
//       const {nameItemBlock} = this.props;
//       const {error, itemObj, loading} = this.state;
//       if(error){
//        return <ErrorMessage/>
//       }

//       if(loading){ return <Spinner/> };
//       if(!itemObj){ return <span className='select-error'>Please select a {nameItemBlock || "something..."}</span> }
      
//         const{name} = itemObj;
        
//         return (
//           <div className="char-details rounded">
//               <h4> {name || "no data..."} </h4>
//               <ul className="list-group list-group-flush">
//                 {
//                   React.Children.map(this.props.children, (child) => {
//                     return React.cloneElement(child, {itemObj}||'no data..')
//                   })
//                 }
//               </ul>
//           </div>
//         );

//     }
// }