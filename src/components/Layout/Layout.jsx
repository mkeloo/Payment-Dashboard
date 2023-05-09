import React from 'react';
import Sidebar from './Sidebar';
import MainPanel from './MainPanel';

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full bg-gray-700 font-sans">
      <Sidebar />
      <MainPanel />
    </div>
  );
};

export default Layout;
