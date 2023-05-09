import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { GiTakeMyMoney, GiReceiveMoney } from 'react-icons/gi';
import { BsCalendarEvent } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';

const invoices = [
  {
    id: 1,
    no: '#BCS101',
    date: 'Dec 12, 2020',
    avatar: '/img/avatar-2.jpeg',
    name: 'Alexander Smith',
    amount: '$13423.76',
    status: 'Successful',
  },
  {
    id: 2,
    no: '#BCD143',
    date: 'Jul 24, 2022',
    avatar: '/img/avatar-3.jpeg',
    name: 'Natasha Analington',
    amount: '$5172.34',
    status: 'Pending',
  },
];

const Invoices = () => {
  return (
    <div className="flex flex-col justify-between rounded-lg bg-gray-900 p-7">
      <div className="flex items-center justify-between">
        <h2 className="text-white text-[20px] font-medium">Invoices</h2>
        <button className="inline-flex items-center gap-x-1 rounded-lg bg-gray-700 py-2 px-4 text-sm text-gray-400 hover:text-white duration-200">
          <AiOutlinePlus className="h-5 w-5 stroke-current" />
          <span>New Invoices</span>
        </button>
      </div>
      <table className="mt-4">
        <thead>
          <tr>
            <td className="py-1 text-sm text-gray-400">No.</td>
            <td className="py-1 text-sm text-gray-400">Date</td>
            <td className="py-1 text-sm text-gray-400">Client</td>
            <td className="py-1 text-sm text-gray-400">Amount</td>
            <td className="py-1 text-sm text-gray-400">Status</td>
          </tr>
        </thead>
        <tbody>
          {invoices.map(({ id, no, date, avatar, name, amount, status }) => (
            <tr key={id} className="border-b border-gray-700 last:border-none">
              <td>
                <span className="text-white">{no}</span>
              </td>
              <td>
                <span className="text-white">{date}</span>
              </td>
              <td>
                {/* <span className="text-white">{avatar}</span> */}
                <img src={avatar} alt={name} />
              </td>
              <td>
                <span className="text-white">{amount}</span>
              </td>
              <td>
                <span className="text-white">{status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Invoices;
