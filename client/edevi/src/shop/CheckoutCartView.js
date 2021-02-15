import React, { Component } from "react";
import CartItems from './CartItems';
import { Typography } from "@material-ui/core";

function emptyCarView(props) {
    return (
       <div>
           <div className='EmptyCircleView' />
           <Typography variant="h6" className ='EmptyCartTitle'>{CartItems.EmptyCartTitle} </Typography>
           <div className ='EmptyCartMessage'>{CartItems.EmptyCartMessage}</div>
           <div className ='ShowMeProducts'>{CartItems.ShowMeProducts}</div>
       </div> 
    )
}

function ShoppingCartView(props) {

   let cartQuantity = props.data.itemQuantity;


    return (
        <div className="CheckoutCartView">
        </div>
    )

}

export default ShoppingCartView;