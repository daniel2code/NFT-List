import React from "react";

import "./card.css";
import nftImg from "../../assets/snft.webp";
import { Link } from "react-router-dom";
import { BsGlobe } from "react-icons/bs";
import { BiCoin } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io";
import { FaEthereum } from "react-icons/fa";

const Index = () => {
  return (
    <div className="card-one-box px-4 pt-4">
      <img className="w-full h-auto card-img1" src={nftImg} alt="nft assets" />

      <div className="dateBox flex">
        <div className="px-1 py-1 dateTag1">Start</div>
        <div className="px-1 py-1 dateTag2">in 19 hours</div>
      </div>

      <div className="flex flex-col justify-center items-center card-body1">
        <div className="flex items-center">
          <div className="flex items-center w-full gap-x-4">
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

        <h3 className="mt-4 text-lg font-bold">
          <Link to="/nft-details" style={{textDecoration: "none"}}>Blvck Paris</Link>
        </h3>

        <div className="card-btn-box flex gap-x-5 mt-4">
          <button className="card-btn-one py-2 px-5 font-large">
            Supply: 9999
          </button>
          <button className="card-btn-two py-2 px-5 flex items-center">
            <span className="mr-1">
              <FaEthereum />
            </span>
            TBA
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
