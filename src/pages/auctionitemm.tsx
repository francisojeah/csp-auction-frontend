import { useRouter } from "next/router";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { FaGavel } from "react-icons/fa";
import NavBar from "@/components/NavBar";
import { AuctionItemProps } from "@/store/interfaces/auctionItem.interface";
import { useSession, signIn, signOut } from "next-auth/react";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
// import "react-confirm-alert/src/react-confirm-alert.css";
import { testting } from "@/constants/imagess";

const sendEmail = async (bidder: any, title: any, bid: any) => {
  try {
    const response = await axios.post("api/mailer", {
      to: bidder,
      subject: "Bid for " + title + " Placed",
      text:
        "Your bid for " +
        title +
        " has been placed! Bid: N" +
        bid +
        " Please check back regularly on the website to see if anyone out bids you. If no one out bids you at the end of the auction, you will be contacted with the payment details. Thank you",
      html: `<h1>Your bid for ' ${title} has been placed!</h1><br/><p>Bid: ${bid}</p><br/><p>Please check back regularly on the website to see if anyone out bids you https://cspxysma.art .</p><br/><p>If no one out bids you at the end of the auction, you will be contacted with the payment details.</p><br/><p>Thank you.</p>`,
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const sendEmail1 = async (bidder: any, title: any) => {
  try {
    const response = await axios.post("api/mailer", {
      to: bidder,
      subject: "Someone has placed a higher bid for " + title,
      text:
        "Someone has placed a higher bid for " +
        title +
        " Please visit the website to place a higher bid. https://cspxysma.art Thank you",
      html: `<h1>Someone has placed a higher bid for ' ${title} </h1><br/><p>Please visit the website to place a higher bid.</p><br/><p>https://cspxysma.art</p><br/><p>Thank you.</p>`,
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const submitt2 = () => {
  confirmAlert({
    title: "Confirm bid price",
    message: "Your Bid is less than the minimum bid, please enter a higher bid",
    buttons: [
      {
        label: "Ok",
        onClick: () => close(),
      },
    ],
    closeOnEscape: true,
    closeOnClickOutside: true,
    keyCodeForClose: [8, 32],
    overlayClassName: "overlay-custom-class-name",
  });
};

const submitt3 = () => {
  confirmAlert({
    title: "Bid is Over",
    message: "The Item has already been sold to the highest bidder",
    buttons: [
      {
        label: "Ok",
        onClick: () => close(),
      },
    ],
    closeOnEscape: true,
    closeOnClickOutside: true,
    keyCodeForClose: [8, 32],
    overlayClassName: "overlay-custom-class-name",
  });
};

const AuctionItemm = () => {
  const { data: session } = useSession();

  const router = useRouter();
  const [bidd, setBidd] = useState("0");
  const [isUploading, setIsUploading] = useState(false);
  const [goToAuctionItem, setGoToAuctionItem] = useState(false);

  const [items, setItems] = useState<any>();
  const { id } = router.query;

  let _id = id;

  useEffect(() => {
    if (!session) {
      signIn("google");
    }
  });

  const submitt1 = () => {
    confirmAlert({
      title: "Confirm Bid Place",
      message:
        "Are you sure you want to place this bid. Make sure of your amount. Once you do, you would be contacted to pay once the auction is over!",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            const event = { preventDefault: () => {} };
            saveBid(event);
          },
        },
        {
          label: "No",
          onClick: () => close(),
        },
      ],
      closeOnEscape: true,
      closeOnClickOutside: true,
      keyCodeForClose: [8, 32],
      overlayClassName: "overlay-custom-class-name",
    });
  };

  async function saveBid(e: any) {
    e.preventDefault();
    console.log("ergdbv");
    const oldbidder = items.bidder;

    const data: AuctionItemProps = {
      minimumBid: parseFloat(bidd) + 0.1 * parseFloat(bidd),
      currentBid: parseFloat(bidd),
      bidder: session?.user?.email || "",
    };

    if (_id) {
      //update
      await axios.put("/api/auctionitems", { ...data, _id });
    } else {
    }
    sendEmail(data.bidder, items.title, data.currentBid);
    sendEmail1(oldbidder, items.title);
    setGoToAuctionItem(true);
  }

  if (goToAuctionItem) {
    router.push("/homee");
  }

  useEffect(() => {
    if (!_id) {
      return;
    }
    axios.get("/api/auctionitems?_id=" + _id).then((response) => {
      setItems(response.data);
    });
  }, [_id]);

  return (
    <>
      <NavBar />
      {items && (
        <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center p-10">
          <div className="flex flex-col gap-6 lg:w-2/4">
            <Image
              src={testting(items.photo) || ""}
              alt="item image"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-full object-cover aspect-square rounded-xl"
              priority={true}
            />
          </div>
          <div className="flex flex-col gap-4 lg:gap-16 lg:w-2/4 lg:p-20">
            <div>
              <div className="mb-4 flex justify-between flex-row jus text-sm">
                <div
                  className={`${
                    session && session?.user?.email === items.bidder
                      ? "bg-green-500"
                      : "bg-[#0b469c]"
                  } rounded-full text-white px-3 `}
                >
                  {session && session?.user?.email === items.bidder
                    ? "Winning Item"
                    : "Watching Item"}
                </div>
                <div
                  className={`${
                    items.isOpened ? "bg-green-500" : "bg-red-500"
                  } rounded-full text-white px-3 `}
                >
                  {items.isOpened ? "Open" : "Closed"}
                </div>
              </div>
              <h1 className="text-3xl font-bold">{items.title}</h1>
            </div>
            <p className="text-gray-700">{items.description}</p>
            <div className=" flex justify-between font-semibold">
              <div className=" flex flex-col">
                <p className="text-green-500 flex gap-1">
                  <span>Current bid</span>{" "}
                  <span>
                    <FaGavel />
                  </span>
                </p>
                <p>N {items.currentBid}</p>
              </div>
              <div className=" flex flex-col">
                <p className="text-[#0b469c] flex gap-1">
                  <span>Starting bid</span>{" "}
                  <span>
                    <FaGavel />
                  </span>
                </p>
                <p>N {items.minimumBid}</p>
              </div>
            </div>
            <div className="flex lg:flex-row items-center gap-8">
              <div className="w-full flex flex-col">
                <input
                  name="bidd"
                  type="text"
                  value={bidd}
                  onChange={(e) => setBidd(e.target.value)}
                  placeholder="Enter Bid"
                  className="w-full text-black my-2 py-3 px-3 rounded-xl bg-transparent border  border-black bg-white outline-none focus:outline-none"
                />
              </div>
              <div className="w-full flex flex-col my-4">
                <button
                  className="w-full text-white bg-[#0b469c] font-semibold my-2 py-3 rounded-xl text-center flex items-center justify-center cursor-pointer h-full"
                  onClick={() => {
                    if (isNaN(parseFloat(bidd)) || bidd <= items.minimumBid) {
                      submitt2();
                    } else if (!items.isOpened) {
                      submitt3();
                    } else {
                      //
                      submitt1();
                    }
                  }}
                >
                  Place Bid
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// export async function getServerSideProps(context: any) {
//   context.res.setHeader(
//     "Cache-Control",
//     "public, s-maxage=300, stale-while-revalidate=360"
//   );
//   const { query } = context;
//   const { id } = query;

//   // Fetch the list of auction items using getArtWorks
//   const items: any = await getArtById(id);

//   // Find the item with the matching id

//   return {
//     props: {
//       items, // Exclude the first item (assuming it contains header or irrelevant data)
//     },
//   };
// }

export default AuctionItemm;
