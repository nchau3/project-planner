// PG database client/connection setup
import pg from 'pg';
const { Pool } = pg;

import * as dotenv from 'dotenv';
dotenv.config();

const dbParams = {
  host: process.env.PGHOST || 'localhost',
  port: Number(process.env.PGPORT) || 5432,
  user: process.env.PGUSER || 'postgres',
  password: process.env.PGPASSWORD || '',
  database: process.env.PGDATABASE || 'planner'
};

const db = new Pool(dbParams);

db.connect();

export default db;
