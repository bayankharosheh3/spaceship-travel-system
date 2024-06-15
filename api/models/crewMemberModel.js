const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Spaceship = require("./spaceshipModel");

const CrewMember = sequelize.define(
  "CrewMember",
  {
    CrewMemberID: {
      type: DataTypes.INTEGER(15),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Name cannot be empty",
        },
      },
    },
    Role: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Role cannot be empty",
        },
      },
    },
    ExperienceLevel: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Experience Level cannot be empty",
        },
      },
    },
    AssignedSpaceshipID: {
      type: DataTypes.INTEGER,
      references: {
        model: Spaceship,
        key: "SpaceshipID",
      },
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

// Associations
CrewMember.belongsTo(Spaceship, { foreignKey: "AssignedSpaceshipID" });
Spaceship.hasMany(CrewMember, { foreignKey: "AssignedSpaceshipID" });

module.exports = CrewMember;
