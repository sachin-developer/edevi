import React from "react";
import { FormLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ShoppingTile from '../shop/ShoppingTile';
import {ShoppingItemsList} from '../shop/ShopItemsList';

function CodeForm({onEnterCodeClick}) {
    const [couponCode, setCouponCode] = React.useState(undefined);


    return (
        <div className='CodeForm'>
            <div className='CodeFormLabel'> Do you have a code?</div>
            <div className='FormControls'>
                <TextField label='Enter code' variant='outlined' className='CodeFormText' onChange={(evt)=>{setCouponCode(evt.target.value)}}/>
                <Button className={'CodeContinue'} onClick={()=>onEnterCodeClick(couponCode)}> Continue </Button>
            </div>
        </div> 
    );
}

export default function GlitchScreen(props) {
    const onWalkInClick = () => {

    }
     
    function WalkInDarshanButton({onWalkInClick}) {
        return (
            <Button className={'WalkInDarshanButton'} onClick={onWalkInClick}> Enter </Button>
        );
    }

    const onEnterCodeClick = (couponCode) => {
        // TODO: Validate CouponCode and block navigation for pledge route
        props.history.push(props.history.location.pathname + "/Pledge");
    }
    
    const freeItem = ShoppingItemsList.freeItems[0];
    return (
        <div className='GlitchScreen'>
            <div className='GlitchMasks'>
                <div className='GlitchPathBackground'></div>
                <div className='GlitchBackground'></div>
            </div>
            <div className='GlitchTitle'>I'm <span className='GlitchName'>Glitch</span>
                <br/>
                First Disciple of eDevi.
            </div>
            <div className='GlitchDescription'>
                Even a glimpse of the Goddess <br/>is like the clouds parting to reveal the sun.
                <br/> Darshana is both seeing and receiving.
            </div>
            <CodeForm onEnterCodeClick={onEnterCodeClick}/>
            <div className='CodeFormLabel'> or want to purchase a darshan? <span className='ShopFromCode'>Shop</span></div>
            <div className='GlitchRedirect'>You can also continue<br/> with free Walk-in darshan</div>
            <ShoppingTile shoppingItem={freeItem} size={'Large'} ActionButton={WalkInDarshanButton}/>
        </div>
    )
}