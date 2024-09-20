import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
      <div className="flex flex-grow p-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;