import React, { useState } from "react";
import Button from "../Button";
import InputField from "../InputField";
import styles from "./styles.module.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.searchContainer}>
      <InputField
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress} 
        placeholder="Search..."
      />
      <Button type="button" text="Search" onClick={handleSearch} />
    </div>
  );
};

export default SearchBar;
