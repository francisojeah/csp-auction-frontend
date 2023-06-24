import { useRouter } from "next/router";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { FaGavel } from "react-icons/fa";
import NavBar from "@/components/NavBar";
import { AuctionItemProps } from "@/store/interfaces/auctionItem.interface";
import { useSession, signIn, signOut } from "next-auth/react";
import axios from "axios";
import { testting } from "@/constants/imagess";
import ImageSpinner from "@/components/ImageSpinner";
import Spinner from "@/components/Spinner";
import Notifications from "@/components/Notifications";
import { resolve } from "path";
import Modal from "@/components/Modal";
import ModalInput from "@/components/ModalInput";
import ModalNotification from "@/components/ModalNotification";

const sendEmail = async (bidder: any, title: any, bid: any) => {
  try {
    const response = await axios.post("api/mailer", {
      to: bidder,
      subject: "Bid for the artwork: " + title + " has been placed",
      text:
        "Your bid for the artwork: " +
        title +
        " has been placed! Bid: N" +
        bid +
        " Please check back regularly on the website to see if anyone out bids you. If no one out bids you at the end of the auction, you will be contacted with the payment details. Thank you",
      html: `<h1>Your bid for ' ${title} has been placed!</h1><br/><p>Bid: ${bid}</p><br/><p>Please check back regularly on the website to see if anyone out bids you https://cspxysma.art .</p><br/><p>If no one out bids you at the end of the auction, you will be contacted with the payment details.</p><br/><p>Thank you.</p>`,
      mail_type: "1",
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
      subject: "Someone has placed a higher bid for the artwork: " + title,
      text:
        "Someone has placed a higher bid for the artwork: " +
        title +
        " Please visit the website to place a higher bid. https://cspxysma.art Thank you",
      html: `<h1>Someone has placed a higher bid for  ${title} </h1><br/><p>Please visit the website to place a higher bid.</p><br/><p>https://cspxysma.art</p><br/><p>Thank you.</p>`,
      mail_type: "1",
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const sendEmail2 = async (bidder: any, title: any, bid: any) => {
  try {
    const response = await axios.post("api/mailer", {
      subject: bidder + " has placed a bid for the artwork: " + title,
      text:
        bidder +
        " has placed a bid for the artwork: " +
        title +
        "Amount: N" +
        bid +
        " Please visit the website to keep track of the bids. https://cspxysma.art/bids Thank you",
      html: `<h1>${bidder} has placed a bid for the artwork: ${title} Amount: N${bid}</h1><br/><p>Please visit the website to keep track of the bids.</p><br/><p>https://cspxysma.art/bids</p><br/><p>Thank you.</p>`,
      mail_type: "2",
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const AuctionItemm = () => {
  const { data: session } = useSession();

  const router = useRouter();
  const [bidd, setBidd] = useState("0");
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(true);
  const [goToAuctionItem, setGoToAuctionItem] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [showModalInput, setShowModalInput] = useState(false);
  const [title, setTitle] = useState("");
  const [messagee, setMessagee] = useState("");
  const [buttonText, setButtonText] = useState("");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openModalInput = () => {
    setShowModalInput(true);
  };

  const closeModalInput = () => {
    setShowModalInput(false);
  };

  const handleSaveChanges = () => {
    if (isNaN(parseFloat(bidd)) || bidd <= items.minimumBid) {
      closeModal();
    } else if (!items.isOpened) {
      closeModal();
    } else {
      closeModal();
      setMessagee(
        "Enter your phone number for further authentication. You would be contacted once the auction is over if you are the higgest bidder! Remember to check your email for confirmation after placing bid"
      );
      openModalInput();
    }
  };

  const handleSaveChangesInput = (e: any, phone: string) => {
    saveBid(e, phone);
  };

  const [showNotification, setShowNotification] = useState(false);

  const [items, setItems] = useState<any>();

  const handleLoadingComplete1 = () => {
    setLoading1(false);
  };

  const { id } = router.query;

  let _id = id;

  useEffect(() => {
    if (!session && session !== undefined) {
      signIn("google");
    }
  }, [session]);

  const submitt1 = () => {
    setTitle("Confirm Bid Place");
    setMessagee(
      "Are you sure you want to place this bid. Make sure of your amount. Once you do and you are the highest bidder, you would be contacted to pay once the auction is over!"
    );
    setButtonText("Continue");
    openModal();
    
  };

  const submitt2 = () => {
    setTitle("Invalid bid price");
    setMessagee(
      "Your Bid is less than the minimum bid, please enter a higher bid"
    );
    setButtonText("Try Again");
    openModal();

  };

  const submitt3 = () => {
    setTitle("Bid is Over");
    setMessagee("The Item has already been sold to the highest bidder");
    setButtonText("Okay");
    openModal();
  };

  async function saveBid(e: any, phone: string) {
    e.preventDefault();
    if (!session) {
      signIn("google");
    }
    setLoading(true);
    const oldbidder = items.bidder;

    const data: AuctionItemProps = {
      minimumBid: parseFloat(bidd) + 0.1 * parseFloat(bidd),
      currentBid: parseFloat(bidd),
      bidder: session?.user?.email || "",
      bidderPhone: phone,
      bidderName: session?.user?.name || "",
    };

    async function delayedExecution() {
      await new Promise((resolve) => setTimeout(resolve, 4000));
      setGoToAuctionItem(true);
    }

    if (_id) {
      //update
      await axios
        .put("/api/auctionitems", { ...data, _id })
        .then((response) => {
          sendEmail(data.bidder, items.title, data.currentBid);
          sendEmail1(oldbidder, items.title);
          sendEmail2(data.bidderName, items.title, data.currentBid);
          setLoading(false);
          setShowNotification(true);
          delayedExecution();
        })
        .catch(() => {
          setErrorMessage(
            "Unable to place bid for this artwork. Check your internet connection and refresh this page"
          );
          setLoading(false);
        });
    } else {
    }
  }

  if (goToAuctionItem) {
    router.push("/homee");
  }

  useEffect(() => {
    if (!_id) {
      return;
    }
    setLoading(true);
    axios
      .get("/api/auctionitems?_id=" + _id)
      .then((response) => {
        setItems(response.data);
        setLoading(false);
      })
      .catch(() => {
        setErrorMessage(
          "Unable to fetch list of auction artworks. Check your internet connection and refresh this page"
        );
        setLoading(false);
      });
  }, [_id]);

  return (
    <div className="w-full h-full">
      <NavBar />
      {loading ? (
        <Spinner />
      ) : (
        <>
          {showNotification && (
            <Notifications
              title={"Bid"}
              message={"You have successfully placed a bid"}
            />
          )}
          {items && (
            <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center p-10">
              <div className=" lg:w-2/4">
                {loading1 && <ImageSpinner />}
                <Image
                  src={testting(items.photo) || ""}
                  alt="item image"
                  width="0"
                  height="0"
                  sizes="100vw"
                  quality={100}
                  className="w-full h-full object-cover aspect-square rounded-xl"
                  priority={true}
                  onLoadingComplete={handleLoadingComplete1}
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
                        if (
                          isNaN(parseFloat(bidd)) ||
                          bidd <= items.minimumBid
                        ) {
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
                    <ModalNotification
                      showModal={showModal}
                      title={title}
                      message={messagee}
                      buttontext={buttonText}
                      onCloseModal={closeModal}
                      onSaveChanges={handleSaveChanges}
                    />
                    <ModalInput
                      showModal={showModalInput}
                      title={"Enter Phone number"}
                      message={messagee}
                      buttontext={"Place Bid"}
                      onCloseModal={closeModalInput}
                      onSaveChanges={handleSaveChangesInput}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
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
