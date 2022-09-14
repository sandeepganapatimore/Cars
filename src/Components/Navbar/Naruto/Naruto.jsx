import React from "react";
import styles from "./Naruto.module.css";
import { AiOutlineSearch } from "react-icons/ai";
const Naruto = () => {
  return (
    <div className={styles.naruto}>
      <form>
        <div className={styles.text}>
          <label>Where</label>
          <input
            className={styles.input_text}
            type="text"
            placeholder="Search Location"
          />
        </div>
        <div className={styles.from}>
          <span className={styles.border}></span>
          <label>From</label>
          <br />
          <input type="date" />
        </div>
        <div className={styles.until}>
          <span className={styles.border}></span>
          <label>Until</label>
          <input type="date" />
        </div>
        <div className={styles.search_btn}>
          <AiOutlineSearch className={styles.icon} />
          <button className={styles.btn}>search for car</button>
        </div>
      </form>
    </div>
  );
};
export default Naruto;
