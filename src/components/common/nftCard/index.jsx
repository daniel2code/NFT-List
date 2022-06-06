import React from "react";

import "./card.css";
import nftImg from "../../assets/nft2.jpeg";
import { Link } from "react-router-dom";
import { BsGlobe } from "react-icons/bs";
import { BiCoin, BiCoinStack } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io";
// import { FaEthereum } from "react-icons/fa";

const Index = ({ data }) => {

  return (
    <div className="card-one-box px-4 pt-4">
      {/* Use the video tag if nft image was posted in mp4 format */}
      {/* {data?.photo.includes("mp4") ? (
        <video autoPlay>
          <source src={data?.photo} type="video/mp4" />
        </video>
      ) : ( */}
      <img
        className="w-full h-auto card-img1"
        src={data?.photo || nftImg}
        alt="nft assets"
      />
      {/* )} */}

      {/* <div className="dateBox flex">
        <div className="px-1 py-1 dateTag1">Start</div>
        <div className="px-1 py-1 dateTag2">in 19 hours</div>
      </div> */}

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
          <Link to="/nft-details" style={{ textDecoration: "none" }}>
            {data?.title}
          </Link>
        </h3>

        <div className="card-btn-box flex gap-x-5 mt-4">
          <button className="card-btn-one py-2 px-5 font-large">
            {data?.supply}
          </button>
          <button className="card-btn-two py-2 px-5 flex items-center">
            <span className="mr-1">
              <BiCoinStack />
            </span>
            TBA
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
