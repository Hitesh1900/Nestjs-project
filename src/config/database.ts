// src/config/database.ts

import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'postgres', // Specify your database dialect
  host: 'localhost',   // Your database host
  port: 5432,          // Your database port
  username: 'postgres', // Your database username
  password: '5536', // Your database password
  database: 'postgres', // Your database name
});
