import { MirrowIcon } from "@/Icons/MirrowIcon";
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col max-w-[1240px] px-4 py-1 mx-auto justify-between sm:flex-row text-center  border-t ">
        <a href="https://linktr.ee/francisojeah" target="_blank">
          <p className="py-3 flex justify-center font-semibold">
            <span className="mr-1">&#169;</span>
            <span className="flex mr-1">Mirrow</span>{" "}
            <span className="mr-3">
              <MirrowIcon />
            </span>
            <span className="">2023</span>
          </p>
        </a>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/francis-okocha-ojeah/"
            target="_blank"
          >
            <FaLinkedin color="#0A66C2" />
          </a>
          <a href="https://github.com/francisojeah" target="_blank">
            <FaGithub color="#24292E" />
          </a>

          <a href="https://twitter.com/FrancisOjeah" target="_blank">
            <FaTwitter color="#1DA1F2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
