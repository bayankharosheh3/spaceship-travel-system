import React, { useEffect, useState } from "react";
import InputsForm from "../components/InputsForm";
import Title from "../components/Title";
import { fields, endpoint, columns } from "../constants/spaceshipForm";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import { fetchItems, editItem, deleteItem, searchItems } from "../Utils/apiUtils";

const SpaceshipsPage = () => {
  const [spaceships, setSpaceships] = useState([]);
  const [filteredSpaceships, setFilteredSpaceships] = useState([]);

  const handleSuccess = (data) => {
    window.confirm("New Spaceship Added");
    console.log("Spaceship added successfully:", data);
    fetchSpaceships();
  };

  const fetchSpaceships = () => {
    fetchItems(endpoint, setSpaceships, setFilteredSpaceships);
  };

  const handleEdit = (updatedRow) => {
    editItem(endpoint, updatedRow.SpaceshipID, updatedRow, fetchSpaceships);
  };

  const handleDelete = (rowToDelete) => {
    deleteItem(endpoint, rowToDelete.SpaceshipID, fetchSpaceships);
  };

  const handleSearch = (term) => {
    searchItems(spaceships, term, setFilteredSpaceships);
  };

  useEffect(() => {
    fetchSpaceships();
  }, []);

  return (
    <div className="container">
      <Title text={"Add New Spaceship"} />
      <InputsForm
        fields={fields}
        endpoint={endpoint}
        buttonText="Add Spaceship"
        onSuccess={handleSuccess}
      />
      <Title text={"Spaceship List"} />
      <SearchBar onSearch={handleSearch} />
      <Table
        columns={columns}
        data={filteredSpaceships}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default SpaceshipsPage;
