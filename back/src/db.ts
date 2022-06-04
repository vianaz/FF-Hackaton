import pg from 'pg';
import IDataBase from './interfaces/dbInterface.js';

const databaseConfig: IDataBase = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};

const { Pool } = pg;

const db = new Pool(databaseConfig);

export default db;
