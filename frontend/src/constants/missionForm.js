export const fields = [
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

export const endpoint = "http://localhost:5000/api/missions";

export const columns = [
  "MissionID",
  "SpaceshipID",
  "Destination",
  "LaunchDate",
  "Duration",
];
