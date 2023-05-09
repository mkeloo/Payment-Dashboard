import React from 'react';
import NavBar from '../OtherComponents/NavBar';
import MiddlePanel from './MiddlePanel';
import RightPanel from './RightPanel';

const MainPanel = () => {
  return (
    <main className="flex min-h-screen flex-1 flex-col rounded-l-[48px] bg-gray-800 p-8">
      <NavBar />
      <div className="flex gap-x-6 py-8">
        <MiddlePanel />
        <RightPanel />
      </div>
    </main>
  );
};

export default MainPanel;
