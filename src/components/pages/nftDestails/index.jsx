import React from "react";
import "./details.css";

import NavBar from "../../common/navbar/index";
import Footer from "../../common/footer/index";
import Card from "../../common/nftCard/index";
import nftImg from "../../assets/wacky.gif";
import { IoLogoTwitter } from "react-icons/io";
import { MdVerifiedUser } from "react-icons/md";
import { SiDiscord } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { CgArrowBottomRightR } from "react-icons/cg";
import { useLocation } from "react-router-dom"

const Index = () => {

  const location = useLocation()

  const { data } = location.state

  console.log(data)

  return (
    <>
      <NavBar />
      <div className="detailsBox">
        <div className="flex-col md:w-2/3 w-full flex px-4 py-3 d-card">
          <div className="w-full">
            <h3 className="mt-3 text-4xl font-bold">{data?.title || ''}</h3>
            <img className="w-full h-auto mt-5" src={ data?.photo || nftImg} alt="nft assets" />
          </div>

          <div className="card-btn-box flex flex-col gap-x-5 mt-4">
            <div className="">
              <p className=" flex items-center">
                <MdVerifiedUser />{" "}
                <span className="text-base ml-2">{!data?.approved ? 'Unverified' : 'Verified' || ''}</span>
              </p>

              <p className="mt-4 text-xl">May 02, 2022 – May 09, 2022</p>

              <div className="flex flex-wrap gap-y-3 mt-6 gap-x-5">
                <div className="tag-box flex justify-center items-center gap-x-2">
                  <IoLogoTwitter />
                  <p>Twitter</p>
                </div>

                <div className="tag-box flex justify-center items-center gap-x-2">
                  <SiDiscord />
                  <p>Discord</p>
                </div>

                <div className="tag-box flex justify-center items-center gap-x-2">
                  <BsGlobe />
                  <p>Website</p>
                </div>

                <div className="tag-box flex justify-center items-center gap-x-2">
                  <CgArrowBottomRightR />
                  <p>Source</p>
                </div>
              </div>
            </div>

            <div className=" mt-7">
              <p className="font-bold">Blockchain:</p>
              <div className="tag-box2 flex justify-center items-center gap-x-2 mt-2">
                <p>{data?.network_id}</p>
              </div>
            </div>

            <div className="text-d-box mt-9 w-full">
              <p className="leading-7">
                {data?.description}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mt-10">
          <h2 className="text-3xl font-bold">See Also</h2>
          <div className="w-full flex gap-y-6 flex-wrap justify-between mt-5">
            {[...Array(4)].map(() => {
              return <Card />;
            })}
          </div>
        </div>
      </div>
      <div className="d-footer">
        <Footer />
      </div>
    </>
  );
};

export default Index;
