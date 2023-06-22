import {Imagess} from '@/constants/imagess';
import React from 'react'
import Image from 'next/image';

const Sponsors = () => {
  return (
    <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-row justify-between gap-4 lg:gap-x-16 relative lg:-top-4 lg:shadow-1 lg:bg-transparent lg:backdrop-blur ">
      <div>
        <Image
          src={Imagess.CspLogo}
          alt="csp image"
          width="0"
          height="0"
          quality={100}
          sizes="100vw"
          className="w-full h-full object-contain"
        />
      </div>
      <div>
        <Image
          src={Imagess.YsmaLogo}
          alt="ysma image"
          width="0"
          height="0"
          quality={100}
          sizes="100vw"
          className="w-full h-full object-contain"
        />
      </div>
      <div>
        <Image
          src={Imagess.PauLogo}
          alt="psu image"
          width="0"
          height="0"
          sizes="100vw"
          quality={100}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default Sponsors