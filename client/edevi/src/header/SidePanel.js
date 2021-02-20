
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import '../css/About.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';

const textByKey = {
    Temple: 'Temple',
    Shop: 'Shop',
    Donate: 'Donate',
    About: 'About',
    faq: 'FAQs',
    GetInTouch: 'Get in touch'
}

export default function SidePanel({history, showSidePanel, hideSidePanel}) {

    const onButtonClick = (text) => {
        history.push('/' + text);
        hideSidePanel();
    };

    return (
        <div className='SidePanel'>
            <List>
                <ListItem button key={'LogoIcon'} className='AppLogoBar'>
                </ListItem>
                {['Temple', 'Shop', 'Donate', 'About'].map((text, index) => (
                <ListItem button key={text} className='SidePanelListItem' onClick={()=> onButtonClick(text)}>
                    <ListItemText primary={textByKey[text]} className='SidePanelText'/>
                </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['faq', 'GetInTouch'].map((text, index) => (
                <ListItem button key={text} className='SidePanelListItem' onClick={()=> onButtonClick(text)}>
                    <ListItemText primary={textByKey[text]} className='SidePanelText'/>
                </ListItem>
                ))}
            </List>
            <List className='followEDevi'>
                <ListItem  >
                    <ListItemText primary={'Follow EDevi'} className='SmallSidePanelText'/>
                </ListItem>
                <ListItem className='followIcons' >
                    <LanguageIcon />
                    <InstagramIcon />
                </ListItem>
            </List>
        </div>
    )
}