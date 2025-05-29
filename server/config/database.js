import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.PDB_NAME,
  process.env.PDB_USER,
  process.env.PDB_PASSWORD,
  {
    host: process.env.PDB_HOST,
    port: process.env.PDB_PORT,
    dialect: 'postgres',
    logging: process.env.NODE_ENV === 'production' ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

export default sequelize;
