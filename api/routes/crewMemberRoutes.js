const express = require("express");
const {
  createCrewMember,
  getCrewMembers,
  getCrewMemberById,
  updateCrewMember,
  partiallyUpdateCrewMember,
  deleteCrewMember,
} = require("../controllers/crewMemberController");

const router = express.Router();

router.post("/crewmembers", createCrewMember);
router.get("/crewmembers", getCrewMembers);
router.get("/crewmembers/:id", getCrewMemberById);
router.put("/crewmembers/:id", updateCrewMember);
router.patch("/crewmembers/:id", partiallyUpdateCrewMember);
router.delete("/crewmembers/:id", deleteCrewMember);

module.exports = router;
