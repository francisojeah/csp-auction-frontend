// import AdminNavBar from "@/components/AdminNavBar";
// import AuctionItemForm from "@/components/AuctionItemForm";
import Layout from "@/components/Layout";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditAuctionItemPage() {
  // const { data: session } = useSession();
  // const [itemInfo, setItemInfo] = useState({});
  // const router = useRouter();
  // const { id } = router.query;

  // useEffect(() => {
  //   if (!id) {
  //     return;
  //   }
  //   axios.get("/api/auctionitems?_id=" + id).then((response) => {
  //     setItemInfo(response.data);
  //   });
  // }, [id]);

  return (
      <>
        {/* <AdminNavBar /> */}
        <h1>Edit Artwork</h1>
        {/* {itemInfo && <AuctionItemForm {...itemInfo} />} */}
      </>
  );
}
