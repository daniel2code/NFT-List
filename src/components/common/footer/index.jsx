import React from "react";
import "./footer.css";

import logo from "../../assets/logo.png";

const Index = () => {
  return (
    <div className="flex flex-wrap items-start gap-x-9 footer-box">
      <div className="md:w-2/12 w-full">
        <img src={logo} alt="brand logo" className="nav-logo" />
      </div>

      <div className="md:w-2/12 w-full mt-7 md:mt-1">
        <h2 className="footer-title text-lg font-bold">NFT DROPS</h2>

        <ul className="mt-4 footer-list">
          <li>Upcoming NFT</li>
          <li>Minting NFT</li>
          <li>TBA NFT</li>
          <li>Ended NFT</li>
        </ul>
      </div>

      {/* <div className="md:w-2/12 w-full mt-7 md:mt-1">
        <h2 className="footer-title text-lg font-bold">BLOCKCHAIN</h2>

        <ul className="mt-4 footer-list">
          <li>Ethereum NFT</li>
          <li>Solana NFT</li>
          <li>Matic NFT</li>
          <li>BNB NFT</li>
          <li>Cardano NFT</li>
        </ul>
      </div> */}

      <div className="md:w-2/12 w-full mt-7 md:mt-1">
        <h2 className="footer-title text-lg font-bold">Community</h2>

        <ul className="mt-4 footer-list">
          <li>About Us</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="md:w-2/12 w-full mt-7 md:mt-1">
        <h2 className="footer-title text-lg font-bold">NFT LIST</h2>

        <ul className="mt-4 footer-list">
          <li>Most popular NFT</li>
          <li>NFT Sales</li>
          <li>Digital Assets</li>
          <li>NFT List New</li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
