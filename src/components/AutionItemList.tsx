import Imagess from "@/constants/imagess";
import { AuctionItemProps } from "@/store/interfaces/auctionItem.interface";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { ImSpinner2 } from "react-icons/im";
import AuctionItemTile from "./AuctionItemTile";
import { db } from "@/firebase";
import { getDocs, collection } from "firebase/firestore";
import {
  listAll,
  getDownloadURL,
  ref,
  uploadBytes,
  getStorage,
} from "firebase/storage";
import { v4 } from "uuid";

type Props = {
  items: any;
};

const AutionItemList: React.FC<Props> = ({ items }) => {
  return (
    <section className="mb-20" id="auction">
      <div className="container mx-auto">
        <div className="p-10 font-bold text-[#0b469c] text-2xl lg:text-4xl text-center">
          CSP x YSMA Silent Art Auction{" "}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {items.map(
            (
              item: {
                photo: string;
                id: string;
                title: string;
                author: string;
                minimumBid: string;
                currentBid: string;
                isClosed: string;
              },
              index: number
            ) => {
              

              return (
                <Link href={`/auctionitem?id=${index + 1}`} key={index}>
                  <AuctionItemTile
                    key={index}
                    title={item.title}
                    photo={item.photo}
                    author={item.author}
                    minimumBid={item.minimumBid}
                    currentBid={item.currentBid}
                    isClosed={item.isClosed}
                  />
                </Link>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default AutionItemList;
