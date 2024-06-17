import React, { useEffect, useState } from "react";
import InputsForm from "../components/InputsForm";
import Title from "../components/Title";
import { fields, endpoint, columns } from "../constants/missionForm";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import { fetchItems, editItem, deleteItem, searchItems } from "../Utils/apiUtils";

const MissionsPage = () => {
  const [missions, setMissions] = useState([]);
  const [filteredMissions, setFilteredMissions] = useState([]);

  const handleSuccess = (data) => {
    window.confirm("New Mission Added");
    console.log("Mission added successfully:", data);
    fetchMissions();
  };

  const fetchMissions = () => {
    fetchItems(endpoint, setMissions, setFilteredMissions);
  };

  const handleEdit = (updatedRow) => {
    editItem(endpoint, updatedRow.MissionID, updatedRow, fetchMissions);
  };

  const handleDelete = (rowToDelete) => {
    deleteItem(endpoint, rowToDelete.MissionID, fetchMissions);
  };

  const handleSearch = (term) => {
    searchItems(missions, term, setFilteredMissions);
  };

  useEffect(() => {
    fetchMissions();
  }, []);

  return (
    <div className="container">
      <Title text={"Add New Mission"} />
      <InputsForm
        fields={fields}
        endpoint={endpoint}
        buttonText="Add Mission"
        onSuccess={handleSuccess}
      />
      <SearchBar onSearch={handleSearch} />
      <Table
        columns={columns}
        data={filteredMissions}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default MissionsPage;
