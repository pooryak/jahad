import React from "react";
import style from "./style.module.less";
import logo from "../../assets/webmd_logo.svg";
import Link from "next/link";

const Home = () => {
  return (
    <React.Fragment>
      <div className={style.header}>
        <Link href="/about">
          <a>فروشگاه</a>
        </Link>
        <Link href="/about">
          <a>فروشگاه</a>
        </Link>
        <Link href="/about">
          <a>فروشگاه</a>
        </Link>
      </div>
      <nav className={style.nav}>
        <div className={style.header_nav}>
          <div className={style.header_nav_logo}>
            <img src={logo} />
          </div>
          <div className={style.header_nav_links}>
            <Link href="/about">
              <a>فروشگاه</a>
            </Link>
            <Link href="/about">
              <a>فروشگاه</a>
            </Link>
            <Link href="/about">
              <a>فروشگاه</a>
            </Link>
            <Link href="/about">
              <a>فروشگاه</a>
            </Link>
          </div>
        </div>
        <div className={style.header_search_container}>
            <input />
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Home;
