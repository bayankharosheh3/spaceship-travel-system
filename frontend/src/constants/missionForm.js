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

export const columns = [
  { name: "MissionID", type: "text", placeholder: "Mission ID" },
  { name: "SpaceshipID", type: "number", placeholder: "Spaceship ID" },
  { name: "Destination", type: "select", options: ["Jupiter", "Mars", "Moon"] },
  { name: "LaunchDate", type: "date", placeholder: "Launch Date" },
  { name: "Duration", type: "number", placeholder: "Duration" },
];

export const endpoint = "http://localhost:5000/api/missions";
