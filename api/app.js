const express = require("express");
const config = require("./config/config");
const cors = require('cors');

const {
  spaceshipRoutes,
  missionRoutes,
  crewMemberRoutes,
} = require("./routes");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", spaceshipRoutes);
app.use("/api", missionRoutes);
app.use("/api", crewMemberRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(5000, () => {
  console.log(`Server is running on port ${config.port}`);
});
