import Footer from '@/shared/Footer/Footer';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Main;
