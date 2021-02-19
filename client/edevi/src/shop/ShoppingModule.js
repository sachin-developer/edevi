import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import {ShoppingItemsList} from './ShopItemsList';
import '../css/DeviModules.css';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import shoppingPlaceHolderitem from '../images/ShoppingItemPlaceholder.png';
import shoppingTileBackground from '../images/PurpleTile.svg';
import { IconButton } from "@material-ui/core";
import ShoppingCartBadge from './ShoppingCartBadge';
import ShoppingCartUtils from './ShoppingCartUtils';

const useStyles = makeStyles((theme) => ({

  shoppingGridList: {
    padding: '2%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  shoppingImg: {
    height: '250px',
    width: '100%'
  },
  shoppingGList: {
    // width: '90%'
  },
  shoppingTileBar: {
    backgroundImage: `url(${shoppingTileBackground})`,
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    borderRadius: 'var(--shopitem-border-radius)',
    height: '40%',
    fontSize: '16px',
    flexDirection: 'column'
  }
}));

function ShoppingModule(props) {
  const classes = useStyles();
  const shoppingButtonclass='shoppingButton';
  return (
    <div className="ShoppingModule">
        <div>
            <Container maxWidth="sm" className='shoppingBackgroundImage'>             
            </Container>
            <div className='ShoppingModuleDescription'> 
                  Experience divine power at home!
            </div>
          </div>
          <ShoppingCartBadge  history ={props.history} />
          <div className={classes.shoppingGridList}>
              <GridList cellHeight={'auto'} className={classes.shoppingGList} cols={2} spacing={30} >
                {ShoppingItemsList.itemsList.map((shoppingItem) => (
                  <GridListTile key={shoppingItem.itemName} className={'shoppingGridListTile'} onClick={()=>{props.history.push(props.history.location.pathname + "/" + shoppingItem.itemName)}}>
                    <img className={classes.shoppingImg} src={shoppingPlaceHolderitem} alt={shoppingItem.itemTitle} />
                    <GridListTileBar
                      subtitle={shoppingItem.itemDescription}
                      actionPosition={'right'}
                      className={classes.shoppingTileBar}
                      actionIcon={
                        <img 
                            className={shoppingItem.itemName.replace(' ','') +'ShoppingButton'} >
                        </img>
                      }
                    >
                    </GridListTileBar>
                  </GridListTile>
                ))}
            </GridList>
          </div>
    </div>
  );
}
//>
export default ShoppingModule;
