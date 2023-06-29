import React from "react";
import Image from "next/image";
import styles from "./movie.module.scss";

const MovieItem = ({ movie }) => {
  return (
    <li>
      <a
        href={`https://www.themoviedb.org/movie/${movie.id}?language=ko`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          width={500}
          height={750}
        />
      </a>
      <em>
        <span className={styles.title}>{movie.title}</span>
        <span className={styles.star}>{movie.vote_average.toFixed(1)}</span>
      </em>
    </li>
  );
};

export default MovieItem;
