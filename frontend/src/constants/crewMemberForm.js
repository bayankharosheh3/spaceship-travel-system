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
  "CrewMemberID",
  "Name",
  "Role",
  "ExperienceLevel",
  "AssignedSpaceshipID",
];
