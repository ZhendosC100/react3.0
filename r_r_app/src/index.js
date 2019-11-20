import {createStore} from 'redux';

const reducer = (state = 0, action) => {
    switch(action.type){
        case 'INC' :
            return state +1;
        case 'DEC' :
            return state -1;
        case 'RND' :
            return  state + action.value;
        default: 
            return state = 0
    }
}

const store = createStore(reducer);

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
// const rnd = (value) => ({type: 'RND', value});
const res = () => ({type: 'res'});



document.getElementById('inc').addEventListener('click', () =>{
    // store.dispatch({type:'INC'});
    store.dispatch(inc());

})
document.getElementById('dec').addEventListener('click', () =>{
    // store.dispatch({type:'DEC'});
    store.dispatch(dec());
})

document.getElementById('res').addEventListener('click', () =>{
    
    store.dispatch(res());
})



const update = () => {
    document.querySelector('.counter-text').textContent = store.getState();
}

store.subscribe(update);

