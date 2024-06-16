import React from "react";
import InputsForm from "../components/InputsForm";
import Title from "../components/Title";

const AddCrewMemberForm = () => {
  const fields = [
    {
      id: "name",
      label: "Name",
      type: "text",
      name: "Name",
      placeholder: "Enter Crew Member Name",
    },
    {
      id: "role",
      label: "Role",
      type: "text",
      name: "Role",
      placeholder: "Enter Role",
    },
    {
      id: "experienceLevel",
      label: "Experience Level",
      type: "number",
      name: "ExperienceLevel",
      placeholder: "Enter Experience Level",
    },
    {
      id: "assignedSpaceshipID",
      label: "Assigned Spaceship ID",
      type: "number",
      name: "AssignedSpaceshipID",
      placeholder: "Enter Assigned Spaceship ID",
    },
  ];

  const endpoint = "http://localhost:5000/api/crewmembers";

  const handleSuccess = (data) => {
    console.log("Crew member added successfully:", data);
  };

  return (
    <div className="container">
      <Title text={"Add New Crew Member"} />
      <InputsForm
        fields={fields}
        endpoint={endpoint}
        buttonText="Add Crew Member"
        onSuccess={handleSuccess}
      />
    </div>
  );
};

export default AddCrewMemberForm;
