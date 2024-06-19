const { Spaceship, CrewMember, Mission } = require("../models");

const createSpaceship = async (req, res) => {
  try {
    const { Name, Capacity, LaunchDate, Status } = req.body;

    const existingSpaceship = await Spaceship.findOne({
      where: {
        Name,
      },
    });

    if (existingSpaceship) {
      return res.status(400).json({
        success: false,
        message: "Spaceship already exists",
      });
    }

    const spaceship = await Spaceship.create({
      Name,
      Capacity,
      LaunchDate,
      Status,
    });

    console.log("Created spaceship: ", spaceship);
    res.status(201).json({
      success: true,
      message: "Spaceship created successfully",
      data: spaceship,
    });
  } catch (error) {
    console.error("Error creating spaceship: ", error);
    res.status(500).json({
      success: false,
      message: "Failed to create spaceship",
      error: error.message,
    });
  }
};

const getSpaceships = async (req, res) => {
  try {
    const spaceships = await Spaceship.findAll();

    console.log("Spaceships are fetched");
    res.status(200).json({
      success: true,
      message: "Spaceships fetched successfully",
      data: spaceships,
    });
  } catch (error) {
    console.error("Error fetching spaceships: ", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch spaceships",
      error: error.message,
    });
  }
};

const getSpaceshipById = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const spaceship = await Spaceship.findByPk(id);

    if (spaceship) {
      res.status(200).json({
        success: true,
        message: "Spaceship fetched successfully",
        data: spaceship,
      });
    } else {
      res.status(404).json({
        success: false,
        message: `No spaceship with id: ${id} is found`,
      });
    }
  } catch (error) {
    console.error("Error fetching spaceship by id: ", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch spaceship",
      error: error.message,
    });
  }
};

const updateSpaceship = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { Name, Capacity, LaunchDate, Status } = req.body;

    const existingSpaceship = await Spaceship.findOne({
      where: {
        Name,
      },
    });

    if (existingSpaceship && existingSpaceship.SpaceshipID !== id) {
      return res.status(400).json({
        success: false,
        message: "Spaceship name already exists",
      });
    }

    const [updatedRowCount] = await Spaceship.update(
      { Name, Capacity, LaunchDate, Status },
      { where: { SpaceshipID: id } }
    );

    if (updatedRowCount === 0) {
      return res.status(404).json({
        success: false,
        message: `No spaceship with id: ${id} is found`,
      });
    }

    const updatedSpaceship = await Spaceship.findByPk(id);
    console.log("Updated spaceship: ", updatedSpaceship);
    res.status(200).json({
      success: true,
      message: "Spaceship updated successfully",
      data: updatedSpaceship,
    });
  } catch (error) {
    console.error("Error updating spaceship: ", error);
    res.status(500).json({
      success: false,
      message: "Failed to update spaceship",
      error: error.message,
    });
  }
};

const partiallyUpdateSpaceship = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { Name, Capacity, LaunchDate, Status } = req.body;

    const spaceship = await Spaceship.findByPk(id);

    if (!spaceship) {
      return res.status(404).json({
        success: false,
        message: `No spaceship with id: ${id} is found`,
      });
    }

    const updatedSpaceship = await spaceship.update({
      Name: Name || spaceship.Name,
      Capacity: Capacity || spaceship.Capacity,
      LaunchDate: LaunchDate || spaceship.LaunchDate,
      Status: Status || spaceship.Status,
    });

    console.log("Partially updated spaceship: ", updatedSpaceship);
    res.status(200).json({
      success: true,
      message: "Spaceship partially updated successfully",
      data: updatedSpaceship,
    });
  } catch (error) {
    console.error("Error partially updating spaceship: ", error);
    res.status(500).json({
      success: false,
      message: "Failed to partially update spaceship",
      error: error.message,
    });
  }
};

const deleteSpaceship = async (req, res) => {
  try {
    const id = Number(req.params.id);

    await CrewMember.update(
      { AssignedSpaceshipID: null },
      { where: { AssignedSpaceshipID: id } }
    );

    await Mission.destroy({
      where: { SpaceshipID: id },
    });

    const deletedRowCount = await Spaceship.destroy({
      where: { SpaceshipID: id },
    });

    if (deletedRowCount === 0) {
      return res.status(404).json({
        success: false,
        message: `No spaceship with id: ${id} is found`,
      });
    }

    console.log("Deleted spaceship with id: ", id);
    res.status(200).json({
      success: true,
      message: "Spaceship deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting spaceship: ", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete spaceship",
      error: error.message,
    });
  }
};

module.exports = {
  createSpaceship,
  getSpaceships,
  getSpaceshipById,
  updateSpaceship,
  partiallyUpdateSpaceship,
  deleteSpaceship,
};
