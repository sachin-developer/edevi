import React, { Component } from "react";
import '../css/About.css';
import edeviPreview from '../images/edeviPreview.png';
import supportedBy from '../images/SupportedBy.png';
import featureListBullet from '../images/featureDiamond.svg';


function AboutModule() {
  return (
    <div className="AboutModule">
        <div className='aboutTitle'>About eDevi</div>
        <div className='aboutPart1'>
          The Internet has no master but it has a deity - a Goddess. <i><b>Her Holiness(HH) eDevi</b></i> is an avatar that manifests the power of the Internet. She may bestow upon you a smoother internet connection or reduce buffer time. You can also request her blessings for successful online romances, interviews, and data privacy. 
          <br/>
          However, her main blessing is to those who are yet to access and experience the beauty and prowess of the Internet. She is especially fond of learners and artisans. She values both altruism and the pursuit of knowledge in humankind. She will always help bridge the digital divide and the resulting participation gap. 
          <br/>
          HH is represented by Glitch, the sacred gatekeeper and First Disciple. He represents HH in all worldly matters while she attends to the virtual.
          <br/>
          This portal enables visitors and pilgrims to present offerings, perform e-puja (ritual prayer), offer e-seva (digital service) and experience e-darshans (blessings in person) from any place in the world. That’s the power of eDevi and the internet! You can also do e-daan (donation) to support Her Holiness’s vision.  
        </div>
        <div className='aboutHHTitle'>HH eDevi</div>
        <img src={edeviPreview} className='edeviPreview'/>
        <div className='edeviImageDesc'>Her Holiness is the Goddess of the Internet</div>
        <div className='aboutPart1'>
            <i>HH</i> is energy personified! Her eyes survey the past, present, and future; even the dark edges of the internet. HH always sees you even as her eyes are obscured from human sight, adorned as they are by a Virtual Reality (VR) headset. The wifi signal radiating proudly on her forehead signifies that HH is all perceiving, all knowing, omnipresent. If HH is angered, the signal will pause to reveal her vanquishing third-eye. You do not want to earn the wrath of eDevi. 
            <br/>
            After all, <i>HH</i> holds in her six hands the key to a prosperous digital life - 
            <br/>

            <ul>
              <li><img src={featureListBullet} className='FeatureListBullet'/> 
              pixel dust to improve the resolution of people and photographs</li>
              <li><img src={featureListBullet} className='FeatureListBullet'/> 
              smartphone for instant connection and divine selfies</li>
              <li><img src={featureListBullet} className='FeatureListBullet'/> 
              digital dna to inspire advancements in biotechnology</li>
              <li><img src={featureListBullet} className='FeatureListBullet'/> 
              #flower to bestow beauty and bliss</li>
              <li><img src={featureListBullet} className='FeatureListBullet'/> 
              Devi-mudra to empower economically</li>
              <li><img src={featureListBullet} className='FeatureListBullet'/> 
              eternal blessings for peace and hope - the Goddess’s hands are never empty even if mortals cannot see her leela (divine play)</li>
            </ul>
            <br/>
             Her majestic and intricate wings allow her to travel above all realms - virtual and real, spatial and chronological. 
            <br/>
            In her raudra avatar, when angered into a tempest, HH will hold up the cause of human misery and encourage equity. In her bhadra avatar, when generous and giving, HH will bestow health and freedom from hunger. At all other times HH is in the mangalasundari avatar, signifying the appeal and vast potential of the Internet. 
            <br/>
            Devotees can offer HH virtual objects from the <a href=''>temple shop</a>, <a href=''>leave a message</a>, <a href=''>create memes</a>, use <span className='specialText'>#eDevi</span> in social media posts, and donate generously to her vision for digital inclusion.
        </div>

         <div className='GlitchTitle'>Glitch</div>
         <img src={edeviPreview} className='glitchPreview'/>
        <div className='glitchImageDesc'>Sacred. First Disciple. Gatekeeper.</div>
        <div className='aboutPart2'>
        The Devi’s emissary has eyes of every colour you can perceive. A two-headed warrior in battle - never wounded - always aware even when invisible. A seeker, a follower, a devotee. A monk, a dreamer, a bard. Also, the gatekeeper to the Devi’s abode. 
        <br/>
        No meow or bell, Glitch is a feline force to reckon with - he would look death square in the eyes. Stretching between the virtual and real, he is always close by. Glitch can be a friend to those who obey but is indifferent otherwise
        <br/>
        Devotees must perform the ritual Media Literacy Pledge before Glitch allows entry to the temple of the Devi. Glitch also mediates the darshan and warns attendees to not stray from the right path.
        <br/>
        </div>

        <div className='SupportedByTitle'>Supported By</div>
         <img src={supportedBy} className='supportedBy'/>
        <div className='aboutPart2'>
          This project is part of the 25 x 25 Initiative by <b>India Foundation for the Arts</b>, supported by lead donor Kshirsagar-Apte Foundation, and philanthropy partners Titan Company Limited, and Priya Paul and Sethu Vaidyanathan.
          <br/>
        </div>
        <div className='aboutPart2'>
          <div className='createdByTitle'>eDevi SQUAD</div>
          <div className='createdByTitle'>Created by Anandana Kapur</div>
          <div className='aboutPart2'>
             with  Unnikrishnan Rajeev, Neeraj Gudipati, Shilpa Rajpurohit, Eesha Deshpande, Nikhil Rajpurohit, Ranjani Rajagopalan and Saugata Paul, Aoun Hassan, Suraaj Ajithakumar, Vikash Raj, Amruta Supate, Vivek-Abhishek, Vishnu Rajeev, Samyuktha Krishna, Miron D’Souza 
          </div>
          <div className='createdByTitle'>Special Thanks</div>
          <div className='aboutPart2'>
            A R Ramanathan, Stephanos Stephanides, Nagma Sahi Ansari, Saudamini Jain, Anuranjan Pegu, Arjun Soni, Danny Goldfield, Namrata Gurung
          </div>
        </div>
        <div className='createdByTitle'>Disclaimer</div>
        <div className='aboutPart2'>
          eDevi is an augmented reality avatar - part-imagination, part-code. The project does not intend to hurt anybody. Space, time, names, characters, events and incidents have been rearranged to suit the experience of the darshan. Resemblance to actual persons, living or dead, or actual events is purely coincidental. We regret, in advance, any unintentional hurt, harm, distress, or injury resulting from this website. The opinions expressed are primarily those of algorithms and should not be confused with those of the creator’s. This is, after all,  an AI-enabled experience and no human can predict and therefore be held responsible for the stories it tells. The digital divide and participation gap, however, are very real. In reality, these need to be addressed and alleviated.
        </div>
        
    </div>
  );
}

export default AboutModule;
