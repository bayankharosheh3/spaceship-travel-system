import React from "react";
import InputsForm from "../components/InputsForm";
import Title from "../components/Title";

const AddSpaceshipForm = () => {
  const fields = [
    {
      id: "name",
      label: "Name",
      type: "text",
      name: "Name",
      placeholder: "Enter Spaceship Name",
    },
    {
      id: "capacity",
      label: "Capacity",
      type: "number",
      name: "Capacity",
      placeholder: "Enter Capacity",
    },
    {
      id: "launchDate",
      label: "Launch Date",
      type: "date",
      name: "LaunchDate",
      placeholder: "Select Launch Date",
    },
    {
      id: "status",
      label: "Status",
      type: "text",
      name: "Status",
      placeholder: "Enter Status",
    },
  ];

  const endpoint = "http://localhost:5000/api/spaceships";

  const handleSuccess = (data) => {
    console.log("Spaceship added successfully:", data);
  };

  return (
    <div className="container">
      <Title text={"Add New Spaceship"} />
      <InputsForm
        fields={fields}
        endpoint={endpoint}
        buttonText="Add Spaceship"
        onSuccess={handleSuccess}
      />
    </div>
  );
};

export default AddSpaceshipForm;
