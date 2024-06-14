const { Mission } = require("../models");

const createMission = async (req, res) => {
  try {
    const { SpaceshipID, Destination, LaunchDate, Duration } = req.body;

    const existingMission = await Mission.findOne({
      where: {
        SpaceshipID,
        Destination,
      },
    });

    if (existingMission) {
      return res.status(400).json({
        success: false,
        message: "Mission already exists",
      });
    }

    const mission = await Mission.create({
      SpaceshipID,
      Destination,
      LaunchDate,
      Duration,
    });

    console.log("Created mission: ", mission);
    res.status(201).json({
      success: true,
      message: "Mission created successfully",
      data: mission,
    });
  } catch (error) {
    console.error("Error creating mission: ", error);
    res.status(500).json({
      success: false,
      message: "Failed to create mission",
      error: error.message,
    });
  }
};

const getMissions = async (req, res) => {
  try {
    const missions = await Mission.findAll();

    console.log("Missions are fetched");
    res.status(200).json({
      success: true,
      message: "Missions fetched successfully",
      data: missions,
    });
  } catch (error) {
    console.error("Error fetching missions: ", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch missions",
      error: error.message,
    });
  }
};

const getMissionById = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const mission = await Mission.findByPk(id);

    if (mission) {
      res.status(200).json({
        success: true,
        message: "Mission fetched successfully",
        data: mission,
      });
    } else {
      res.status(404).json({
        success: false,
        message: `No mission with id: ${id} is found`,
      });
    }
  } catch (error) {
    console.error("Error fetching mission by id: ", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch mission",
      error: error.message,
    });
  }
};

const updateMission = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { SpaceshipID, Destination, LaunchDate, Duration } = req.body;

    const existingMission = await Mission.findOne({
      where: {
        SpaceshipID,
        Destination,
      },
    });

    if (existingMission && existingMission.MissionID !== id) {
      return res.status(400).json({
        success: false,
        message: "Mission already exists",
      });
    }

    const [updatedRowCount] = await Mission.update(
      { SpaceshipID, Destination, LaunchDate, Duration },
      { where: { MissionID: id } }
    );

    if (updatedRowCount === 0) {
      return res.status(404).json({
        success: false,
        message: `No mission with id: ${id} is found`,
      });
    }

    const updatedMission = await Mission.findByPk(id);
    console.log("Updated mission: ", updatedMission);
    res.status(200).json({
      success: true,
      message: "Mission updated successfully",
      data: updatedMission,
    });
  } catch (error) {
    console.error("Error updating mission: ", error);
    res.status(500).json({
      success: false,
      message: "Failed to update mission",
      error: error.message,
    });
  }
};

const partiallyUpdateMission = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { SpaceshipID, Destination, LaunchDate, Duration } = req.body;

    const mission = await Mission.findByPk(id);

    if (!mission) {
      return res.status(404).json({
        success: false,
        message: `No mission with id: ${id} is found`,
      });
    }

    const updatedMission = await mission.update({
      SpaceshipID: SpaceshipID || mission.SpaceshipID,
      Destination: Destination || mission.Destination,
      LaunchDate: LaunchDate || mission.LaunchDate,
      Duration: Duration || mission.Duration,
    });

    console.log("Partially updated mission: ", updatedMission);
    res.status(200).json({
      success: true,
      message: "Mission partially updated successfully",
      data: updatedMission,
    });
  } catch (error) {
    console.error("Error partially updating mission: ", error);
    res.status(500).json({
      success: false,
      message: "Failed to partially update mission",
      error: error.message,
    });
  }
};

const deleteMission = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const deletedRowCount = await Mission.destroy({
      where: { MissionID: id },
    });

    if (deletedRowCount === 0) {
      return res.status(404).json({
        success: false,
        message: `No mission with id: ${id} is found`,
      });
    }

    console.log("Deleted mission with id: ", id);
    res.status(200).json({
      success: true,
      message: "Mission deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting mission: ", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete mission",
      error: error.message,
    });
  }
};

module.exports = {
  createMission,
  getMissions,
  getMissionById,
  updateMission,
  partiallyUpdateMission,
  deleteMission,
};
