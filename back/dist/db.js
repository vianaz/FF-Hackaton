import pg from 'pg';
const databaseConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
};
const { Pool } = pg;
const db = new Pool(databaseConfig);
export default db;
