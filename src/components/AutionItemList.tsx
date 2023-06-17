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
                id: string;
                title: string;
                author: string;
                minimumBid: string;
                currentBid: string;
                isClosed: string;
              },
              index: number
            ) => {
              let pic = Imagess.Csp1;
              if (item.id === "1") {
                pic = Imagess.Csp1;
              } else if (item.id === "2") {
                pic = Imagess.Csp2;
              } else if (item.id === "3") {
                pic = Imagess.Csp3;
              } else if (item.id === "4") {
                pic = Imagess.Csp4;
              } else if (item.id === "5") {
                pic = Imagess.Csp5;
              } else if (item.id === "6") {
                pic = Imagess.Csp6;
              } else if (item.id === "7") {
                pic = Imagess.Csp7;
              } else if (item.id === "8") {
                pic = Imagess.Csp8;
              } else if (item.id === "9") {
                pic = Imagess.Csp9;
              } else if (item.id === "10") {
                pic = Imagess.Csp10;
              } else if (item.id === "11") {
                pic = Imagess.Csp11;
              } else if (item.id === "12") {
                pic = Imagess.Csp12;
              } else if (item.id === "13") {
                pic = Imagess.Csp13;
              } else if (item.id === "14") {
                pic = Imagess.Csp14;
              } else if (item.id === "15") {
                pic = Imagess.Csp15;
              } else if (item.id === "16") {
                pic = Imagess.Csp16;
              } else if (item.id === "17") {
                pic = Imagess.Csp17;
              } else if (item.id === "18") {
                pic = Imagess.Csp18;
              } else if (item.id === "19") {
                pic = Imagess.Csp19;
              } else if (item.id === "20") {
                pic = Imagess.Csp20;
              } else if (item.id === "21") {
                pic = Imagess.Csp21;
              } else if (item.id === "22") {
                pic = Imagess.Csp22;
              } else if (item.id === "23") {
                pic = Imagess.Csp23;
              } else if (item.id === "24") {
                pic = Imagess.Csp24;
              } else if (item.id === "25") {
                pic = Imagess.Csp25;
              } else if (item.id === "26") {
                pic = Imagess.Csp26;
              } else if (item.id === "27") {
                pic = Imagess.Csp27;
              } else if (item.id === "28") {
                pic = Imagess.Csp28;
              }

              return (
                <Link href={`/auctionitem?id=${index + 1}`} key={index}>
                  <AuctionItemTile
                    key={index}
                    title={item.title}
                    photo={pic}
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
