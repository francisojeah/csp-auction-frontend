import Imagess from "@/constants/imagess";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";
import { auctionItems } from "@/constants/items";
import { FaGavel } from "react-icons/fa";
import { GetServerSideProps, NextPage } from "next";
import NavBar from "@/components/NavBar";

interface AItemProps {
  id: string;
}

const AuctionItem: NextPage<AItemProps> = ({ id }) => {
  const router = useRouter();
  let elwey = parseInt(id?.toString() || "", 10);

  let aItem = auctionItems[elwey];
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center p-10">
        <div className="flex flex-col gap-6 lg:w-2/4">
          <Image
            src={aItem.photo}
            alt="login screen image"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-full object-cover aspect-square rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-4 lg:gap-16 lg:w-2/4 lg:p-20">
          <div>
            <div className=" flex justify-between">
              <>
                <span className="text-[#0b469c] font-semibold">Watching</span>
              </>
              <div
                className={`${
                  !aItem.is_closed ? "bg-green-500" : "bg-red-500"
                } rounded-full text-white px-3 `}
              >
                {!aItem.is_closed ? "Open" : "Close"}
              </div>
            </div>
            <h1 className="text-3xl font-bold">{aItem.title}</h1>
          </div>
          <p className="text-gray-700">{aItem.description}</p>
          <div className=" flex justify-between font-semibold">
            <div className=" flex flex-col">
              <p className="text-green-500 flex gap-1">
                <span>Current bid</span>{" "}
                <span>
                  <FaGavel />
                </span>
              </p>
              <p>N {aItem.current_bid}</p>
            </div>
            <div className=" flex flex-col">
              <p className="text-[#0b469c] flex gap-1">
                <span>Starting bid</span>{" "}
                <span>
                  <FaGavel />
                </span>
              </p>
              <p>N {aItem.minimum_bid}</p>
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

export const getServerSideProps: GetServerSideProps<AItemProps> = async (
  context: any
) => {
  const { query } = context;
  const { id } = query;

  return {
    props: {
      id: id as string,
    },
  };
};

export default AuctionItem;
