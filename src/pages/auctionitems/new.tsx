// import AdminNavBar from "@/components/AdminNavBar";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
// import AuctionItemForm from "@/components/AuctionItemForm";
import { useSession } from "next-auth/react";

const NewAuctionItem = () => {
    const { data: session } = useSession();
  return (

      <>
        {/* <AdminNavBar /> */}

        <div className="p-10">
          <h1 className="text-[#0b469c] mb-2 text-xl">New Artwork</h1>

          {/* <AuctionItemForm /> */}
        </div>
      </>
  );
};

export default NewAuctionItem;
