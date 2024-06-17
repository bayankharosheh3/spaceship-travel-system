import React from "react";
import InputsForm from "../components/InputsForm";
import Title from "../components/Title";

const AddMissionForm = () => {
  const fields = [
    {
      id: "spaceshipID",
      label: "Spaceship ID",
      type: "number",
      name: "SpaceshipID",
      placeholder: "Enter Spaceship ID",
    },
    {
      id: "destination",
      label: "Destination",
      type: "select",
      name: "Destination",
      options: ["Jupiter", "Mars", "Moon"],
    },
    {
      id: "launchDate",
      label: "Launch Date",
      type: "date",
      name: "LaunchDate",
      placeholder: "Select Launch Date",
    },
    {
      id: "duration",
      label: "Duration",
      type: "number",
      name: "Duration",
      placeholder: "Enter Duration",
    },
  ];

  const endpoint = "http://localhost:5000/api/missions";

  const handleSuccess = (data) => {
    console.log("Mission added successfully:", data);
  };

  return (
    <div className="container">
      <Title text={"Add New Mission"} />
      <InputsForm
        fields={fields}
        endpoint={endpoint}
        buttonText="Add Mission"
        onSuccess={handleSuccess}
      />
    </div>
  );
};

export default AddMissionForm;
