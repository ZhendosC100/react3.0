import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import WhithRestoService from '../hoc';
import {Route, Switch} from 'react-router-dom';

import Background from './food-bg.jpg';

const App = ({RestoService}) => {
    console.log(RestoService.getMenuItems());
    return (
        
            <>
                <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
                
                {/* <Route path='/' exact render={
                    ()=>{
                        return (<AppHeader total={50}/>)
                    }
                }/> */}
                <AppHeader total={50}/>
                

                
                <Switch>
                    <Route path='/' exact component={MainPage}/>
                    <Route path='/cartpage' exact component={CartPage}/>
                </Switch> 
                {/* <AppHeader total={50}/>
                <MainPage/>
                <CartPage/> */}
                
            </div>
            
            </>
        
    )
}

export default WhithRestoService()(App);