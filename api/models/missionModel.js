const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Spaceship = require("./spaceshipModel");

const Mission = sequelize.define(
  "Mission",
  {
    MissionID: {
      type: DataTypes.INTEGER(15),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    SpaceshipID: {
      type: DataTypes.INTEGER(15),
      allowNull: false,
      references: {
        model: Spaceship,
        key: "SpaceshipID",
      },
      validate: {
        isInt: {
          msg: "SpaceshipID must be an integer",
        },
      },
    },
    Destination: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Destination cannot be empty",
        },
      },
    },
    LaunchDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: {
          msg: "Launch date must be a valid date",
        },
      },
    },
    Duration: {
      type: DataTypes.INTEGER(15),
      allowNull: false,
      validate: {
        min: {
          args: [1],
          msg: "Duration must be at least 1",
        },
      },
    },
  },
  {
    timestamps: false,
  }
);

Spaceship.hasMany(Mission, { foreignKey: "SpaceshipID" });
Mission.belongsTo(Spaceship, { foreignKey: "SpaceshipID" });

module.exports = Mission;
