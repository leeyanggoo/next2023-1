import Slider from "@/components/slider/Slider";
import React from "react";
import Portfolio from "@/components/portfolio/Portfolio";
import Movie from "@/components/movie/Movie";
import Intro from "@/components/intro/Intro";
import Member from "@/components/member/Member";
import Youtube from "@/components/youtube/Youtube";
import Unsplash from "@/components/unsplash/Unsplash";

const Home = () => {
  return (
    <>
      <Slider />
      <Intro />
      <Member />
      <Portfolio />
      <Youtube />
      <Unsplash />
      <Movie />
    </>
  );
};

export default Home;
