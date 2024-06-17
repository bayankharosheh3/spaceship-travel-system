import React, { useEffect, useState } from "react";
import axios from "axios";
import InputsForm from "../components/InputsForm";
import Title from "../components/Title";
import { fields, endpoint, columns } from "../constants/missionForm";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";

const MissionsPage = () => {
  const [missions, setMissions] = useState([]);
  const [filteredMissions, setFilteredMissions] = useState([]);

  const handleSuccess = (data) => {
    window.confirm("New Mission Added");
    console.log("Mission added successfully:", data);
    fetchMissions();
  };
  const fetchMissions = () => {
    axios
      .get(endpoint)
      .then((response) => {
        setMissions(response.data.data);
        console.log(response.data.data);
        setFilteredMissions(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching mission data:", error);
      });
  };

  const handleEdit = (updatedRow) => {
    axios
      .put(`${endpoint}/${updatedRow.MissionID}`, updatedRow)
      .then(() => {
        fetchMissions();
      })
      .catch((error) => {
        console.error("Error updating mission data:", error);
      });
  };

  const handleDelete = (rowToDelete) => {
    axios
      .delete(`${endpoint}/${rowToDelete.MissionID}`)
      .then(() => {
        fetchMissions();
      })
      .catch((error) => {
        console.error("Error deleting mission data:", error);
      });
  };

  const handleSearch = (term) => {
    const filtered = missions.filter(
      (member) =>
        member.Name.toLowerCase().includes(term.toLowerCase()) ||
        member.Role.toLowerCase().includes(term.toLowerCase()) ||
        member.ExperienceLevel.toString().includes(term.toLowerCase()) ||
        member.AssignedSpaceshipID.toString().includes(term.toLowerCase())
    );
    setFilteredMissions(filtered);
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
