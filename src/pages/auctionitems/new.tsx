import AdminNavBar from "@/components/AdminNavBar";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import AuctionItemForm from "@/components/AuctionItemForm";
import { useSession } from "next-auth/react";
import ConditionalRoute from "@/routes/ConditionalRoute";

const NewAuctionItem = () => {
    const { data: session } = useSession();
  return (
    // <ConditionalRoute
    //   redirectTo="/homee"
    //   condition={
    //     session?.user && session?.user?.email !== "csp@pau.edu.ng"
    //       ? false
    //       : true
    //   }
    // >
      <>
        <AdminNavBar />

        <div className="p-10">
          <h1 className="text-[#0b469c] mb-2 text-xl">New Artwork</h1>

          <AuctionItemForm />
        </div>
      </>
    // </ConditionalRoute>
  );
};

export default NewAuctionItem;
