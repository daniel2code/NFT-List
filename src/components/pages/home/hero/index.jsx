import React from "react";

import "./hero.css";

const Index = () => {
  return (
    <div className="hero-container flex items-center justify-center flex-col">
      <p className="text-base text-center font-bold md:text-3xl text-2xl">Neargenics</p>
      <h2 className="md:text-4xl text-3xl font-bold mt-8 md:mt-5 text-center">
        Creator launchpad to drop your nft collections onto the near blockchain
      </h2>

      <button className="hero-btn mt-8 md:mt-6">Explore NFT's</button>

      <div className="banner w-4/5 flex justify-center items-center">
        <h2 className="md:text-4xl text-2xl text-center font-bold ">
          Promote Your NFT Here!
        </h2>
      </div>
    </div>
  );
};

export default Index;
