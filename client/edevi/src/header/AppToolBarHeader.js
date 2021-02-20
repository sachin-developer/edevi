import React, { useState } from "react";
// import withServerRequestResponse from '../hoc/withServerRequestResponse';
import { Toolbar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import SidePanel from './SidePanel';
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles((theme) => ({
    AppToolBar: {
        backgroundColor: 'var(--header-toolbar-color)'
    },
    toolbarButton: {
        color: 'var(--toolbar-text-color)',
        textTransform: 'initial' 
    }, 
    hamburgerButton: {
        color: 'var(--toolbar-hamburger-color)' 
    }
}));

const toolbarTheme = createMuiTheme({
    overrides: {
      MuiToolbar: {
        root: {
            backgroundColor: 'var(--header-toolbar-color)'
        }
      },
      MuiButton: {
        text: {
          color: 'var(--toolbar-text-color)',
          textTransform: 'initial'
        }
      },
      MuiIconButton: {
          root: {
            color: 'var(--toolbar-hamburger-color)'
          }
      }
    }
  });

function AppToolBarHeader (props) {
    const classes = useStyles();

    const setReditectState = (route) => {
       props.data.history.push(route);
    }

    const [showDrawer, setShowDrawer] = React.useState(false);
    
    const showSidePanel = () => {
        setShowDrawer(true);
    }

    const hideSidePanel = () => {
        setShowDrawer(false);
    }

    return(
        <div> 
            <AppBar position="static" className={classes.AppToolBar}>
                <Toolbar>
                    <Button className={classes.toolbarButton} onClick={()=>{setReditectState('Temple')}}>Temple</Button>
                    <Button className={classes.toolbarButton} onClick={()=>{setReditectState('Shop')}}>Shop</Button>
                    <Button className={classes.toolbarButton} onClick={()=>{setReditectState('Donate')}}>Donate</Button>
                    <Button className={classes.toolbarButton} onClick={()=>{setReditectState('About')}}>About</Button>
                    <IconButton className={classes.hamburgerButton} edge="end" aria-label="menu" style={{marginLeft: 'auto'}} 
                        onClick={showSidePanel}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor={'right'} open={showDrawer} onClose={hideSidePanel} className={'SideDrawer'} >
                        {showDrawer && (
                            <SidePanel history ={props.data.history} showSidePanel={showSidePanel} hideSidePanel={hideSidePanel}/>
                        )
                        }
                    </Drawer>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default AppToolBarHeader;