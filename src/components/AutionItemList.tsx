import { AuctionItemProps } from "@/store/interfaces/auctionItem.interface";
import Link from "next/link";
import AuctionItemTile from "./AuctionItemTile";
import { useSession, signIn, signOut } from "next-auth/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { testting } from "../constants/imagess";
import Spinner from "./Spinner";

const AutionItemList = () => {
  const { data: session } = useSession();
  const [items, SetItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/auctionitems")
      .then((response) => {
        SetItems(response.data);
        setIsLoading(false);
      })
      .catch(() => {
        setErrorMessage(
          "Unable to fetch list of auction artworks. Check your internet connection and refresh this page"
        );
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="mb-20" id="auction">
      <div className="container mx-auto">
        <div className="p-10 font-bold text-[#0b469c] text-2xl lg:text-4xl text-center">
          CSP x YSMA Silent Art Auction{" "}
        </div>
        {isLoading ? (
          <Spinner />
        ) : (
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
                    photo={testting(item.photo)}
                    author={item.author}
                    minimumBid={item.minimumBid}
                    currentBid={item.currentBid}
                    isOpened={item.isOpened}
                    bidder={item.bidder}
                  />
                </Link>
              ))}
          </div>
        )}
      </div>
      {errorMessage && (
        <div className="flex justify-center">{errorMessage}</div>
      )}
    </section>
  );
};

export default AutionItemList;
