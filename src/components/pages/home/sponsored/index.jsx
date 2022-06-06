import React, { useEffect, useState } from "react";
import "./sponsored.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase";
import { Link } from "react-router-dom";
import Card from "../../../common/nftCard/index";
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

        setData(list);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterData = data.filter((item)=> item.approved === true)

  return (
    <div className="w-full sponsor-box">
      <h2 className="text-3xl font-bold">Sponsored</h2>

      {loading === true && (
        <ClipLoader color="white" loading={loading} size={50} />
      )}

      <div className="w-full flex gap-y-6 flex-wrap justify-between mt-10">
        {filterData?.map((item) => {
          console.log(item);
          return (
            <Link to={`/${item?.title}`} state={{ data: item }} key={item.id}>
              <Card data={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
