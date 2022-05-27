import React from "react";
import "./cardTwo.css";

import nftImg from "../../assets/snft.webp";

import { BsGlobe } from "react-icons/bs";
import { BiCoin } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io";
import { FaEthereum } from "react-icons/fa";

const Index = () => {
  return (
    <div className="card-Two-box flex px-4 py-3">
      <div className="w-2/5">
        <img
          className="w-full h-auto card-img1"
          src={nftImg}
          alt="nft assets"
        />

        <div className="flex flex-col justify-center items-center card-body-two">
          <div className="flex items-center ml-1 md:ml-9">
            <div className="flex items-center ttt w-full gap-x-4">
              <div className="number-details flex items-center grid-x-4">
                <IoLogoTwitter /> <span className="ml-2">235.4k</span>
              </div>

              <div className="number-details2">
                <BiCoin />
              </div>
              <div className="number-details2">
                <BsGlobe />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-btn-box flex flex-col gap-x-5 mt-4">
        <div className="dateBoxTwo flex">
          <div className="px-2  dateTagTwo1">Start</div>
          <div className="px-2  dateTagTwo2">in 19 hours</div>
        </div>

        <h3 className="mt-3 text-base font-bold">Blvck Paris</h3>

        <div className="card-two-btn-one mt-5">
          Supply: 9999
        </div>
        <button className="card-two-btn-two py-3 px-5 mt-1 flex items-center">
          <span className="mr-1">
            <FaEthereum />
          </span>
          TBA
        </button>
      </div>
    </div>
  );
};

export default Index;
