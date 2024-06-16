import React from "react";
import styles from "./styles.module.css";

const InputField = ({
  label,
  id,
  type,
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <>
      {label && (
        <label className={styles.inputLabel} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={styles.input}
        id={id}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

export default InputField;
