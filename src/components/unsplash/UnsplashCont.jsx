import React from "react";
import Image from "next/image";
import styles from "./unsplash.module.scss";

const UnsplashImg = ({ image }) => {
  return (
    <a
      href={`https://unsplash.com/photos/${image.id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={image.urls.regular}
        alt={image.alt_description}
        width={500}
        height={750}
        priority={true}
      />
    </a>
  );
};

const UnsplashCont = ({ images }) => {
  return (
    <div className={styles.unsplash__cont + " container"}>
      <ul className={styles.ul}>
        {images.map((image, index) => (
          <li key={index}>
            <UnsplashImg image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UnsplashCont;
