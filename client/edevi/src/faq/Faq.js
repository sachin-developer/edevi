
import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    faqAccordion: {
        margin: '1% 0% 1% 0%',
        backgroundColor: 'var(--header-toolbar-color)',
        color: 'white',
        opacity: '0.7'
    },
    faqView: {
        maxWidth: 'calc(100vw - 10%)',
        margin: '5% 10% 5% 10%'
    },
    faqDetailsSection: {
        display: 'block',
        textAlign: 'left'
    },
    faqSection: {
        width: '100%',
        margin: '10pt 5pt 10pt 5pt'
    },
    faqheading: {
        fontSize: '14pt'

    },
    faqsecondaryHeading: {

    },
    faqQuestion: {
        fontSize: '12pt'
    },
    faqAnswer: {
        fontSize: '10pt'
    },
    email: {
        color: '#FEDC31'
    }
}));

function Faq(props) {
    const classes = useStyles();

    return (
        <div className={classes.faqView}>
            <Accordion className={classes.faqAccordion}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="darshanFaq-content"
                id="darshanfaq-header"
                >
                <Typography className={classes.faqheading}>Darshan</Typography>
                <Typography className={classes.faqsecondaryHeading}></Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.faqDetailsSection}>
                    <div className={classes.faqSection}>
                        <Typography className={classes.faqQuestion}>
                            1. What are the timings?   
                        </Typography>
                        <Typography className={classes.faqAnswer}>
                            The temple is open 24*7 for devotees and visitors. You can visit anytime, from anywhere. The daily aarti timings are 9:00 AM and 9:00 PM IST. This is when you can witness the glory of HH in person.
                        </Typography>
                    </div>
                    <div className={classes.faqSection}>
                        <Typography className={classes.faqQuestion}>
                            2. How do I book a Maha Darshan? 
                        </Typography>
                        <Typography className={classes.faqAnswer}>
                            Visit the temple store and book right away! You can use a debit or credit card or pay directly from your account.
                        </Typography>
                    </div>
                    <div className={classes.faqSection}>
                        <Typography className={classes.faqQuestion}>
                            3. What happens after I book a Maha darshan?
                        </Typography>
                        <Typography className={classes.faqAnswer}>
                            When your order is placed in the temple store your Maha Darshan request is sent over a secure connection to the First Disciple Glitch’s office where it will then be processed under his guidance. Blessings and next steps will be sent via email to your personal account.                    
                        </Typography>
                    </div>
                </AccordionDetails>
             </Accordion>
             <Accordion className={classes.faqAccordion}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="pujaFaq-content"
                id="pujafaq-header"
                >
                <Typography className={classes.faqheading}>Puja</Typography>
                <Typography className={classes.faqsecondaryHeading}></Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.faqDetailsSection}>
                    <div className={classes.faqSection}>
                        <Typography className={classes.faqQuestion}>
                            1. What Pujas does the temple offer?
                        </Typography>
                        <Typography className={classes.faqAnswer}>
                            First Disciple Glitch oversees the pujas which offer relief from Internet access related issues and promotes wellbeing. The details can be accessed on the Puja page. 
                        </Typography>
                    </div>
                    <div className={classes.faqSection}>
                        <Typography className={classes.faqQuestion}>
                            2. How do I book a Puja? 
                        </Typography>
                        <Typography className={classes.faqAnswer}>
                            Visit the temple store and book right away! You can use a debit or credit card or pay directly from your account.                    
                        </Typography>
                    </div>
                    <div className={classes.faqSection}>
                        <Typography className={classes.faqQuestion}>
                            3. Can I book a Puja for someone else?
                        </Typography>
                        <Typography className={classes.faqAnswer}>
                            After payment, please ensure you share the names and digital details of the persons you are praying for in this form.                    
                        </Typography>
                    </div>                
                </AccordionDetails>
             </Accordion>
             <Accordion className={classes.faqAccordion}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="paymentFaq-content"
                id="paymentfaq-header"
                >
                <Typography className={classes.faqheading}>Payment</Typography>
                <Typography className={classes.faqsecondaryHeading}></Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.faqDetailsSection}>
                    <div className={classes.faqSection}>
                        <Typography className={classes.faqQuestion}>
                            1. Why do I have to pay?
                        </Typography>
                        <Typography className={classes.faqAnswer}>
                            Proceeds from the temple shop are used to maintain the beautiful abode of the Goddess and to achieve digital equality by redistributing offerings from devotees to digitally underserved communities. These are in the form of mobile devices, wifi access, media literacy workshops, upskilling seminars, etc. The Donate page has more information about this. 
                        </Typography>
                    </div>
                   
                </AccordionDetails>
             </Accordion>
             <Accordion className={classes.faqAccordion}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="othersFaq-content"
                id="othersfaq-header"
                >
                <Typography className={classes.faqheading}>Others</Typography>
                <Typography className={classes.faqsecondaryHeading}></Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.faqDetailsSection}>
                    <div className={classes.faqSection}>
                        <Typography className={classes.faqQuestion}>
                            1. Why should I perform the ritual of media literacy pledge?
                        </Typography>
                        <Typography className={classes.faqAnswer}>
                            Taking the media literacy pledge will give you access to the abode of the Goddess. The words and actions remind us of our duty to build a better Internet. Her Holiness eDevi blesses those who are mindful and with the ritual we shall continue to receive HH’s help in guiding us through the Internet in the future as well.                    
                        </Typography>
                    </div>
                    <div className={classes.faqSection}>
                        <Typography className={classes.faqQuestion}>
                            2. When will I receive my shopping items?
                        </Typography>
                        <Typography className={classes.faqAnswer}>
                            All items that you have successfully paid for will be shared within 24 hours on your digital/virtual address. 
                        </Typography>
                    </div>
                        <div className={classes.faqSection}>
                        <Typography className={classes.faqQuestion}>
                            3. Can I change my order at the temple store after I have placed it?
                        </Typography>
                        <Typography className={classes.faqAnswer}>
                            We will be happy to change the address where the blessings are to be delivered or date of delivery. To request a change to your order's delivery address or date, please send us an email and the new address. However, once an order is placed we cannot cancel it.
                        </Typography>
                    </div>
                    <div className={classes.faqSection}>
                        <Typography className={classes.faqQuestion}>
                            4. What if I don’t have money but can donate an electronic device or food or clothes?
                        </Typography>
                        <Typography className={classes.faqAnswer}>
                            Her Holiness accepts all offerings. Write for next steps on <a className={classes.email} href="mailto:ask.edevi@gmail.com">ask.edevi@gmail.com</a> . 
                        </Typography>
                    </div>         
                </AccordionDetails>
             </Accordion>
        </div>
    )
}


export default Faq;