import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Spinner from "@/components/Spinner";
import { testting } from "@/constants/imagess";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function AuctionItemForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  currentBid: existingcurrentBid,
  isOpened: existingisOpened,
  photo: existingphoto,
  author: assignedauthor,
  minimumBid: assignedminimumBid,
  bidder: existingbidder,
  bidderPhone: existingbidderPhone,
  bidderName: existingbidderName,
}: any) {
  const bidder = existingbidder || "";
  const bidderPhone = existingbidderPhone || "";
  const bidderName = existingbidderName || "";
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [author, setAuthor] = useState(assignedauthor || "");
  const [minimumBid, setMinimumBid] = useState(assignedminimumBid || 0.0);
  const [currentBid, setCurrentBid] = useState(existingcurrentBid || 0.0);
  const [goToAuctionItem, setGoToAuctionItem] = useState(false);
  const [isOpened, setisOpened] = useState(existingisOpened || true);
  const [photo, setPhoto] = useState(existingphoto || "");
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();
  const { data: session }: any = useSession();
  //   useEffect(() => {
  //     if (session !== null) {
  //       if (!session) {
  //         router.push("/");
  //       } else if (session?.user?.role !== "admin") {
  //         router.push("/");
  //       }
  //     }
  //   }, [session, router]);

  async function saveAuctionItem(e: any) {
    e.preventDefault();
    const data = {
      title,
      author,
      photo,
      description,
      minimumBid,
      currentBid,
      bidder,
      bidderPhone,
      bidderName,
      isOpened,
    };
    if (_id) {
      //update
      await axios.put("/api/auctionitems", { ...data, _id });
    } else {
      //create
      await axios.post("/api/auctionitems", data);
    }
    setGoToAuctionItem(true);
  }

  if (goToAuctionItem) {
    router.push("/auctionitems");
  }
  //   async function uploadImages(e: any) {
  //     const files = e.target?.files;

  //     if (files?.length > 0) {
  //       setIsUploading(true);

  //       const data = new FormData();

  //       for (const file of files) {
  //         data.append("file", file);
  //       }
  //       const res = await axios.post("/api/upload", data);
  //       setPhoto([...res.data.links]);
  //       setIsUploading(false);
  //     }
  //   }

  return (
    <div className="p-10">
      <form onSubmit={saveAuctionItem}>
        <label className="text-[#0b469c]">Artwork Title</label>
        <input
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="artwork title"
          className="border-2 border-gray-300 rounded-md px-1 focus:border-[#0b469c] w-full mb-2"
        />
        <label>Artwork Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
          className="border-2 border-gray-300 rounded-md px-1 focus:border-[#0b469c] w-full mb-2"
        ></textarea>
        <label>Artwork Artist</label>
        <input
          name="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="artist"
          className="border-2 border-gray-300 rounded-md px-1 focus:border-[#0b469c] w-full mb-2"
        />
        <label>Artwork Minimum Bid</label>
        <input
          name="minimumBid"
          type="number"
          value={minimumBid}
          onChange={(e) => setMinimumBid(parseFloat(e.target.value))}
          placeholder="minimum bid"
          className="border-2 border-gray-300 rounded-md px-1 focus:border-[#0b469c] w-full mb-2"
        />
        <label>Artwork Current Bid</label>
        <input
          name="currentBid"
          type="number"
          value={currentBid}
          onChange={(e) => setCurrentBid(parseFloat(e.target.value))}
          placeholder="current bid"
          className="border-2 border-gray-300 rounded-md px-1 focus:border-[#0b469c] w-full mb-2"
        />
        <label>Artwork Open?</label>
        <input
          name="isOpened"
          type="checkbox"
          checked={isOpened}
          onChange={(e) => setisOpened(e.target.checked)}
          className="border-2 border-gray-300 rounded-md px-1 focus:border-[#0b469c] w-full mb-2"
        />
        <label>Photo</label>
        <div className="mb-2 flex flex-wrap gap-1">
          {photo === "" && (
            <div
              key={photo}
              className="h-24 bg-white p-4 shadow-sm rounded-sm border border-gray-200"
            >
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-full object-contain rounded-lg"
                quality={100}
                src={testting(photo)}
                alt=""
              />
            </div>
          )}
          {isUploading && (
            <div className="h-24 flex items-center">
              <Spinner />
            </div>
          )}
          <label className="w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary rounded-sm bg-white shadow-sm border border-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            <label>Add photoId</label>
            <input
              name="photo"
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Photo id"
              className="border-2 border-gray-300 rounded-md px-1 focus:border-[#0b469c] w-full mb-2"
            />
          </label>
        </div>

        <button
          type="submit"
          className="bg-[#0b469c] text-white px-4 py-1 rounded-md"
        >
          Save
        </button>
      </form>
    </div>
  );
}
