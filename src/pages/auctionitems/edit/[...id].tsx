import AdminNavBar from "@/components/AdminNavBar";
import AuctionItemForm from "@/components/AuctionItemForm";
import Layout from "@/components/Layout";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Custom404 from "./../../404";
import NavBar from "@/components/NavBar";

export default function EditAuctionItemPage() {
  const { data: session }: any = useSession();
  const [itemInfo, setItemInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (session && session?.user?.role) {
      setLoading(false);
    }
  }, [session]);

  useEffect(() => {
    if (!loading && session?.user?.role !== "admin") {
      router.push("/");
    }
  }, [loading, session?.user?.role, router]);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/auctionitems?_id=" + id).then(async (response) => {
      setItemInfo(response.data);
    });
  }, [id]);

  return loading ? (
    <>
      <Custom404 />
    </>
  ) : session?.user?.role === "admin" ? (
    <>
      <AdminNavBar />
      <h1>Edit Artwork</h1>
      {itemInfo && <AuctionItemForm {...itemInfo} />}
    </>
  ) : null;
}
