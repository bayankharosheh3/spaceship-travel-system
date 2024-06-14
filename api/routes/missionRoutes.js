const express = require("express");

const {
  createMission,
  getMissions,
  updateMission,
  partiallyUpdateMission,
  deleteMission,
  getMissionById,
} = require("../controllers/missionController");

const router = express.Router();

router.post("/missions", createMission);
router.get("/missions", getMissions);
router.get("/missions/:id", getMissionById);
router.put("/missions/:id", updateMission);
router.patch("/missions/:id", partiallyUpdateMission);
router.delete("/missions/:id", deleteMission);

module.exports = router;
