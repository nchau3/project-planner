// PG database client/connection setup
import { Pool, PoolConfig } from 'pg';

import * as dotenv from 'dotenv';
dotenv.config();

const dbParams: PoolConfig = {
  host: process.env.PGHOST || 'localhost',
  port: Number(process.env.PGPORT) || 5432,
  user: process.env.PGUSER || 'postgres',
  password: process.env.PGPASSWORD || '',
  database: process.env.PGDATABASE || 'planner'
};

const db = new Pool(dbParams);

db.connect();

export default db;
