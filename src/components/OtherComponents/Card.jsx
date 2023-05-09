import React from 'react';
import { BsCreditCardFill } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';

const Card = () => {
  return (
    <div className="flex items-center justify-between bg-gray-900 rounded-lg p-7 bg-[url(/img/line-pattern.svg)]">
      <div className="flex items-center gap-x-4">
        <div className="rounded-full bg-gray-800 p-3 ">
          <BsCreditCardFill className="h-5 w-5 stroke-current text-blue-400" />
        </div>
        <div>
          <div className="text-sm text-gray-400">CARD NUMBER</div>
          <div className="pt-1 text-white">1234 5678 9012 3456</div>
        </div>
      </div>
      <div className="h-full w-px bg-gray-700" />
      <div>
        <div className="text-sm text-gray-400">EXPIRY DATE</div>
        <div className="pt-1 text-white">12/34</div>
      </div>
      <div className="h-full w-px bg-gray-700" />
      <div>
        <div className="text-sm text-gray-400">CVV</div>
        <div className="flex items-center gap-x-2">
          <div className="pt-1 text-white">****</div>
          <button>
            <AiOutlineEye className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
      <div className="h-full w-px bg-gray-700" />
      <div>
        <div className="text-sm text-gray-400">Status</div>
        <div className="pt-1 text-white">Active</div>
      </div>
    </div>
  );
};

export default Card;
