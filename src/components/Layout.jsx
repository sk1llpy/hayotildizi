import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
      <div className="flex flex-grow p-3 mb-[100px]">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;