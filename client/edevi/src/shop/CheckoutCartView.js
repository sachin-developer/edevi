import React, { Component, useState, useEffect } from 'react';
import {CartItems} from './CartItems';
import { Typography } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import OrderProcess from './OrderProcess';
import WithServerRequestRespone from '../hoc/withServerRequestRespone';
import ShoppingCartUtils from './ShoppingCartUtils';
import CheckoutShoppingTile from './CheckoutShoppingTile';
/* eslint-disable camelcase */
import CryptoJS, { HmacSHA256 } from 'crypto-js';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const defaultInputForm = {
    amount: '',
  };
  
  const useStyles = makeStyles({
    root: {
      width: '80%',
      margin: '2rem auto',
    },
    containerGrid: {
      padding: '2rem',
    },
    itemGrid: {
      textAlign: 'center',
    },
  });

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
    const classes = useStyles();
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputForm, setInputForm] = useState(defaultInputForm);

  const handleVerifyResponse = async (response, razorpay_order_id) => {
    const { razorpay_payment_id, razorpay_signature } = response;
    const secret = 'mD2yYFk4gxox9pFKT2QL7QVZ';
    const generated_signature = HmacSHA256(`${razorpay_order_id}|${razorpay_payment_id}`, secret).toString(CryptoJS.enc.Hex);
    if (generated_signature === razorpay_signature) {
      await axios.post('https://fast-shore-71647.herokuapp.com/api/payments', response, { timeout: 20000 });
      setMessage('Successful');
    } else {
      setMessage('Unsuccessful');
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setMessage(null);
    try {
      const body = { amount: parseInt(777, 10) };
      const reqOptions = { timeout: 30000 };
      const response = await axios.post('https://fast-shore-71647.herokuapp.com/api/razorpay', body, reqOptions);

      const key = process.env.REACT_APP_RAZORPAY_KEY_ID;
      const options = {
        key, // Enter the Key ID generated from the Dashboard
        amount: response.data.amount, // Amount is in currency subunits. Default currency is INR.
        currency: response.data.currency,
        name: 'Acme Corp',
        description: 'Test Transaction',
        image: null, // URL
        order_id: response.data.id, // This is the `id` obtained in the response.
        handler: (res) => { handleVerifyResponse(res, response.data.id); },
        prefill: {
          name: 'Gaurav Kumar',
          email: 'gaurav.kumar@example.com',
          contact: '9999999999',
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (err) {
      setMessage('error');
    } finally {
      setLoading(false);
      setInputForm({ amount: '' });
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);
    let getLocalStorageItems = ShoppingCartUtils.getLocalStorageItems();
    return (
        <div className='LoadedCartView'>
            {
                getLocalStorageItems.map((cartItem)=> (
                    <CheckoutShoppingTile cartItem={cartItem} />     
                ))
            }
            <TotalBottomBar />
            <Button variant='outlined' className={'proceedToBuy'} onClick={()=>{handleSubmit()}}>Proceed to Buy</Button>
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