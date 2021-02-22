import React, { Component } from "react";
import {CartItems} from './CartItems';
import { Typography } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import OrderProcess from './OrderProcess';
import WithServerRequestRespone from '../hoc/WithServerRequestRespone';
import ShoppingCartUtils from './ShoppingCartUtils';
import CheckoutShoppingTile from './CheckoutShoppingTile';

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

function TotalBottomBar() {
    let totalAmount = ShoppingCartUtils.getCartPrice();
    return (
        <div className={'TotalBottomBar'}>
            <Typography variant="h5" component="h5" className={'Total'}>
                         {"Total"}
            </Typography>
            <Typography variant="h5" component="h5" className={'TotalAmount'}>
                    {"₹ " + totalAmount}
            </Typography>
        </div>
    )
}

function LoadedCartView ({setCurrentView}) {
    let getLocalStorageItems = ShoppingCartUtils.getLocalStorageItems();
    return (
        <div className='LoadedCartView'>
            {
                getLocalStorageItems.map((cartItem)=> (
                    <CheckoutShoppingTile cartItem={cartItem} />     
                ))
            }
            <TotalBottomBar />
            <Button variant='outlined' className={'proceedToBuy'} onClick={()=>{setCurrentView('RazorPay')}}>Proceed to Buy</Button>
        </div>
    )
}

function CheckoutCartView(props) {
    const onNavigationClick = () => {
        props.history.goBack();
     }
    const [currentView, setCurrentView] = React.useState('Checkout');

    let locationSegments = props.location.pathname.split('/');
    const currentItemView = locationSegments.pop();
    const previousItemView = locationSegments[locationSegments.length - 1];
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
                        <LoadedCartView setCurrentView={setCurrentView}/>
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

export default CheckoutCartView;