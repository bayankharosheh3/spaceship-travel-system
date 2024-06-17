import React, { useState } from "react";
import styles from "./styles.module.css";
import Button from "../Button";
import InputField from "../InputField";
import { useFormik } from "formik";
import axios from "axios";

const InputsForm = ({ fields, endpoint, buttonText, onSuccess }) => {
  const [error, setError] = useState(false);

  const initialValues = {};
  fields.forEach((field) => {
    initialValues[field.name] = "";
  });

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(endpoint, values);
        console.log(values,response.status);
        if (response.status === 201) {
          onSuccess(response.data);
        }
      } catch (err) {
        setError(true);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} noValidate className={styles.form}>
      {fields.map((field) => (
        <InputField
          key={field.id}
          label={field.label}
          id={field.id}
          type={field.type}
          name={field.name}
          onChange={formik.handleChange}
          value={formik.values[field.name]}
          placeholder={field.placeholder}
          options={field.options} 
        />
      ))}
      {error && <span className={styles.error}>{error}</span>}
      <div className={styles.btnContainer}>
        <Button type="submit" text={buttonText} />
      </div>
    </form>
  );
};

export default InputsForm;
