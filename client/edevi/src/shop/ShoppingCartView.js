import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import {ShoppingItemsList} from './ShopItemsList';
import '../css/DeviModules.css';
import ShoppingCartBadge from './ShoppingCartBadge';
import shoppingPlaceHolderitem from '../images/ShoppingItemPlaceholder.png';
import { makeStyles } from '@material-ui/core/styles';
import shoppingTileBackground from '../images/PurpleTile.svg';
import featureListBullet from '../images/featureDiamond.svg';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { IconButton } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import CardContent from '@material-ui/core/CardContent';
import ShoppingCartUtils from './ShoppingCartUtils';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ShoppingTile from './ShoppingTile';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const useStyles = makeStyles((theme) => ({
  shoppingCartGridListTile: {
    color: 'var(--title-text-color);'
  },
  shoppingCartGridList: {
    padding: '2%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  shoppingCartImg: {
    height: '250px',
    width: '100%'
  },
  shoppingCartGList: {
    maxWidth: '400px'
  },
  ShoppingCartDetailedTile: {
    backgroundImage: `url(${shoppingTileBackground})`,
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    sfontSize: '16px',
    flexDirection: 'column',
    positon: 'absolute',
    bottom: '0',
    width: '100%',
    padding: '3%',
    boxSizing: 'border-box',
    borderRadius: '0px'
  },
  cartDetailedTitle: {
    textAlign: 'left'
  },
  cartDetailedDescription: {
    textAlign: 'left',
    fontSize: '12px'
  },
  cartPrice: {
    float: 'right',
    marginRight: '2%'
  },
  quantityCard: {
    backgroundColor: 'rgba(87,98,207,0.2)',
    padding: '0px',
    marginTop: '2%'
  },
  quantityCardContent: {
  },
  itemCountWidget: {
    float: 'right',
    display: 'inline-block'
  },
  quantityLabel: {
    float: 'left',
  },
  featureImage: {
    width: '20px',
    height: '20px'
  },
  featureName: {
    fontSize: '12px',
    verticalAlign: 'text-top',
    marginLeft: '5px'
  },
  featureGridListTile: {
    float: 'left'
  },
  quantityText: {
    display: 'inline-block',
    padding: '0px 10px 0px 10px',
    position: 'absolute',
    right:'58px',
    marginTop: '2px'
  },
  shoppingItemDesc: {
    textAlign: 'left'
  },
  shoppingItemDescCard: {
    backgroundColor: 'transparent',
    color: 'white'
  },
  addIcon: {
    marginRight: '50px'
  },
  featureRecommendation: {
    fontWeight: 'bold',
    fontSize: '0.8rem',
    textAlign: 'left'
  }

}));

/*
  Each cartItem will be of type {
    itemId: '',
    itemQuantity: <Number>
  }
 */

 
function ShoppingCartView(props) {
  const classes = useStyles();

  let locationSegments = props.location.pathname.split('/');
  const currentItemView = locationSegments.pop();
  const previousItemView = locationSegments[locationSegments.length - 1];
  let currentDetailedItemView = ShoppingItemsList.itemsList.find((item)=> {
      return item.itemId === currentItemView;
  });

  let initCartItems = currentDetailedItemView.itemCartView.map((i)=> {
    return {
      itemId: i.itemId,
      quantity: 1
    }
  });
  const [cartItems, setCartItems] = React.useState([]);
  console.log(cartItems);

  const getCartItemQuantity = (currentItem) => {
      let itemToPopulate = getCartItem(currentItem);
      return  itemToPopulate ? itemToPopulate.quantity : 1 ;
  }

  const getCartItem = (itemID) => {
    return  cartItems.find ((cachedItem)=> {
      return cachedItem.itemId === itemID 
    });
  }

  const addToCart = (itemI) => {
    let currentCartItems = ShoppingCartUtils.getLocalStorageItems();
    let item = currentCartItems.find((currCartItem)=>{
        return currCartItem.itemId === itemI;
    });
    let cartItemQuantity = getCartItemQuantity(itemI);
    if (item) {
      item.itemQuantity = item.itemQuantity + cartItemQuantity;
    } else {
      item = {
        itemId: itemI,
        itemQuantity: cartItemQuantity
      }
      currentCartItems.push(item);
    }
    ShoppingCartUtils.setLocalStorageItems(currentCartItems);
    // update localState to refresh view
    let existingItem = getCartItem(itemI);
    existingItem.quantity =  item.itemQuantity;
    let newCartItems = [...cartItems];
    setCartItems(newCartItems);
  }

  const increaseQuantity = (itemId) => {
     let item = getCartItem(itemId);
     item.quantity = item.quantity + 1;
     let cachedCartItems = [...cartItems];
     setCartItems(cachedCartItems);
  }

  const decreaseQuantity = (itemId) => {
    let item = getCartItem(itemId);
    item.quantity = Math.max(item.quantity - 1, 1);
    let cachedCartItems = [...cartItems];
    setCartItems(cachedCartItems);
  }
  const onNavigationClick = () => {
     //props.history.goBack();
  }


  console.log(props.history);

  return (
    <div className="ShoppingCartView">
        <div className={classes.shoppingCartGridList}>
              <div className={'shoppingCartNavigation'} onClick={onNavigationClick}>
                 <ArrowBackIcon color={'primary'} fontSize={'large'} className={'NavigationIcon'}/>
                 <Typography variant="h5" component="h5" className={'NavigationText'}>
                      {previousItemView}
                 </Typography>
                 <ShoppingCartBadge itemCount={ShoppingCartUtils.getCartQuantity()} history ={props.history} />

              </div>
              <grid className={classes.shoppingCartGList} cols={1} >
                {
                  currentDetailedItemView.itemCartView.map((shoppingItem) => (  
                    <div>
                      <ShoppingTile shoppingItem={shoppingItem} increaseQuantity={increaseQuantity} getCartItemQuantity={getCartItemQuantity}
                          decreaseQuantity={decreaseQuantity} addToCart={addToCart} size={"Large"}/>
                      {/* <span>{
                          shoppingItem.hasOwnProperty('subOfferingTitle')  && (
                          <div>
                            <Typography variant="h6">
                                  {shoppingItem.subOfferingTitle}
                            </Typography>
                          
                            <GridList cellHeight={'auto'} className={classes.shoppingGList} cols={2} spacing={20} >
                              {shoppingItem.subOfferings.map((subOfferingItem) => (
                                  <ShoppingTile shoppingItem={subOfferingItem} increaseQuantity={increaseQuantity} getCartItemQuantity={getCartItemQuantity}
                                    decreaseQuantity={decreaseQuantity} addToCart={addToCart} size={"small"}/>
                                

                                  // <GridListTile key={subOfferingItem.itemName} className={classes.shoppingGridListTile}>
                                  //   <img className={classes.shoppingImg} src={shoppingPlaceHolderitem} alt={subOfferingItem.itemTitle} />
                                  //   <GridListTileBar
                                  //     subtitle={subOfferingItem.itemDescription}
                                  //     actionPosition={'right'}
                                  //     className={classes.shoppingTileBar}
                                  //     actionIcon={
                                  //       <IconButton aria-label={`info about ${subOfferingItem.Name}`} 
                                  //           className={shoppingItem.itemName +' ShoppingButton'}
                                  //           onClick={()=>{props.history.push(props.history.location.pathname + "/" + shoppingItem.itemName)}}>
                                  //         {shoppingItem.itemName}
                                  //       </IconButton>
                                  //     }
                                  //   />
                                  // </GridListTile>
                                ))}                     
                            </GridList>
                          </div>
                          ) 
                        }
                      </span>  */}
                    </div>                     
                  
                ))}
            </grid>
          </div>
    </div>
  );
}

export default ShoppingCartView;
