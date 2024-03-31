import Banner from '@/components/sections/Banner/Banner';
import NavBar from '@/shared/NavBar/NavBar';
import Ecosystem from '@/components/sections/Ecosystem/Ecosystem';
import Tokenomics from '@/components/sections/Tokenomics/Tokenomics';
import React from 'react';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Ecosystem />
      <Tokenomics />
    </div>
  );
};

export default Home;
