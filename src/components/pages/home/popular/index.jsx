import React, { useEffect, useState } from "react";
import "./popular.css";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase";
import { Link } from "react-router-dom";
import CardTwo from "../../../common/nftCardTwo/index";
import ClipLoader from "react-spinners/ClipLoader";

const Index = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "nftLists"));
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        });
        setLoading(false);
        setData(list);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterData = data.filter((item)=> item.approved === true)

  return (
    <div className="flex justify-between flex-wrap popular-box gap-x-5 gap-y-3">
      <div className="popular-list-col">
        <h5 className="font-bold text-3xl mb-5">Newly Listed</h5>

        {loading === true && (
          <ClipLoader color="white" loading={loading} size={50} />
        )}

        {filterData?.slice(0, filterData.length < 10 ? filterData.length : 10).map((item) => {
          return (
            <Link to={`/${item?.title}`} state={{ data: item }} key={item.id}>
              <CardTwo data={item} />
            </Link>
          );
        })}

        {!loading || filterData.length < 10 ? (
          ""
        ) : (
          <button className="pop-list-btn">More NFT's</button>
        )}
      </div>
      <div className="popular-list-col">
        <h5 className="font-bold text-3xl mb-5">Defi</h5>
        {loading === true && (
          <ClipLoader color="white" loading={loading} size={50} />
        )}

        {filterData?.slice(0, filterData.length < 10 ? filterData.length : 10).map((item) => {
          return (
            <Link to={`/${item?.title}`} state={{ data: item }} key={item.id}>
              <CardTwo data={item} />
            </Link>
          );
        })}

        {!loading || filterData.length < 10 ? (
          ""
        ) : (
          <button className="pop-list-btn">More NFT's</button>
        )}
      </div>
      <div className="popular-list-col">
        <h5 className="font-bold text-3xl mb-5">Gamefi</h5>
        {loading === true && (
          <ClipLoader color="white" loading={loading} size={50} />
        )}

        {filterData?.slice(0, filterData.length < 10 ? filterData.length : 10).map((item) => {
          return (
            <Link to={`/${item?.title}`} state={{ data: item }} key={item.id}>
              <CardTwo data={item} />
            </Link>
          );
        })}
        {!loading || filterData.length < 10 ? (
          ""
        ) : (
          <button className="pop-list-btn">More NFT's</button>
        )}
      </div>
    </div>
  );
};

export default Index;
