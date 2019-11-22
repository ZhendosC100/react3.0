import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
// import {bindActionCreators} from 'redux';
import './index.css'

const Counter = ({counter, inc, dec, res}) =>{
    return(
        
        <div className="app_wrapper">
            <div className="counter">
                <p className="counter-text"> {counter} </p>
            </div>
            <div className="btn_wrapper">
                <button 
                    onClick={inc}
                    className='inc'>
                    <img src="./img/Plus.svg" alt="plus" title="plus"/>
                </button>
                <button 
                    onClick={dec}
                    className='dec'>
                    <img src="./img/Minus.svg" alt="minus" title="minus"/>
                </button>
                <button 
                    onClick={res}
                    className='res'>
                    <img src="./img/Reset.svg" alt="reset" title="reset"/>
                </button>
                <button 
                    
                    className='download'>
                    <img src="./img/Download.svg" alt="download" title="download"/>
                </button>
                <button 
                    
                    className='upload'>
                    <img src="./img/Upload.svg" alt="upload" title="upload"/>
                </button>
            </div>
      </div>
        
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}
// const mapDispatchToProps = (dispatch) => {
//     const {inc, dec, res} = bindActionCreators(actions, dispatch);
//     return {
//         inc,
//         dec,
//         res
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch);
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default connect(mapStateToProps, actions)(Counter);
