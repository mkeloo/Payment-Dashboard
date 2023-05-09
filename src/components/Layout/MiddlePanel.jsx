import React from 'react';
import Card from '../OtherComponents/Card';
import Statistics from '../OtherComponents/Statistics';
import Transactions from '../OtherComponents/Transactions';
import Invoices from '../OtherComponents/Invoices';

const MiddlePanel = () => {
  return (
    <div className="flex w-3/5 flex-col gap-y-8">
      <Card />
      <Statistics />
      <Transactions />
      <Invoices />
    </div>
  );
};

export default MiddlePanel;
