"use client";
import React from 'react'
import FreeTrials from '../../components/Demo-FreeTrail';
import YouTubeVideo from '../../components/HeroPageVideo';
import OurclientSlider from '../../components/Ourclient-slider';
import TabBar from '../../components/OurServicesTab';
import ClientFeedback from '../../components/ClientFeedback';
import FAQ from '../../components/FAQ';
import TawkToWidget from '../../components/TawkToWidget'

function Omslite() {
  return (
    <div> 
             {/* <TawkToWidget /> */}
        <FreeTrials/>  
      <YouTubeVideo/> 
      <OurclientSlider/>
        <TabBar/>
        <ClientFeedback/>
        <FAQ/>
    </div>
  )
}

export default Omslite;
