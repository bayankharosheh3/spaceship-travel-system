import React, { useEffect, useState } from "react";
import InputsForm from "../components/InputsForm";
import Title from "../components/Title";
import { fields, endpoint, columns } from "../constants/crewMemberForm";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import { fetchItems, editItem, deleteItem, searchItems } from "../Utils/apiUtils";

const CrewMembersPage = () => {
  const [crewMembers, setCrewMembers] = useState([]);
  const [filteredCrewMembers, setFilteredCrewMembers] = useState([]);

  const handleSuccess = (data) => {
    window.confirm("New Crew Member Added");
    console.log("Crew member added successfully:", data);
    fetchCrewMembers();
  };

  const fetchCrewMembers = () => {
    fetchItems(endpoint, setCrewMembers, setFilteredCrewMembers);
  };

  const handleEdit = (updatedRow) => {
    editItem(endpoint, updatedRow.CrewMemberID, updatedRow, fetchCrewMembers);
  };

  const handleDelete = (rowToDelete) => {
    deleteItem(endpoint, rowToDelete.CrewMemberID, fetchCrewMembers);
  };

  const handleSearch = (term) => {
    searchItems(crewMembers, term, setFilteredCrewMembers);
  };

  useEffect(() => {
    fetchCrewMembers();
  }, []);

  return (
    <div className="container">
      <Title text={"Add New Crew Member"} />
      <InputsForm
        fields={fields}
        endpoint={endpoint}
        buttonText="Add Crew Member"
        onSuccess={handleSuccess}
      />
      <Title text={"Crew Members List"} />
      <SearchBar onSearch={handleSearch} />
      <Table
        columns={columns}
        data={filteredCrewMembers}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default CrewMembersPage;
