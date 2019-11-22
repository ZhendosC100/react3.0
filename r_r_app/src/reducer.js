const reducer = (state = 1, action) => {
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

export default reducer;