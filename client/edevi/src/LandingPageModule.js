import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import appLogo from './images/edevi.png';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  landingPageModule: {
    marginTop: '20%',
    color: 'white'
  },
  continueButton: {
    width: '80%',
    height: '40px',
    backgroundColor: '#2d13d4',
    backgroundImage: 'linear-gradient(77deg, #2d13d4 0%, #7f99f0 50%, #ffffff 100%)',
    marginTop: '10%'
    }
}));

function LandingPageModule() {
  const classes = useStyles();

  return (
    <div className={classes.landingPageModule}>
        <div>
            <img className='App-logo' src={appLogo}/>
            <Typography className={classes.landingPageHeader} variant="h2">Welcome to the <br/> e-universe! </Typography> 
            <Button className={classes.continueButton}> Continue </Button>
        </div>
    </div>
  );
}

export default LandingPageModule;
