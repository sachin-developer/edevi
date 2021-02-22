
import Button from '@material-ui/core/Button';


export default function PledgeScreen() {

    const StartPledge = () => {
        
    }
    return(
        <div className='PledgeScreen' >
            <div className='PledgeTitle'> You do not need to <br/>remove your shoes but <br/>you must take the ritual <br/>
             <span className='PledgeTitleSpecial'>Media Literacy Pledge</span> before you behold the Goddess</div>
             <div className='GlitchMasks'>
                <div className='GlitchPathBackground'></div>
                <div className='GlitchBackground'></div>
            </div>
             <div className='MediaPledgeDesc'>You must take the ritual <br/>Media Literacy Pledge before <br/>
             I allow/you are allowed to enter <br/>the temple of HH eDevi.</div> 
             <Button className={'StartThePledge'} onClick={StartPledge}> Start the pledge </Button>
        </div>
    )
}