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
  options,
}) => {
  return (
    <div className={styles.inputContainer}>
      {label && (
        <label className={styles.inputLabel} htmlFor={id}>
          {label}
        </label>
      )}
      {type === "select" ? (
        <select
          className={styles.input}
          id={id}
          name={name}
          onChange={onChange}
          value={value}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          className={styles.input}
          id={id}
          type={type}
          name={name}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default InputField;
