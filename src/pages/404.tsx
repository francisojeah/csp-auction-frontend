import Link from "next/link";
import React from "react";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="font-bold text-xl mb-4">404 - Page Not Found</p>
      <p className=" text-lg mb-4">
        The page you are looking for does not exist.
      </p>
      <Link href="/">
        <p className=" px-4 py-2 bg-[#0b469c] text-white rounded-md font-semibold hover:bg-[#0a3576] transition-colors">
          Go back to home page
        </p>
      </Link>
    </div>
  );
};

export default Custom404;
