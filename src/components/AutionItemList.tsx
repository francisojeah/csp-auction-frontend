import { AuctionItemProps } from "@/store/interfaces/auctionItem.interface";
import Link from "next/link";
import AuctionItemTile from "./AuctionItemTile";
import { useSession, signIn, signOut } from "next-auth/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Imagess } from "@/constants/imagess";
// import { testting } from "../constants/imagess";

const AutionItemList = () => {
  const { data: session } = useSession();
  const [items, SetItems] = useState([]);
  useEffect(() => {
    axios.get("/api/auctionitems").then((response) => {
      SetItems(response.data);
    });
  }, []);

  return (
    <section className="mb-20" id="auction">
      <div className="container mx-auto">
        <div className="p-10 font-bold text-[#0b469c] text-2xl lg:text-4xl text-center">
          CSP x YSMA Silent Art Auction{" "}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {items &&
            items.map((item: any, index: any) => (
              <Link
                href={session ? "/auctionitemm?id=" + item._id : "/"}
                onClick={() => !session && signIn("google")}
                key={index}
              >
                <AuctionItemTile
                  key={index}
                  title={item.title}
                  // photo={testting(item.photo)}
                  photo={Imagess.Csp1}
                  author={item.author}
                  minimumBid={item.minimumBid}
                  currentBid={item.currentBid}
                  isOpened={item.isOpened}
                  bidder={item.bidder}
                />
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AutionItemList;
