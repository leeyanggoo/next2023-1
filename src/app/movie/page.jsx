"use client";
import React, { useEffect, useState } from "react";
import ContTitle from "../../components/title/ContTitle";
import MovieCont from "../../components/movie/MovieCont";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=35deb8704c2372673b61a5e807e3688e&language=ko-KR&query=SEARCH_QUERY&page=1&limit=30"
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setMovies(data.results);
    };
    getData();
  }, []);

  return (
    <>
      <ContTitle title="movie" />
      <MovieCont movies={movies} />
    </>
  );
};
export default Movie;
