const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Spaceship = sequelize.define(
  "Spaceship",
  {
    SpaceshipID: {
      type: DataTypes.INTEGER(15),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Name cannot be empty",
        },
      },
    },
    Capacity: {
      type: DataTypes.INTEGER(15),
      allowNull: false,
      validate: {
        min: {
          args: [1],
          msg: "Capacity must be greater than 0",
        },
      },
    },
    LaunchDate: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
    Status: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Status cannot be empty",
        },
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Spaceship;
