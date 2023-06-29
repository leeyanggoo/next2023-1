"use client";
import React, { useEffect, useState } from "react";
import ContTitle from "../../components/title/ContTitle";
import UnsplashCont from "../../components/unsplash/UnsplashCont";

const Unsplash = () => {
  const [images, setimages] = useState([]);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const getData = async () => {
      const res = await fetch(
        "https://api.unsplash.com/photos?client_id=jH0imhhs5rWunB3C4xoZHkzW4cuMAi0DT3c3uBNHn54&per_page=30",
        requestOptions
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setimages(data);
    };
    getData();
  }, []);

  return (
    <>
      <ContTitle title="unsplash" />
      <UnsplashCont images={images} />
    </>
  );
};

export default Unsplash;
