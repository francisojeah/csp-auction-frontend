import Link from "next/link";
import React, { useContext } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const submitt = () => {
  confirmAlert({
    title: "Confirm Log Out",
    message: "Are you sure you want to log out?",
    buttons: [
      {
        label: "Yes",
        onClick: () => signOut(),
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

const NavBar = () => {
  const { data: session } = useSession();

  return (
    <>
      <nav className="w-screen z-10 top-0 fixed p-6 mb-12 border-b lg:shadow-1 bg-transparent backdrop-blur h-[80px]">
        <div className="container mx-auto flex justify-between items-center w-full h-full">
          <Link href="/">
            <div className="font-bold text-xl sm:text-3xl">CSP x YSMA</div>
          </Link>
          {!session ? (
            <div className="flex items-center gap-6">
              <button
                className="bg-[#0b469c] hover:bg-[#0a3576] text-white px-4 py-3 rounded-lg transition whitespace-nowrap"
                onClick={() => signIn("google")}
              >
                Login
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-6">
              <div className="w-full h-full">
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  quality={100}
                  className="w-full h-full object-contain rounded-full "
                  src={session?.user?.image || ""}
                  alt="User images"
                />
              </div>
              <button
                className="bg-[#0b469c] hover:bg-[#0a3576] text-white px-4 py-3 rounded-lg transition whitespace-nowrap"
                onClick={() => submitt()}
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </nav>
      <div className="h-40"></div>
    </>
  );
};

export default NavBar;
