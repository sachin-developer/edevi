import React, { useState } from "react";
import SingleCardModule from "./SingleCardModule";
import "../css/Donate.css";
import Divyanshu_siblings from "../images/Divyanshu_siblings.png";
import Jasleen from "../images/Jasleen.png";
import Dishakruti_by_Tisser_Artisans_Trust from "../images/Dishakruti_by_Tisser_Artisans_Trust.png";
import IruWay_Crafter_Space_by_Janastu from "../images/IruWay_Crafter_Space_by_Janastu.png";
function DonateModule() {
  const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
      <p className="extraContent">
      Digital inequality denies children education, women livelihoods, 
      and entire communities the opportunity to build better informed lives. 
      Whether it is lack of technology itself or the skills to use it effectively and safely; 
      poverty and social exclusion inevitably follow
      </p>
      <p className="extraContent">
      Goddess of the Internet, Her Holiness eDevi, represents the 
      ceaseless potential of the Internet. HH’s message is clear - the 
      Internet is a basic and universal right. HH’s tenets focus on the protection 
      and promotion of a safe and inclusive Internet
      </p>
      <p className="extraContent">
      Direct donations to the temple, contributions to puja and darshan as well as 
      proceeds from the temple shop are used to support 
      initiatives that bridge the gap. You too can enable profound 
      change in the lives of many through e-daan to any of the stakeholders below
      </p>
      <p className="extraContent">
      We leave you with a few words from the Goddess herself -
      </p>
      <p className="extraContent">
      “Since you’re reading this you’re free. You’re free to express, 
      roam the world wide web, and be whoever you want to be! Use your 
      time online well and support someone partake the miracle of the Internet. ”
      </p>
      <p className="extraContent">
      “Since you’re reading this you’re free. You’re free to express, 
      roam the world wide web, and be whoever you want to be! Use your 
      time online well and support someone partake the miracle of the Internet. ”
      </p>
      <p className="extraContent">
      Her Holiness eDevi asks that you remember access to the Internet fosters 
      the ability to make informed decisions that impact lives, work, art, and society.
       Also, believers and non-believers must both agree - a coffee not bought,
        a pledge of Rs. 250 per month to a cause, an old item upcycled or cleaned and shared - are not big asks!
      </p>
  </div>
  const linkName=readMore?'Read Less ':'Read More  '

  return (
    <div className="DonateModule">
        <h3>Donation page</h3>
        <div className="intro introBlock">
        <p>You may call it a human right or refer to it as a fortuitous blessing, 
        the reality is that affordable access to the Internet is a dream for many. 
        Millions are awaiting their turn to taste the elixir of connectivity </p>

        <p>We leave you with a few words from the Goddess herself - 
        “Since you’re reading this you’re free. You’re free to express, 
        roam the world wide web, and be whoever you want to be! Use your time online 
        well and support someone partake the miracle of the Internet ”</p>
         {readMore && extraContent}<br/> <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
      
        </div>

        <div><h4>First Disciple Glitch suggests following beneficiaries</h4></div>

        <div className="cardsBlock">
          <SingleCardModule img={Jasleen} content={"The KRITI TEAM in villages in Dehradun welcomes contributions  for: Mobile data pack for online education connectivity , Mobile phones for older children / college students for continuing learning Educational scholarship (school fees for students)"}/>
          <SingleCardModule img={IruWay_Crafter_Space_by_Janastu} content={"Located near Durgadahalli village Karnataka, IruWay farm is home to the Crafter Space initiative. It supports activities like basket weaving with a focus on local creative and knowledge skills. The aim is reintroduction of traditional crafts to women and youth to support economic mobility. Post COVID-19 the initiative needs support to re-engage a dispersed and affected community"}/>
          <SingleCardModule img={Dishakruti_by_Tisser_Artisans_Trust} content={"The Thistribal Warli-Terracotta craft cluster in Maharashtra is home to many women artisans who keep their heritage alive while also bringing economic independence to their community. Tisser has worked with the community for over 8 years now and has helped with access to raw materials, skills training and marketplaces. Dishakruti is about giving direction to creativity"}/>
        </div>

    </div>
  );
}

export default DonateModule;
