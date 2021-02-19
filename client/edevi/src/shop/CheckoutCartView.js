import React, { Component } from "react";
import {CartItems} from './CartItems';
import { Typography } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function EmptyCarView(props) {
    return (
       <div className='EmptyCartView'>
           <div className='EmptyCircleView' />
           <Typography variant="h6" className ='EmptyCartTitle'>{CartItems.EmptyCartTitle} </Typography>
           <div className ='EmptyCartMessage'>{CartItems.EmptyCartMessage}</div>
           <div className ='ShowMeProducts'>{CartItems.ShowMeProducts}</div>
       </div> 
    )
}

function checkoutCartView () {
    return (
        <div className='LoadedCartView'>
        </div>
    )
}

function ShoppingCartView(props) {

    const onNavigationClick = () => {
        props.history.goBack();
     }
     let locationSegments = props.location.pathname.split('/');
     const currentItemView = locationSegments.pop();
     const previousItemView = locationSegments[locationSegments.length - 1];

//    let cartQuantity = props.data.itemQuantity;
    let itemQuantity = 0;

    return (
        <div className="CheckoutCartView">
            <div className={'shoppingCartNavigation'} onClick={onNavigationClick}>
                 <ArrowBackIcon color={'primary'} fontSize={'large'} className={'NavigationIcon'}/>
                 <Typography variant="h5" component="h5" className={'NavigationText'}>
                      {previousItemView}
                 </Typography>
              </div>
              {
                 itemQuantity === 0 && (
                    <EmptyCarView />
                 ) 
              } 
              {
                itemQuantity > 0 && (
                    <checkoutCartView />
                ) 
              }
        </div>
    )

}

export default ShoppingCartView;