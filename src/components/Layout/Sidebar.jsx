import React from 'react';
import { HiOutlineHome, HiOutlineCash } from 'react-icons/hi';
import { FiFileText } from 'react-icons/fi';
import { RiBankLine } from 'react-icons/ri';
import { BsCreditCard } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { MdOutlineDashboardCustomize } from 'react-icons/md';

const menu = [
  {
    id: 1,
    name: 'Home',
    icon: <HiOutlineHome className="w-6 h-6 stroke-current" />,
  },
  {
    id: 2,
    name: 'USA Payers',
    icon: <HiOutlineCash className="w-6 h-6 stroke-current" />,
  },
  {
    id: 3,
    name: 'Invoices',
    icon: <FiFileText className="w-6 h-6 stroke-current" />,
  },
  {
    id: 4,
    name: 'My Bank',
    icon: <RiBankLine className="w-6 h-6 stroke-current" />,
  },
  {
    id: 5,
    name: 'Withdraw',
    icon: <BsCreditCard className="w-6 h-6 stroke-current" />,
  },
  {
    id: 6,
    name: 'Settings',
    icon: <FiSettings className="w-6 h-6 stroke-current" />,
  },
];

const Sidebar = () => {
  return (
    <aside className="flex w-64 flex-col px-4 pt-10 pb-6">
      <a
        href="#"
        className="flex items-center gap-x-4 px-8 text-2xl font-medium text-white focus:outline-none"
      >
        <MdOutlineDashboardCustomize className="h-6 w-6 stroke-current" />
        <span>Transfer</span>
      </a>
      <ul className="flex flex-1 flex-col gap-y-10 px-8 pt-14">
        {menu.map(({ id, icon, name }) => (
          <li key={id}>
            <a
              href="#"
              className="flex items-center gap-x-4 text-gray-400 hover:font-medium hover:text-white focus:font-medium focus:text-whit focus:outline-none duration-300"
            >
              {icon}
              {name}
            </a>
          </li>
        ))}
      </ul>
      <div className="rounded-lg bg-gray-900 p-6 bg-[url(/img/line-pattern.svg)] bg-top">
        <div className="text-white">
          Refer a friend and get <span className="font-bold">$5</span>
        </div>
        <div className="mt-3 text-sm text-gray-400">
          The reward of transfer.
        </div>
        <button className="mt-4 w-full rounded-lg bg-gray-700 py-2 text-sm font-normal text-gray-400 hover:text-white duration-300 hover:scale-105 hover:bg-gray-800 ">
          Invite
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
