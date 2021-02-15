import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import {ShoppingItemsList} from './ShopItemsList';
import '../css/DeviModules.css';
import ShoppingCartBadge from './ShoppingCartBadge';
import shoppingPlaceHolderitem from '../images/ShoppingItemPlaceholder.png';
import { makeStyles } from '@material-ui/core/styles';
import shoppingTileBackground from '../images/PurpleTile.svg';
import featureListBullet from '../images/featureDiamond.svg';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
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


const useStyles = makeStyles((theme) => ({
  shoppingCartGridListTile: {
    margin: '2%'
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
    maxWidth: '350px'
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
  addButton: {
    margin: '15px 15px 0px 15px',
    textTransform: 'inherit'
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
  let currentDetailedItemView = ShoppingItemsList.itemsList.find((item)=> {
      return item.itemId === currentItemView;
  });

  const [cartItems, setCartItems] = React.useState(currentDetailedItemView.itemCartView.map((i)=> {
      return {
        itemId: i.itemId,
        quantity: 1
      }
  }));
  console.log(cartItems);

  const getCartItemQuantity = (currentItem) => {
      let itemToPopulate = getCartItem(currentItem);
      return itemToPopulate.quantity ;
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

  const onCartBadeClick = () => {
     props.history.push(props.history.location.pathname + "/" + 'Checkout')
  }

  return (
    <div className="ShoppingCartView">
        <ShoppingCartBadge data={{itemCount: ShoppingCartUtils.getCartQuantity(), onCartBadeClick}} />
        <div className={classes.shoppingCartGridList}>
              <GridList cellHeight={'auto'} className={classes.shoppingCartGList} cols={1} >
                {currentDetailedItemView.itemCartView.map((shoppingItem) => (  
                  shoppingItem.itemType === 'cartItem'
                   && (
                    <GridListTile key={shoppingItem.itemId} className={classes.shoppingCartGridListTile}>
                      <img className={classes.shoppingCartImg} src={shoppingPlaceHolderitem} alt={shoppingItem.itemTitle} />
                      <Paper className={classes.ShoppingCartDetailedTile}>
                        <Typography variant="h6" component="h6" className={classes.cartDetailedTitle}>
                            {shoppingItem.itemName}
                            <span className={classes.cartPrice}>{shoppingItem.itemPrice}</span>
                        </Typography>
                        <Typography variant="body1" className={classes.cartDetailedDescription}>
                            {shoppingItem.itemDescription}
                        </Typography>
                        <div>
                          {shoppingItem.itemFeatureList &&                          
                          (
                            <GridList cellHeight={'auto'} className={classes.cartFeaureList} cols={2} >
                            {
                              shoppingItem.itemFeatureList.map((feaureItem)=> (
                                <GridListTile className='featureGridListTile' key={feaureItem.featureName}>
                                    <img className={classes.featureImage} src={featureListBullet}/>
                                    <span className={classes.featureName}>{feaureItem.featureName}</span>
                                </GridListTile>
                              ))
                            }
                            </GridList>
                          )}
                          {
                            shoppingItem.itemRecommendation && (
                              <Typography variant="body1" className={classes.featureRecommendation} >
                                {shoppingItem.itemRecommendation}
                              </Typography> 
                            )
                          }                         
                        </div>
                        <Divider />
                        <Card className={classes.quantityCard} variant="outlined">
                          <CardContent className={classes.quantityCardContent}>
                            <span className={classes.quantityLabel}>
                                {"Quantity"}
                            </span>
                            <div className={classes.itemCountWidget}>
                              <AddCircleOutlineIcon className={classes.addIcon} onClick={()=>{increaseQuantity(shoppingItem.itemId)}}/>
                                <div id="quantityLabel" className={classes.quantityText}>
                                    {getCartItemQuantity(shoppingItem.itemId) + ""}
                                </div>
                              <RemoveCircleOutlineIcon onClick={()=>{decreaseQuantity(shoppingItem.itemId)}}/>
                            </div>
                          </CardContent>
                          </Card>
                          <div className={classes.buttonContainer}>
                              <Button variant='outlined' className={classes.addButton} onClick={()=>{addToCart(shoppingItem.itemId)}}>Add to cart</Button>
                              <Button variant='outlined' className={classes.addButton}>Buy Now</Button>
                          </div>
                      </Paper>
                   </GridListTile>
                  ) ||
                  shoppingItem.itemType === 'text' && (
                    <Paper className={classes.shoppingItemDescCard}>
                        <Typography variant="h6">
                            {shoppingItem.itemTitle}
                        </Typography>
                        <Typography variant="body1" className={classes.shoppingItemDesc}>
                            {shoppingItem.itemDescription}
                        </Typography>
                    </Paper>
                  )
                  
                ))}
            </GridList>
          </div>
    </div>
  );
}

export default ShoppingCartView;
