import React, { useState, useRef, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.jpeg";

import { BiMenu } from "react-icons/bi";

const Index = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  const menuRef = useRef();

  useEffect(() => {
    if (openMenu === false) {
      menuRef.current.style.display = "none";
    } else {
      menuRef.current.style.display = "block";
      menuRef.current.style.height = "80vh";
      menuRef.current.style.display = "flex";
    }
  }, [openMenu]);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="flex justify-between w-full items-center  navbar-container">
      <img src={logo} alt="brand logo" className="nav-logo" />

      {location.pathname === "/" && (
        <input
          className="search-input hidden lg:block"
          placeholder="Enter your search"
        />
      )}

      <div className="flex items-center gap-6 nav-list hidden md:flex">
        <Link to="/">
          <p>Home</p>
        </Link>

        <Link to="/reports">
          <p>Report</p>
        </Link>

        <Link to="/list-nft">
          <p>List NFT</p>
        </Link>

        <p>About</p>

        <p>FAQ</p>
      </div>

      {
        <div
          ref={menuRef}
          className="flex items-center flex-col justify-center gap-6 fixed md:hidden mobile-nav"
        >
          <Link to="/">
            <p className="font-bold m-link">Home</p>
          </Link>

          <Link to="/reports">
            <p className="font-bold m-link">Report</p>
          </Link>

          <Link to="/list-nft">
            <p className="font-bold m-link">List NFT</p>
          </Link>

          <p className="font-bold m-link">About</p>

          <p className="font-bold m-link">FAQ</p>

          <input
            className="mobile-search-input"
            placeholder="Enter your search"
          />
        </div>
      }

      <div className="md:hidden" onClick={handleOpenMenu}>
        <BiMenu size={40} />
      </div>
    </div>
  );
};

export default Index;
