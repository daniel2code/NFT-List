import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/index";
import Report from "../pages/reports/index";
import ListNFT from "../pages/nftList/index";
import NFTDetails from "../pages/nftDestails/index"

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reports" element={<Report />} />
      <Route path="/list-nft" element={<ListNFT />} />
      <Route path="/:name" element={<NFTDetails />} />
    </Routes>
  );
};

export default Index;
