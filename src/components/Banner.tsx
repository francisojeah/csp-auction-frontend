import React from "react";
import Image from "next/image";

import Imagess from "@/constants/imagess";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-10">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-[#0b469c]" id="out">
              Art
            </span>{" "}
            for a Cause
          </h1>
          <p className="max-w-[480px] mb-8 font-semibold">
            Join the CSP Silent Auction, an art event for a great cause. Bid on
            diverse artwork, support the mission of CSP, and engage with fellow
            art enthusiasts. Acquire remarkable pieces while making a positive
            impact.
          </p>

          <div className="flex items-center gap-6">
            <Link
              className="bg-[#0b469c] hover:bg-[#0a3576] text-white px-4 py-3 rounded-lg transition"
              href="#auction"
            >
              Start Bidding
            </Link>
          </div>
        </div>
        <div className="hidden flex-1 lg:flex  lg:p-16 justify-end items-end">
          <Image
            src={Imagess.splashPaint}
            alt="home page image"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
