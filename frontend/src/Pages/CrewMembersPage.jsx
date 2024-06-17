import React, { useEffect, useState } from "react";
import axios from "axios";
import InputsForm from "../components/InputsForm";
import Title from "../components/Title";
import Table from "../components/Table";
import SearchBar from "../components/SearchBar";
import { fields, endpoint, columns } from "../constants/crewMemberForm";

const CrewMembersPage = () => {
  const [crewMembers, setCrewMembers] = useState([]);
  const [filteredCrewMembers, setFilteredCrewMembers] = useState([]);

  const handleSuccess = (data) => {
    console.log("Crew member added successfully:", data);
    fetchCrewMembers();
  };

  const fetchCrewMembers = () => {
    axios
      .get(endpoint)
      .then((response) => {
        setCrewMembers(response.data.data);
        setFilteredCrewMembers(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching crew members data:", error);
      });
  };

  const handleEdit = (updatedRow) => {
    axios
      .put(`${endpoint}/${updatedRow.CrewMemberID}`, updatedRow)
      .then(() => {
        fetchCrewMembers();
      })
      .catch((error) => {
        console.error("Error updating crew member data:", error);
      });
  };

  const handleDelete = (rowToDelete) => {
    axios
      .delete(`${endpoint}/${rowToDelete.CrewMemberID}`)
      .then(() => {
        fetchCrewMembers();
      })
      .catch((error) => {
        console.error("Error deleting crew member data:", error);
      });
  };

  const handleSearch = (term) => {
    const filtered = crewMembers.filter(
      (member) =>
        member.Name.toLowerCase().includes(term.toLowerCase()) ||
        member.Role.toLowerCase().includes(term.toLowerCase()) ||
        member.ExperienceLevel.toString().includes(term.toLowerCase()) ||
        member.AssignedSpaceshipID.toString().includes(term.toLowerCase())
    );
    setFilteredCrewMembers(filtered);
  };

  useEffect(() => {
    fetchCrewMembers();
  }, []);

  return (
    <div className={"container"}>
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
