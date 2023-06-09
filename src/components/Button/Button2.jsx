import Script from "next/script";
import React from "react";
import styles from "./Button.module.css";

const Button2 = () => {
  return (
    <div>
      <div className={styles.hyper}>
        <h4 className={styles.h4} data-value="DISCOVER">
          DISCOVER
        </h4>
        <span className={styles.top}></span>
        <span className={styles.right}></span>
        <span className={styles.bottom}></span>
        <span className={styles.left}></span>
      </div>

      <Script src="js/hyperplexed.js"></Script>
    </div>
  );
};

export default Button2;
