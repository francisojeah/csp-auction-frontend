import Imagess from '@/constants/imagess';
import React from 'react';
import Image from 'next/image';
import { AuctionItemProps } from '@/store/interfaces/auctionItem.interface';

import { FaGavel } from 'react-icons/fa';
import Link from 'next/link';

const AuctionItemTile: React.FC<AuctionItemProps> = ({
    title,
    author,
  current_bid,
  is_closed,
  photo,
  minimum_bid,
}) => {
  return (
    <div className="bg-white shadow-1 p-5 rounded-lg  w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition ">
      <div className="flex-none rounded-lg border overflow-hidden shadow-lg bg-gray-200 order-1 h-72  justify-self-center self-center mb-8">
        <Image
          src={photo}
          alt="Auction Item image"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mb-4 flex justify-end jus text-sm">
        <div
          className={`${
            !is_closed ? 'bg-green-500' : 'bg-red-500'
          } rounded-full text-white px-3 `}
        >
          {!is_closed ? 'Open' : 'Close'}
        </div>
      </div>
      <div className="text-lg font-semibold max-w-[260px] mb-2">{title}</div>
      <div className="text-base font-semibold max-w-[260px] mb-4">
        By {author}
      </div>
      <div className="text-sm font-semibold flex justify-between mb-4">
        <div className=" flex flex-col">
          <p className="text-green-500 flex gap-1">
            <span>Current bid</span>{' '}
            <span>
              <FaGavel />
            </span>
          </p>
          <p>N {current_bid}</p>
        </div>
        <div className=" flex flex-col">
          <p className="text-[#0b469c] flex gap-1">
            <span>Starting bid</span>{' '}
            <span>
              <FaGavel />
            </span>
          </p>
          <p>N {minimum_bid}</p>
        </div>
      </div>
      <div className="bg-[#0b469c] hover:bg-[#0a3576] text-white px-4 py-3 rounded-xl transition flex items-center justify-center">
        Place a bid
      </div>
    </div>
  );
};

export default AuctionItemTile;
