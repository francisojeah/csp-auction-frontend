import { Imagess } from "@/constants/imagess";
import React, { useState } from "react";
import Image from "next/image";
import ImageSpinner from "./ImageSpinner";
import Link from "next/link";

const Sponsors = () => {
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);
  console.log(loading1);
  const handleLoadingComplete1 = () => {
    setLoading1(false);
    console.log(loading1);
  };
  const handleLoadingComplete2 = () => {
    setLoading2(false);
  };
  const handleLoadingComplete3 = () => {
    setLoading3(false);
  };

  return (
    <div className="bg-white">
      <div className="px-[30px] py-3 max-w-[1170px] mx-auto flex flex-row justify-between gap-4 lg:gap-x-16 relative lg:-top-4 lg:shadow-1 ">
        <div className="w-full h-28 md:h-60  rounded-3xl cursor-pointer overflow-hidden">
          <Link href="/">
            {/* {loading1 && <ImageSpinner />} */}
            <Image
              // onLoadingComplete={handleLoadingComplete1}
              src={Imagess.CspLogo}
              alt="csp image"
              width="0"
              height="0"
              quality={100}
              sizes="100vw"
              className="w-full h-full object-contain"
            />
          </Link>
        </div>
        <div className="w-full h-28 md:h-60  rounded-3xl cursor-pointer overflow-hidden">
          <Link href="https://museum.pau.edu.ng/" target="_blank">
            {/* {loading2 && <ImageSpinner />} */}
            <Image
              src={Imagess.YsmaLogo}
              alt="ysma image"
              width="0"
              height="0"
              quality={100}
              sizes="100vw"
              className="w-full h-full object-contain"
              // onLoadingComplete={handleLoadingComplete2}
            />
          </Link>
        </div>
        <div className="w-full h-28 md:h-60  rounded-3xl cursor-pointer overflow-hidden">
          <Link href="https://pau.edu.ng/" target="_blank">
            {/* {loading3 && <ImageSpinner />} */}
            <Image
              src={Imagess.PauLogo}
              alt="psu image"
              width="0"
              height="0"
              sizes="100vw"
              quality={100}
              className="w-full h-full object-contain"
              // onLoadingComplete={handleLoadingComplete3}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
