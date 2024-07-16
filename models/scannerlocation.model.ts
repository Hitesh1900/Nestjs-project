// src/models/scannerlocation.model.ts

import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../src/config/database'; // Assuming database configuration

class ScannerLocation extends Model {
  public id!: number;
  public device_id!: string;
  public latitude!: number;
  public longitude!: number;
  public address!: string;

  // Add other fields as needed

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ScannerLocation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    device_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'ScannerLocation',
    tableName: 'scanner_locations', // Adjust table name as per your database
  },
);

export { ScannerLocation };
