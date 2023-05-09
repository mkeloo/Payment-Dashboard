import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { GiTakeMyMoney, GiReceiveMoney } from 'react-icons/gi';
import { BsCalendarEvent } from 'react-icons/bs';

const recentTransactions = [
  {
    id: 1,
    icon: <GiTakeMyMoney className="h-5 w-5 fill-current text-gray-900" />,
    type: 'Send Money',
    data: 'Dec 12, 2020',
    amount: '$123.00',
    balance: '$334.00',
  },
  {
    id: 2,
    icon: <GiReceiveMoney className="h-5 w-5 fill-current text-gray-900" />,
    type: 'Receive Fund',
    data: 'Jul 12, 2021',
    amount: '$322.00',
    balance: '$658.00',
  },
];

const Transactions = () => {
  return (
    <div className="flex flex-col justify-between rounded-lg bg-gray-900 p-7">
      <div className="flex items-center justify-between">
        <h2 className="text-white text-[20px] font-medium">
          Recent Transactions
        </h2>
        <button className="inline-flex items-center gap-x-1 rounded-lg bg-gray-700 py-2 px-4 text-sm text-gray-400 hover:text-white duration-200">
          <span>View All</span>
          <FiChevronDown className="h-5 w-5 stroke-current" />
        </button>
      </div>
      <table>
        <tbody>
          {recentTransactions.map(
            ({ id, icon, type, data, amount, balance }) => (
              <tr
                key={id}
                className="border-b border-gray-700 last:border-none"
              >
                <td className="py-4">
                  <div className="flex items-center gap-x-4">
                    <div
                      className={`flex items-center justify-center rounded-full p-2 ${
                        type === 'Send Money' ? 'bg-blue-400' : 'bg-green-400'
                      }`}
                    >
                      {icon}
                    </div>
                    <span className="text-sm text-white">{type}</span>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-x-2">
                    <div className="flex items-center justify-center rounded-full bg-gray-800 p-2">
                      <BsCalendarEvent className="h-5 w-5 fill-current text-gray-400" />
                    </div>
                    <span className="text-sm text-gray-400">{data}</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="text-sm text-white">{amount}</span>
                </td>
                <td className="p-4">
                  <span className="text-sm text-white">{balance}</span>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
