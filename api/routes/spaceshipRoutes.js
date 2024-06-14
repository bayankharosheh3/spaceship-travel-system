const express = require("express");

const {
  createSpaceship,
  getSpaceships,
  getSpaceshipById,
  updateSpaceship,
  partiallyUpdateSpaceship,
  deleteSpaceship,
} = require("../controllers/spaceshipController");

const router = express.Router();

router.post("/spaceships", createSpaceship);
router.get("/spaceships", getSpaceships);
router.get("/spaceships/:id", getSpaceshipById);
router.put("/spaceships/:id", updateSpaceship);
router.patch("/spaceships/:id", partiallyUpdateSpaceship);
router.delete("/spaceships/:id", deleteSpaceship);

module.exports = router;
