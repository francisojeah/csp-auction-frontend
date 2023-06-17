import Imagess from "@/constants/imagess";
import { useRouter } from "next/router";
import Image from "next/image";
import React, { useContext } from "react";
import { FaGavel } from "react-icons/fa";
import { GetServerSideProps, NextPage } from "next";
import NavBar from "@/components/NavBar";
import { AuthContext } from "@/AuthContext";
import { User } from "firebase/auth";
import { AuctionItemProps } from "@/store/interfaces/auctionItem.interface";
import { getArtById, getArtWorks } from "./api/sheets";

interface AItemProps {
  item: AuctionItemProps;
  items: AuctionItemProps[];
}

const AuctionItem = ({ item, items }: AItemProps) => {
  const { currentUser }: { currentUser: User | null } = useContext(AuthContext);
  const router = useRouter();

  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center p-10">
        <div className="flex flex-col gap-6 lg:w-2/4">
          <Image
            src={item.photo}
            alt="login screen image"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-full object-cover aspect-square rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-4 lg:gap-16 lg:w-2/4 lg:p-20">
          <div>
            <div className="mb-4 flex justify-between flex-row jus text-sm">
              <div
                className={`${
                  currentUser?.email == item.bidder
                    ? "bg-green-500"
                    : "bg-[#0b469c]"
                } rounded-full text-white px-3 `}
              >
                {currentUser?.email == item.bidder
                  ? "Winning Item"
                  : "Watching Item"}
              </div>
              <div
                className={`${
                  item.isClosed === "0" ? "bg-green-500" : "bg-red-500"
                } rounded-full text-white px-3 `}
              >
                {item.isClosed === "0" ? "Open" : "closed"}
              </div>
            </div>
            <h1 className="text-3xl font-bold">{item.title}</h1>
          </div>
          <p className="text-gray-700">{item.description}</p>
          <div className=" flex justify-between font-semibold">
            <div className=" flex flex-col">
              <p className="text-green-500 flex gap-1">
                <span>Current bid</span>{" "}
                <span>
                  <FaGavel />
                </span>
              </p>
              <p>N {item.currentBid}</p>
            </div>
            <div className=" flex flex-col">
              <p className="text-[#0b469c] flex gap-1">
                <span>Starting bid</span>{" "}
                <span>
                  <FaGavel />
                </span>
              </p>
              <p>N {item.minimumBid}</p>
            </div>
          </div>
          <div className="flex lg:flex-row items-center gap-8">
            <div className="w-full flex flex-col">
              <input
                name="text"
                type="text"
                // value={values['text']}
                // onChange={(e) => setFieldValue('text', e.target.value)}
                placeholder="Enter Bid"
                className="w-full text-black my-2 py-3 px-3 rounded-xl bg-transparent border  border-black bg-white outline-none focus:outline-none"
              />
            </div>
            <div className="w-full flex flex-col my-4">
              <button className="w-full text-white bg-[#0b469c] font-semibold my-2 py-3 rounded-xl text-center flex items-center justify-center cursor-pointer h-full">
                Place Bid
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context: { res: any; id: any }) {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=300, stale-while-revalidate=360"
  );
  const { query } = context;
  const { id } = query;

  // Fetch the list of auction items using getArtWorks
  const items: any = await getArtWorks();

  // Find the item with the matching id
  const item = items.find((item: any) => item[0] === id);

  return {
    props: {
      item: {
        title: item[1], // Assuming title is stored in the second column (index 1) of the item data
        // Include other properties of the item
      },
      items: items.slice(1), // Exclude the first item (assuming it contains header or irrelevant data)
    },
  };
}

export default AuctionItem;
