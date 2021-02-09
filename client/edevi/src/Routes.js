import React, {Component} from 'react';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import LandingPageModule from './LandingPageModule';
import ShoppingModule from './shop/ShoppingModule';
import DonateModule from './donate/DonateModule';
import AboutModule from './about/AboutModule'; 
import ShoppingCartView from './shop/ShoppingCartView';

class Routes extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
                <Switch>
                    <Route exact path='/' component={LandingPageModule}/>
                    <Route exact path='/temple' component={LandingPageModule}/>
                    <Route exact path='/shop' component={ShoppingModule}/>
                    <Route exact path='/shop/Temple' component={ShoppingCartView}/>
                    <Route exact path='/shop/Puja' component={ShoppingCartView}/>
                    <Route exact path='/shop/Fasting' component={ShoppingCartView}/>
                    <Route exact path='/shop/Other' component={ShoppingCartView}/>

                    <Route exact path='/donate' component={DonateModule}/>
                    <Route exact path='/about' component={AboutModule}/>
                </Switch>
          );
    }
}

export default Routes;