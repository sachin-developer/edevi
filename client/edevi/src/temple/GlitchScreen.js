
import { FormLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ShoppingTile from '../shop/ShoppingTile';
import {ShoppingItemsList} from '../shop/ShopItemsList';

function CodeForm() {
    return (
        <div className='CodeForm'>
            <div className='CodeFormLabel'> Do you have a code?</div>
            <div className='FormControls'>
                <TextField label='Enter code' variant='outlined' className='CodeFormText'/>
                <Button className={'CodeContinue'} onClick={()=>{}}> Continue </Button>
            </div>
        </div> 
    );
}

function WalkInDarshanButton() {
    return (
        <Button className={'WalkInDarshanButton'}> Enter </Button>
    );
}


export default function GlitchScreen() {

    const freeItem = ShoppingItemsList.freeItems[0];
    return (
        <div className='GlitchScreen'>
            <div className='GlitchBackground'></div>
            <div className='GlitchTitle'>I'm <span className='GlitchName'>Glitch</span>
                <br/>
                First Disciple of eDevi.
            </div>
            <div className='GlitchDescription'>
                Even a glimpse of the Goddess <br/>is like the clouds parting to reveal the sun.
                <br/> Darshana is both seeing and receiving.
            </div>
            <CodeForm />
            <div className='CodeFormLabel'> or want to purchase a darshan? <span className='ShopFromCode'>Shop</span></div>
            <div className='GlitchRedirect'>You can also continue<br/> with free Walk-in darshan</div>
            <ShoppingTile shoppingItem={freeItem} size={'Large'} ActionButton={WalkInDarshanButton}/>
        </div>
    )
}