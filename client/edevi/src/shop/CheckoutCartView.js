import React, { Component } from "react";
import {CartItems} from './CartItems';
import { Typography } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import OrderProcess from './OrderProcess';
import WithServerRequestRespone from '../hoc/WithServerRequestRespone';


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

function CheckoutCartView ({setCurrentView}) {
    return (
        <div className='LoadedCartView'>
            <Button variant='outlined' className={'proceedToBuy'} onClick={()=>{setCurrentView('RazorPay')}}>Proceed to Buy</Button>
        </div>
    )
}

function ShoppingCartView(props) {
    const onNavigationClick = () => {
        props.history.goBack();
     }
     const [currentView, setCurrentView] = React.useState('Checkout');
    

     let locationSegments = props.location.pathname.split('/');
     const currentItemView = locationSegments.pop();
     const previousItemView = locationSegments[locationSegments.length - 1];

//    let cartQuantity = props.data.itemQuantity;
    let itemQuantity = 1;

    return (
        <div className="CheckoutCartView">
            {
                currentView === 'Checkout' &&
                <span>
                    <div className={'shoppingCartNavigation'} onClick={onNavigationClick}>
                    <ArrowBackIcon color={'primary'} fontSize={'large'} className={'NavigationIcon'}/>
                    <Typography variant="h5" component="h5" className={'NavigationText'}>
                         {previousItemView}
                    </Typography>
                    </div>
                    <span>{
                        itemQuantity === 0 && (
                        <EmptyCarView />
                        ) 
                    } 
                    {
                    itemQuantity > 0 && (
                        <CheckoutCartView setCurrentView={setCurrentView}/>
                    ) 
                    } </span>   
                </span>
            }
            {
               currentView === 'RazorPay' && 
                <span>
                    {
                        WithServerRequestRespone(OrderProcess)({

                        })
                    }
                </span>
            }
           
        </div>
    )

}

export default ShoppingCartView;