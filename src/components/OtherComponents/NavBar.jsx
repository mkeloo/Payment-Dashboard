import React from 'react';
import { FiSearch } from 'react-icons/fi';

const NavBar = () => {
  return (
    <nav className="flex items-center gap-x-6">
      <div className="flex w-3/5 items-center justify-between">
        <h1 className="text-[30px] font-bold text-white">Overview</h1>
        <div className="flex items-center gap-x-2">
          <div className="relative">
            <span className="absolute inset-y-0 flex items-center px-3 pointer-events-none">
              <FiSearch className="w-6 h-6 stroke-current text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="rounded-lg bg-gray-900 py-3 pr-4 pl-10 text-sm text-gray-400"
            />
          </div>
          <button>Add Account</button>
        </div>
      </div>
      <div className="flex w-2/5 items-center justify-between"></div>
    </nav>
  );
};

export default NavBar;
