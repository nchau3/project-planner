// load .env data into process.env
import { config } from 'dotenv';

config();

// other dependencies
import fs from 'fs';
import db from '../dist/db/connection.js';

// PG connection setup
// const connectionString = process.env.DATABASE_URL ||
//   `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=disable`;
// const client = new Client();

// Loads the schema files from db/schema
const runSchemaFiles = async () => {
  console.log(`-> Loading Schema Files ...`);
  const schemaFilenames = fs.readdirSync('./src/db/schema');

  for (const fn of schemaFilenames) {
    const sql = fs.readFileSync(`./src/db/schema/${fn}`, 'utf8');
    console.log(`\t-> Running ${fn}`);
    await db.query(sql);
  }
};

const runSeedFiles = async () => {
  console.log(`-> Loading Seeds ...`);
  const schemaFilenames = fs.readdirSync('./src/db/seeds');

  for (const fn of schemaFilenames) {
    const sql = fs.readFileSync(`./src/db/seeds/${fn}`, 'utf8');
    console.log(`\t-> Running ${fn}`);
    await db.query(sql);
  }
};

const runResetDB = async () => {
  try {
    process.env.DB_HOST &&
      console.log(`-> Connecting to PG on ${process.env.DB_HOST} as ${process.env.DB_USER}...`);

    await runSchemaFiles();
    await runSeedFiles();
    process.exit();
  } catch (err) {
    console.error(`Failed due to error: ${err}`);
    process.exit();
  }
};

runResetDB();