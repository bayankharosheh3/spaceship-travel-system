import React, { useEffect, useState } from "react";
import axios from "axios";
import InputsForm from "../components/InputsForm";
import Title from "../components/Title";
import { fields, endpoint, columns } from "../constants/spaceshipForm";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";

const SpaceshipsPage = () => {
  const [spaceships, setSpaceships] = useState([]);
  const [filteredSpaceships, setFilteredSpaceships] = useState([]);

  const handleSuccess = (data) => {
    window.confirm("New Member Added");
    console.log("Spaceship added successfully:", data);
    fetchSpaceships();
  };

  const fetchSpaceships = () => {
    axios
      .get(endpoint)
      .then((response) => {
        setSpaceships(response.data.data);
        setFilteredSpaceships(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching spaceship data:", error);
      });
  };

  const handleEdit = (updatedRow) => {
    axios
      .put(`${endpoint}/${updatedRow.SpaceshipID}`, updatedRow)
      .then(() => {
        fetchSpaceships();
      })
      .catch((error) => {
        console.error("Error updating spaceship data:", error);
      });
  };

  const handleDelete = (rowToDelete) => {
    axios
      .delete(`${endpoint}/${rowToDelete.SpaceshipID}`)
      .then(() => {
        fetchSpaceships();
      })
      .catch((error) => {
        console.error("Error deleting spaceShip data:", error);
      });
  };

  const handleSearch = (term) => {
    const filtered = spaceships.filter(
      (member) =>
        member.Name.toLowerCase().includes(term.toLowerCase()) ||
        member.Role.toLowerCase().includes(term.toLowerCase()) ||
        member.ExperienceLevel.toString().includes(term.toLowerCase()) ||
        member.AssignedSpaceshipID.toString().includes(term.toLowerCase())
    );
    setFilteredSpaceships(filtered);
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
