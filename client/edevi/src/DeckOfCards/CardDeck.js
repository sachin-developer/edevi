
import FullDeck from './JsonDeckFiles/jsonIndexer';
import Card from '@material-ui/core/Card';
import '../css/DeckOfCards.css';
import React, { Component } from "react";
import {serverConstants} from '../enums/ServerConstants';

const deckLimit = 21;

function fetchRandomDeckInfo() {
    const randomDeckNum = Math.floor(Math.random() * deckLimit) + 1;
    console.log(randomDeckNum);
    return FullDeck['deck' + randomDeckNum];
}
let randomCardDeck = fetchRandomDeckInfo();
let cardPrecursor = {
    "id": 0,
    "image": "GuideIcon.png",
    "bg-color": "#000000"
  }
  let cardSuccessor = {
      id: randomCardDeck.length+1,
      image: ''
  }
randomCardDeck.unshift(cardPrecursor);
randomCardDeck.push(cardSuccessor);

export default function CardDeck() {

    const [currentCardIndex, setCurrentCardIndex] = React.useState(0);
    const currentCard = randomCardDeck[currentCardIndex];
    const backgroundImage =  currentCard.image ? `../images/Image_Stories/${currentCard.image}`: 
    `../images/Image_Stories/DeckOfCardsBg.png`; 
    let styles = {
        backgroundImage: currentCard.image? "url('http://" + serverConstants.clientUrlBase + "/Images_Stories/" +  currentCard.image + "')": 
        "url('http://" + serverConstants.clientUrlBase + "/Images_Stories/DeckOfCardsBg.png')",
        // color: currentCard['bg-color'] || '#FFFFFF', 
        backgroundColor: currentCard['bg-color'] ? currentCard['bg-color'] : 'transparent'
    }

    let incr = function () {
        if (currentCardIndex+1 <randomCardDeck.length) {
            setCurrentCardIndex(currentCardIndex + 1)
        }
    };

    return (
        <div className='DeckOfCards' onClick={incr}>
            <div className={'Card ' + 'top'} style={styles}>
                {currentCard.Text && 
                (<div className={'TextContent '}><pre> {currentCard.Text}</pre>
                </div>)}
            </div>            
        </div>
    )
}