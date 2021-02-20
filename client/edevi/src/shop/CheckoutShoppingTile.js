import React, { Component } from "react";
import shoppingPlaceHolderitem from '../images/ShoppingItemPlaceholder.png';
import { makeStyles } from '@material-ui/core/styles';
import shoppingTileBackground from '../images/PurpleTile.svg';
import '../css/CheckoutCart.css';
import {ShoppingItemsList} from './ShopItemsList';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import ShoppingCartUtils from './ShoppingCartUtils';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    featureName: {
      fontSize: '12px',
      verticalAlign: 'text-top',
      marginLeft: '5px'
    },
    shoppingItemDesc: {
      textAlign: 'left'
    },
    shoppingItemDescCard: {
      backgroundColor: 'transparent',
      color: 'white'
    },
    featureRecommendation: {
      fontWeight: 'bold',
      fontSize: '0.8rem',
      textAlign: 'left'
    }
  
  }));

function Recommendation({cartItem}) {
    const classes = useStyles();

    return (
        <Typography variant="body1" className={classes.featureRecommendation} >
            {cartItem.itemRecommendation}
        </Typography> 
    )
}

function QuantityTile ({setItemQuantity, quantity}) {
    const increase = () => {
        setItemQuantity(Math.min(quantity + 1, 1000));

    }
    const decrease = () => {
        setItemQuantity(Math.max(quantity - 1, 1));
    }
    return (  

        <div className='QuantityItem'>
            <FormGroup className='QuantityForm' row>
                 <FormGroup row className='QuantityControlsForm'>
                    <AddCircleOutlineIcon className='addIcon' onClick={increase}/>
                    <FormLabel component="legend" className='quantityText'>{quantity}</FormLabel>
                    <RemoveCircleOutlineIcon className='removeIcon' onClick={decrease}/>
                </FormGroup>
            </FormGroup>
          
        </div>
    )
}

function CheckoutShoppingCartTile({cartItem, size, showBuyNow, onAddToCart}) {
    const classes = useStyles();
    let gridClassName = size === 'Large' ? 'largeShoppingCartGridListTile' : 'smallShoppingCartGridListTile';
    const [quantity, setItemQuantity] = React.useState(1);

    // const [price, setItemPrice] = React.useState(shoppingItem.itemPrice);
    const findItemFromId = () => {
        let myItem;
        ShoppingItemsList.itemsList.forEach((shop)=> {
            if (!myItem) {
                myItem =  shop.itemCartView.find((item)=> {
                    return item.itemId === cartItem.itemId;
                });
            }         
        });
        return myItem;
    }
    const currentItem = findItemFromId();

    const removeFromCart = () => {

    }
    return (
        <div key={cartItem.itemId} className={'CheckoutShoppingCartTile'}>
          <img className={'shoppingCartImg'} src={shoppingPlaceHolderitem} alt={cartItem.itemTitle} />
          <Paper className={'ShoppingCartDetailedTile'}>
            <div>
                <Typography variant="h6" component="h6" className={'cartDetailedTitle'}>
                    {currentItem.itemName}
                </Typography>
                <CloseIcon className='closeIcon' onClick={removeFromCart}/>
            </div>
            <Typography className={'cartDetailedDescription'}>
                {currentItem.itemDescription}
            </Typography>
            <div className='AliasBook'>
                {cartItem.aliasName && "Booked for "  + cartItem.aliasName}
            </div>
            <Card className='QuantityCard'>
                <span className={'cartPrice'}>{"₹" + cartItem.price/cartItem.quantity}</span>
                <QuantityTile quantity={cartItem.quantity} setItemQuantity={setItemQuantity}/>
            </Card>
          </Paper>
      </div>
    )
    
}

export default CheckoutShoppingCartTile;