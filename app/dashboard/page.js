"use client";

import React from "react";
import FreeTrials from "../../components/Demo-FreeTrail";
import YouTubeVideo from "../../components/HeroPageVideo";
import OurclientSlider from "../../components/Ourclient-slider";
import OMSModulesShowcase from "../../components/OMSModulesShowcase";
import TabBar from "../../components/OurServicesTab";
import ClientFeedback from "../../components/ClientFeedback";
import FAQ from "../../components/FAQ";

function Omslite() {
  return (
    <div className="bg-white">
      {/* High-conversion Executive Hero */}
      <FreeTrials />

      {/* Video Walkthrough with Browser Frame */}
      <YouTubeVideo />

      {/* Enterprise Clients & Verification Slider */}
      <OurclientSlider />

      {/* Interactive Core OMS Modules Showcase */}
      <OMSModulesShowcase />

      {/* Comprehensive Tech Services Suite */}
      <TabBar />

      {/* Real Client Testimonials */}
      <ClientFeedback />

      {/* Robust FAQ with Categories & Search */}
      <FAQ />
    </div>
  );
}

export default Omslite;
