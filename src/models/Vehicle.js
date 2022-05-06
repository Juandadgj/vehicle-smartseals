import { DataTypes } from "sequelize";
import { sequelize } from "../config/database/database";

export const Vehicle = sequelize.define(
  "vehicle",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    mark: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    registration: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    owner_id: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: true,
  }
);
