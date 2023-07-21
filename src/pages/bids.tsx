import AdminNavBar from "@/components/AdminNavBar";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Custom404 from "./404";

const Bids = () => {
  const { data: session }: any = useSession();
  const [items, SetItems] = useState([]);
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

  useEffect(() => {
    axios.get("/api/auctionitems").then((response) => {
      SetItems(response.data);
    });
  }, []);
  return loading ? (
    <>
      <Custom404 />
    </>
  ) : session?.user?.role === "admin" ? (
    <>
      <AdminNavBar />

      <table className="border-2 border-black m-6 p-6">
        <thead>
          <tr>
            <td className="border-2 border-black">id</td>
            <td className="border-2 border-black">Title</td>
            <td className="border-2 border-black">Bidder</td>
            <td className="border-2 border-black">Email</td>
            <td className="border-2 border-black">Phone</td>
          </tr>
        </thead>
        <tbody className="border-2 border-black">
          {items &&
            items.map((item: any, index: any) => (
              <tr className="border-2 border-black" key={index}>
                <td className="border-2 border-black">{item.photo}</td>
                <td className="border-2 border-black">{item.title}</td>
                <td className="border-2 border-black">{item.bidderName}</td>
                <td className="border-2 border-black">{item.bidder}</td>
                <td className="border-2 border-black">{item.bidderPhone}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  ) : null;
};

export default Bids;
