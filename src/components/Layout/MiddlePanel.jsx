import React from 'react';
import Card from '../OtherComponents/Card';
import Statistics from '../OtherComponents/Statistics';
import Transactions from '../OtherComponents/Transactions';

const MiddlePanel = () => {
  return (
    <div className="flex w-3/5 flex-col gap-y-8">
      <Card />
      <Statistics />
      <Transactions />
    </div>
  );
};

export default MiddlePanel;
