import AdminNavBar from "@/components/AdminNavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import AuctionItemForm from "@/components/AuctionItemForm";
import { useSession } from "next-auth/react";
import Custom404 from "./../404";
import NavBar from "@/components/NavBar";

const NewAuctionItem = () => {
  const { data: session }: any = useSession();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

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

  return loading ? (
    <>
      <Custom404 />
    </>
  ) : session?.user?.role === "admin" ? (
    <>
      <AdminNavBar />

      <div className="p-10">
        <h1 className="text-[#0b469c] mb-2 text-xl">New Artwork</h1>

        <AuctionItemForm />
      </div>
    </>
  ) : null;
};

export default NewAuctionItem;
