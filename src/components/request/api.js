import axios from "axios";
import { useState } from "react";

const axiosConfig = axios.create({
  baseURL: "https://nft.urbandesignsco.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const useGetRequest = () => {
  const [data, setData] = useState(null);
  const getRequest = (url) => {
    axiosConfig({
      url: url,
      method: "GET",
    })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { getRequest, data };
};

export const usePostRequest = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const postRequest = (url, data) => {
    setLoading(true);

    axiosConfig({
      url: url,
      method: "POST",
      data,
    })
      .then((res) => {
        console.log(res.data);
        // console.log(Object.values(res?.data?.message))
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return {
    data,
    postRequest,
    loading,
  };
};
