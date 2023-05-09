import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import StatChart from '/img/charts/statistic.svg';
import { FaMoneyBillWave } from 'react-icons/fa';
import { BsPiggyBankFill } from 'react-icons/bs';

const Statistics = () => {
  return (
    <div className="flex flex-col justify-between rounded-lg bg-gray-900 p-7">
      <div className="flex items-center justify-between">
        <h2 className="text-white text-[20px] font-medium">
          Statistics of Costs
        </h2>
        <button className="inline-flex items-center gap-x-1 rounded-lg bg-gray-700 py-2 px-4 text-sm text-gray-400 hover:text-white duration-200">
          <span>Jan - Aug</span>
          <FiChevronDown className="h-5 w-5 stroke-current" />
        </button>
      </div>
      <div className="flex gap-x-8 pt-8 ">
        <img src={StatChart} alt="chart" className="w-full" />
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-x-3 rounded-lg bg-green-400 p-4">
            <div className="rounded-full bg-gray-900 p-2 text-green-700">
              <FaMoneyBillWave className="h-6 w-6 fill-current" />
            </div>
            <div className="">
              <div className="text-sm text-indigo-700 font-bold">Revenue</div>
              <div className="font-bold">$10.57</div>
            </div>
          </div>
          <div className="flex items-center gap-x-3 rounded-lg bg-indigo-400 p-4">
            <div className="rounded-full bg-gray-900 p-2 text-indigo-700">
              <BsPiggyBankFill className="h-6 w-6 fill-current text-blue-300" />
            </div>
            <div className="">
              <div className="text-sm text-green-400 font-bold">Expenses</div>
              <div className="font-bold text-white">$4.57</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
