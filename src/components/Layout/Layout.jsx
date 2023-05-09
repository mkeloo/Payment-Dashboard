import React from 'react';
import Sidebar from './Sidebar';
import MiddlePanel from './MiddlePanel';

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full bg-gray-700 font-sans">
      <Sidebar />
      <MiddlePanel />
    </div>
  );
};

export default Layout;
