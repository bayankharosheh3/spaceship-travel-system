export const fields = [
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
    type: "select",
    name: "ExperienceLevel",
    options: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    id: "assignedSpaceshipID",
    label: "Assigned Spaceship ID",
    type: "number",
    name: "AssignedSpaceshipID",
    placeholder: "Enter Assigned Spaceship ID",
  },
];

export const endpoint = "http://localhost:5000/api/crewmembers";

export const columns = [
  {
    name: "CrewMemberID",
    type: "text",
    placeholder: "Crew Member ID",
  },
  { name: "Name", type: "text", placeholder: "Enter Name" },
  { name: "Role", type: "text", placeholder: "Enter Role" },
  {
    name: "ExperienceLevel",
    type: "select",
    options: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    name: "AssignedSpaceshipID",
    type: "number",
    placeholder: "Enter Assigned Spaceship ID",
  },
];
