import Banner from '@/components/sections/Banner/Banner';
import NavBar from '@/shared/NavBar/NavBar';
import Ecosystem from '@/components/sections/Ecosystem/Ecosystem';
import Tokenomics from '@/components/sections/Tokenomics/Tokenomics';
import React from 'react';
import configSettings from '@/settings.json';

const Home = () => {
  let currentStatus = "Coming Soon"
  let currentRoute = "/"
  if(configSettings.siteSettings.presale) {
    currentStatus = "Preale"
    currentRoute = "/presale"
  } else if (configSettings.siteSettings.claim) {
    currentStatus = "Claim"
    currentRoute = "/claim"
  }
  return (
    <div>
      <NavBar CurrentStatus={currentStatus} CurrentRoute={currentRoute}/>
      <Banner />
      <Ecosystem />
      <Tokenomics />
    </div>
  );
};

export default Home;
