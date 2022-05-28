import React, { useEffect, useState } from "react";
import "./popular.css";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase";
import { Link } from "react-router-dom";
import CardTwo from "../../../common/nftCardTwo/index";

const Index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "nftLists"));
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
          console.log(doc.id, " => ", doc.data());
        });

        setData(list);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-between flex-wrap popular-box gap-x-5 gap-y-3">
      <div className="popular-list-col">
        <h5 className="font-bold text-3xl mb-5">Newly Listed</h5>
        {data?.map((item) => {
          return (
            <Link to={`/${item?.title}`} state={{ data: item }}>
              <CardTwo data={item} />;
            </Link>
          );
        })}

        <button className="pop-list-btn">More NFT's</button>
      </div>
      <div className="popular-list-col">
        <h5 className="font-bold text-3xl mb-5">Defi</h5>
        {data?.map((item) => {
          return (
            <Link to={`/${item?.title}`} state={{ data: item }}>
              <CardTwo data={item}  />;
            </Link>
          );
        })}

        <button className="pop-list-btn">More NFT's</button>
      </div>
      <div className="popular-list-col">
        <h5 className="font-bold text-3xl mb-5">Gamefi</h5>
        {data?.map((item) => {
          return (
            <Link to={`/${item?.title}`} state={{ data: item }}>
              <CardTwo data={item}  />;
            </Link>
          );
        })}
        <button className="pop-list-btn">More NFT's</button>
      </div>
    </div>
  );
};

export default Index;
