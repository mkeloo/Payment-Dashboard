import React from 'react';
import { FiSearch, FiMail, FiBell, FiInbox } from 'react-icons/fi';
import { IoChevronDown } from 'react-icons/io5';

const NavBar = () => {
  return (
    <nav className="flex items-center gap-x-6">
      <div className="flex w-3/5 items-center justify-between">
        <h1 className="text-[30px] font-bold text-white">Overview</h1>
        <div className="flex items-center gap-x-2">
          <div className="relative">
            <span className="absolute inset-y-0 flex items-center px-3 pointer-events-none">
              <FiSearch className="w-5 h-5 stroke-current text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="rounded-lg bg-gray-900 py-3 pr-4 pl-10 text-sm text-gray-400 focus:text-white focus:outline-none duration-200"
            />
          </div>
          <button className="rounded-lg bg-gray-900 py-3 px-4 text-sm text-gray-400 hover:text-white duration-300">
            Add Account
          </button>
        </div>
      </div>
      <div className="flex w-2/5 items-center justify-between">
        <div className="flex items-center gap-x-2.5">
          <button className="text-gray-400 flex h-11 w-11 items-center justify-center rounded-full bg-gray-900 hover:text-white duration-300">
            <FiMail className="h-7 w-7 stroke-current" />
          </button>
          <button className="relative text-gray-400 flex h-11 w-11 items-center justify-center rounded-full bg-gray-900 hover:text-white duration-300">
            <FiBell className="h-7 w-7 stroke-current" />
            <div className="absolute top-3 right-3 flex h-2 w-2">
              <span className="inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75 absolute" />
              <span className="inline-flex h-2 w-2 rounded-full bg-indigo-400" />
            </div>
          </button>
          <button className="text-gray-400 flex h-11 w-11 items-center justify-center rounded-full bg-gray-900 hover:text-white duration-300">
            <FiInbox className="h-7 w-7 stroke-current" />
          </button>
        </div>
        <button className="flex h-11 items-center justify-center rounded-full bg-gray-900 text-gray-400 px-2 hover:text-white duration-200">
          <img
            src="/img/avatar-1.jpeg"
            alt="avatar-1"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="pl-2 text-sm">Alexander</span>
          <IoChevronDown className="w-6 h-6 stroke-current" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
