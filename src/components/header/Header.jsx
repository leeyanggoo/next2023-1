import Link from "next/link";
import React from "react";
import styles from "./header.module.css";

const links = [
  {
    id: 1,
    title: "소개",
    url: "/intro",
  },
  {
    id: 2,
    title: "맴버",
    url: "/member",
  },
  {
    id: 3,
    title: "포트폴리오",
    url: "/port",
  },
  {
    id: 4,
    title: "유튜브",
    url: "/youtube",
  },
  {
    id: 5,
    title: "영화",
    url: "/movie",
  },
  {
    id: 6,
    title: "언스플래쉬",
    url: "/unsplash",
  },
];

const Header = () => {
  return (
    <header id="header" className="header__wrap bg-blue NanumM'" aria-level="1">
      <div className="header__inner container">
        <h1 className="header__logo Chosun">
          <Link href="/">
            詩요일 <em>세상의 모든 시</em>
          </Link>
        </h1>
        <nav className="header__nav" role="navigation">
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
            {/* <li>
              <Link href="/member">웹진 소개</Link>
            </li>
            <li>
              <Link href="/port">오늘의 시</Link>
            </li>
            <li>
              <Link href="/unsplash">연재</Link>
            </li>
            <li>
              <Link href="/movie">출간</Link>
            </li>
            <li>
              <Link href="/youtube">정기구독</Link>
            </li>
            <li>
              <Link href="/intro">문의</Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
