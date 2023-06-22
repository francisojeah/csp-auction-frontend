import React from "react";
// import Meta from "./Meta";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const Layout = ({ children }: any) => {
  return (
    <main className={`${openSans.className} font-sans`}>
      {/* <Meta /> */}

      <div className="">{children}</div>
    </main>
  );
};

export default Layout;
