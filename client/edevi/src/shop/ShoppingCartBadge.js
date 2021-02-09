import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles((theme) => ({
  badge: {
    left: '90%',
    top: '15%',
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    zIndex: '10000'
  },
}))(Badge);

export default function ShoppingcartBadge(props) {
  const itemCount = props.data.itemCount || 0;
  return (
    <IconButton aria-label="cart" className='ShoppingCartIcon'>
      <Badge badgeContent={props.data.itemCount} invisible={props.data.shouldShowBadge} color="primary"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}>
      <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}
