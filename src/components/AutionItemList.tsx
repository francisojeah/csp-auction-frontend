import Imagess from '@/constants/imagess';
import { AuctionItemProps } from '@/store/interfaces/auctionItem.interface';
import Link from 'next/link';
import React from 'react';

import { ImSpinner2 } from 'react-icons/im';
import AuctionItemTile from './AuctionItemTile';

const AutionItemList = () => {
  const auctionItems: AuctionItemProps[] = [
    {
      title: 'GanGan',
      photo: Imagess.CspArt,
      author: 'Abdulrazaq Femi-Sunmonu',
      description:
        'The vigor and rhythm of the talking drums amplify gatherings of both joy and sadness. The artwork evokes, with its brilliant colors and delicate features, the vibrant atmosphere of Nigerian music and culture.',
      minimum_bid: 50000,
      current_bid: 50000,
      bid_increment: 100,
      // bidder?: Types.ObjectId
      is_closed: false,
      // user?: Types.ObjectId;
    },
    {
      title: 'GanGan',
      photo: Imagess.CspArt,
      author: 'Abdulrazaq Femi-Sunmonu',
      description:
        'The vigor and rhythm of the talking drums amplify gatherings of both joy and sadness. The artwork evokes, with its brilliant colors and delicate features, the vibrant atmosphere of Nigerian music and culture.',
      minimum_bid: 50000,
      current_bid: 50000,
      bid_increment: 100,
      // bidder?: Types.ObjectId
      is_closed: false,
      // user?: Types.ObjectId;
    },
    {
      title: 'GanGan',
      photo: Imagess.CspArt,
      author: 'Abdulrazaq Femi-Sunmonu',
      description:
        'The vigor and rhythm of the talking drums amplify gatherings of both joy and sadness. The artwork evokes, with its brilliant colors and delicate features, the vibrant atmosphere of Nigerian music and culture.',
      minimum_bid: 50000,
      current_bid: 50000,
      bid_increment: 100,
      // bidder?: Types.ObjectId
      is_closed: false,
      // user?: Types.ObjectId;
    },
    {
      title: 'GanGan',
      photo: Imagess.CspArt,
      author: 'Abdulrazaq Femi-Sunmonu',
      description:
        'The vigor and rhythm of the talking drums amplify gatherings of both joy and sadness. The artwork evokes, with its brilliant colors and delicate features, the vibrant atmosphere of Nigerian music and culture.',
      minimum_bid: 50000,
      current_bid: 50000,
      bid_increment: 100,
      // bidder?: Types.ObjectId
      is_closed: false,
      // user?: Types.ObjectId;
    },
    {
      title: 'GanGan',
      photo: Imagess.CspArt,
      author: 'Abdulrazaq Femi-Sunmonu',
      description:
        'The vigor and rhythm of the talking drums amplify gatherings of both joy and sadness. The artwork evokes, with its brilliant colors and delicate features, the vibrant atmosphere of Nigerian music and culture.',
      minimum_bid: 50000,
      current_bid: 50000,
      bid_increment: 100,
      // bidder?: Types.ObjectId
      is_closed: false,
      // user?: Types.ObjectId;
    },
    {
      title: 'GanGan',
      photo: Imagess.CspArt,
      author: 'Abdulrazaq Femi-Sunmonu',
      description:
        'The vigor and rhythm of the talking drums amplify gatherings of both joy and sadness. The artwork evokes, with its brilliant colors and delicate features, the vibrant atmosphere of Nigerian music and culture.',
      minimum_bid: 50000,
      current_bid: 50000,
      bid_increment: 100,
      // bidder?: Types.ObjectId
      is_closed: false,
      // user?: Types.ObjectId;
    },
  ];
    return (
      <section className="mb-20">
        <div className="container mx-auto">
          <div className="p-10 font-bold text-[#0b469c] text-2xl lg:text-4xl text-center">
            CSP x YSMA Silent Art Auction{' '}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
            {auctionItems.map((item, index) => {
              return (
                <Link href={`/auctionitem?name=${item.title}`} key={index}>
                  <AuctionItemTile
                    key={index}
                    title={item.title}
                    photo={item.photo}
                    author={item.author}
                    minimum_bid={item.minimum_bid}
                    current_bid={item.current_bid}
                    is_closed={item.is_closed}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    );
};

export default AutionItemList;
