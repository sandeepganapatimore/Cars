import React, { useState } from "react";
import styles from "./Navbar.module.css";
import download from "../../Images/download.png";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className={styles.navbar}>
      <img
        id="image"
        src={download}
        alt="/"
        height="90px"
        width="120px"
        style={{ borderRadius: "50%", marginTop: "-1rem" }}
      />
      <nav>
        {/* <ul className={ nav?[styles.menu,styles.active].join(' '):[styles.menu]}> */}
        <ul
          className={nav ? [styles.menu, styles.active].join(" ") : styles.menu}
        >
          <li>
            <a href="/">Learn More</a>
          </li>
          <li>
            <a href="/">Log in</a>
          </li>
          <li>
            <a href="/">Sign Up</a>
          </li>
          <li>
            <AiOutlineSearch size={18} style={{ marginTop: "5.8px" }} />
          </li>
          <li>
            <AiOutlineUser size={18} style={{ marginTop: "5.8px" }} />
          </li>
        </ul>
      </nav>
      <div onClick={() => setNav((nav) => !nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>
    </header>
  );
};
