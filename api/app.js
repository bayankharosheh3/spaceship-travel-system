const express = require("express");
const config = require("./config/config");
const { spaceshipRoutes } = require("./routes");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", spaceshipRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
