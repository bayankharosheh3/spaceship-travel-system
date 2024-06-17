export const fields = [
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

export const endpoint = "http://localhost:5000/api/spaceships";

export const columns = [
  "SpaceshipID",
  "Name",
  "Capacity",
  "LaunchDate",
  "Status",
];
