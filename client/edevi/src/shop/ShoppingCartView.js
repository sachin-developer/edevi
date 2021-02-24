import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import {ShoppingItemsList} from './ShopItemsList';
import '../css/DeviModules.css';
import ShoppingCartBadge from './ShoppingCartBadge';
import shoppingPlaceHolderitem from '../images/ShoppingItemPlaceholder.png';
import { makeStyles } from '@material-ui/core/styles';
import shoppingTileBackground from '../images/PurpleTile.svg';

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
    // display: 'flex',
    // flexWrap: 'wrap',
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
 
function ShoppingCartView(props) {
  const classes = useStyles();

  let locationSegments = props.location.pathname.split('/');
  const currentItemView = locationSegments.pop();
  const previousItemView = locationSegments[locationSegments.length - 1];

  let currentDetailedItemView = ShoppingItemsList.itemsList.find((item)=> {
      return item.itemId === currentItemView;
  });
  const [refresh, forceRefresh] = React.useState(1);

  const handleBackClick = () => {
    props.history.replace('/shop');
  }
  
  const handleCheckoutClick = () => {
    props.history.replace('/shop/Checkout');
  }

  const getSubOfferingsItem = () => {
    return currentDetailedItemView.itemCartView.find((i)=> {
        return i.subOfferings && i.subOfferings.length > 0;
    });
  };

  const onAddToCart= () => {
     forceRefresh(refresh+1);
  }

  const subOfferingsItem = getSubOfferingsItem();

  return (
    <div className="ShoppingCartView">
      <div className={classes.shoppingCartGridList}>
        <div className={"shoppingCartNavigation"}>
          <span className={"shopNavigationBack"} onClick={handleBackClick}>
            <ArrowBackIcon
              color={"primary"}
              fontSize={"large"}
              className={"NavigationIcon"}
            />
            <Typography
              variant="h5"
              component="h5"
              className={"NavigationText"}
            >
              {previousItemView}
            </Typography>
          </span>
          <ShoppingCartBadge
            itemCount={ShoppingCartUtils.getCartQuantity()}
            history={props.history}
            currentItemView={locationSegments.join("/")}
            onClick={handleCheckoutClick}
          />
        </div>
        <grid className={classes.shoppingCartGList} cols={1}>
          {currentDetailedItemView.itemCartView.map((shoppingItem) => (
            <div>
              <ShoppingTile
                shoppingItem={shoppingItem}
                size={"Large"}
                onAddToCart={onAddToCart}
              />
            </div>
          ))}
        </grid>
        {subOfferingsItem && (
          <div className="SubOfferings">
            <grid container>
              {subOfferingsItem.subOfferings.map((subOfferingItem) => (
                <Grid item xs>
                  <ShoppingTile
                    shoppingItem={subOfferingItem}
                    size={"Small"}
                    showBuyNow={false}
                  />
                </Grid>
              ))}
            </grid>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShoppingCartView;
