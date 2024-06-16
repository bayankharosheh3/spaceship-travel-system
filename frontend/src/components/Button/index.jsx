import React from "react";
import styles from "./styles.module.css";

const Button = ({ type, text, onClick }) => {
  return (
    <button type={type} className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
