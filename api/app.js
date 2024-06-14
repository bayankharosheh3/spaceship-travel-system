const express = require("express");
const config = require("./config/config");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
