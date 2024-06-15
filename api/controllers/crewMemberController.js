const { CrewMember } = require("../models");

const createCrewMember = async (req, res) => {
  try {
    const { Name, Role, ExperienceLevel, AssignedSpaceshipID } = req.body;

    const existingCrewMember = await CrewMember.findOne({
      where: {
        Name,
        AssignedSpaceshipID,
      },
    });

    if (existingCrewMember) {
      return res.status(400).json({
        success: false,
        message: "Crew member already exists for this spaceship",
      });
    }

    const crewMember = await CrewMember.create({
      Name,
      Role,
      ExperienceLevel,
      AssignedSpaceshipID,
    });

    console.log("Created crew member: ", crewMember);
    res.status(201).json({
      success: true,
      message: "Crew member created successfully",
      data: crewMember,
    });
  } catch (error) {
    console.error("Error creating crew member: ", error);
    res.status(500).json({
      success: false,
      message: "Failed to create crew member",
      error: error.message,
    });
  }
};

const getCrewMembers = async (req, res) => {
  try {
    const crewMembers = await CrewMember.findAll();

    console.log("Crew members are fetched");
    res.status(200).json({
      success: true,
      message: "Crew members fetched successfully",
      data: crewMembers,
    });
  } catch (error) {
    console.error("Error fetching crew members: ", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch crew members",
      error: error.message,
    });
  }
};

const getCrewMemberById = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const crewMember = await CrewMember.findByPk(id);

    if (crewMember) {
      res.status(200).json({
        success: true,
        message: "Crew member fetched successfully",
        data: crewMember,
      });
    } else {
      res.status(404).json({
        success: false,
        message: `No crew member with id: ${id} is found`,
      });
    }
  } catch (error) {
    console.error("Error fetching crew member by id: ", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch crew member",
      error: error.message,
    });
  }
};

const updateCrewMember = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { Name, Role, ExperienceLevel, AssignedSpaceshipID } = req.body;

    const existingCrewMember = await CrewMember.findOne({
      where: {
        Name,
        AssignedSpaceshipID,
      },
    });

    if (existingCrewMember && existingCrewMember.CrewMemberID !== id) {
      return res.status(400).json({
        success: false,
        message: "Crew member already exists for this spaceship",
      });
    }

    const [updatedRowCount] = await CrewMember.update(
      { Name, Role, ExperienceLevel, AssignedSpaceshipID },
      { where: { CrewMemberID: id } }
    );

    if (updatedRowCount === 0) {
      return res.status(404).json({
        success: false,
        message: `No crew member with id: ${id} is found`,
      });
    }

    const updatedCrewMember = await CrewMember.findByPk(id);
    console.log("Updated crew member: ", updatedCrewMember);
    res.status(200).json({
      success: true,
      message: "Crew member updated successfully",
      data: updatedCrewMember,
    });
  } catch (error) {
    console.error("Error updating crew member: ", error);
    res.status(500).json({
      success: false,
      message: "Failed to update crew member",
      error: error.message,
    });
  }
};

const partiallyUpdateCrewMember = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { Name, Role, ExperienceLevel, AssignedSpaceshipID } = req.body;

    const crewMember = await CrewMember.findByPk(id);

    if (!crewMember) {
      return res.status(404).json({
        success: false,
        message: `No crew member with id: ${id} is found`,
      });
    }

    const updatedCrewMember = await crewMember.update({
      Name: Name || crewMember.Name,
      Role: Role || crewMember.Role,
      ExperienceLevel: ExperienceLevel || crewMember.ExperienceLevel,
      AssignedSpaceshipID:
        AssignedSpaceshipID || crewMember.AssignedSpaceshipID,
    });

    console.log("Partially updated crew member: ", updatedCrewMember);
    res.status(200).json({
      success: true,
      message: "Crew member partially updated successfully",
      data: updatedCrewMember,
    });
  } catch (error) {
    console.error("Error partially updating crew member: ", error);
    res.status(500).json({
      success: false,
      message: "Failed to partially update crew member",
      error: error.message,
    });
  }
};

const deleteCrewMember = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const deletedRowCount = await CrewMember.destroy({
      where: { CrewMemberID: id },
    });

    if (deletedRowCount === 0) {
      return res.status(404).json({
        success: false,
        message: `No crew member with id: ${id} is found`,
      });
    }

    console.log("Deleted crew member with id: ", id);
    res.status(200).json({
      success: true,
      message: "Crew member deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting crew member: ", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete crew member",
      error: error.message,
    });
  }
};

module.exports = {
  createCrewMember,
  getCrewMembers,
  getCrewMemberById,
  updateCrewMember,
  partiallyUpdateCrewMember,
  deleteCrewMember,
};
