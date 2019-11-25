const initialState = {
    menu: [],
    loading: true
};

const reducer = (state = initialState, action) => {
    // console.log(state);
    switch (action.type){
        case 'MENU_LOADED':
            return{
                menu: action.payload,
                loading: false,
                error: false
            };
        case 'MENU_REQUESTED':
            return{
                menu: state.menu,
                loading: true,
                error: state.error
        };
        case 'MENU_ERROR':
            return{
                menu: state.menu,
                loading: false,
                error: true
        };
        default:
            return state;
    }
}

export default reducer;

// "http://www.academiabarilla.com/anteprima_pizzamargherita_xhm1p-2_1200.jpg?h=faa3bae42d7180a508c490395249247ded3f362c"