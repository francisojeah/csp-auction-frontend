
import { User, signOut } from "firebase/auth";
import Link from "next/link";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { RootState, updateSport1 } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSportsBasketball = () => {
    dispatch(updateSport1(""));
  };


  const sharedSport = useSelector((state: RootState) => state.string1);


  return (
    <>
      <nav className="w-screen z-10 top-0 fixed p-6 mb-12 border-b lg:shadow-1 bg-transparent backdrop-blur">
        <div className="container mx-auto flex justify-between items-center w-full h-full">
          <Link href="/">
            <div className="font-bold text-xl sm:text-3xl">CSP x YSMA</div>
          </Link>
          {sharedSport == "" ? (
            <div className="flex items-center gap-6">
              {/* <Link className="hover:text-[#0b469c] transition" href="/login">
                Log in
              </Link> */}
              <Link
                className="bg-[#0b469c] hover:bg-[#0a3576] text-white px-4 py-3 rounded-lg transition"
                href="/signup"
              >
                Sign up
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-6">
              <Link
                className="bg-[#0b469c] hover:bg-[#0a3576] text-white px-4 py-3 rounded-lg transition"
                onClick={() => location.reload()}
                href={"/"}
              >
                Log Out
              </Link>
            </div>
          )}
        </div>
      </nav>
      <div className="h-40"></div>
    </>
  );
};

export default NavBar;
