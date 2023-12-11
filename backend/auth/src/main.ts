import path from 'node:path';
import cPrc from 'node:child_process';
import util from 'node:util';

import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

import { PrismaClient } from './db/generated';
import router from './api';

const exec = util.promisify(cPrc.exec);

// -----------------------------------------------------------------------------

try {
  const configOutput = dotenvExpand.expand(
    dotenv.config({
      path: path.resolve(__dirname, '../../..', 'env', '.env'),
    }),
  );

  if (configOutput['error'] !== undefined || configOutput['parsed'] === undefined)
    throw new Error("cannot find environment variables file '.env'");

  console.log('✅', 'environment variables loaded');
} catch (err) {
  console.log('❌', (err as Error).message);

  process.exit();
}

// -----------------------------------------------------------------------------

const dbConnection = async () => {
  const db = new PrismaClient();
  await exec(`export AUTH_DB_POSTGRES_CONN="${process.env.AUTH_DB_POSTGRES_CONN}"`);

  try {
    await db.$connect();
  } catch (err) {
    console.log(err);
    throw new Error('connection to DB failed');
  }

  console.log('✅', 'connected to DB');
};

// -----------------------------------------------------------------------------

const app = express();
const port = process.env.AUTH_SERVER_PORT;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.sendStatus(200);

  next();
});

app.use(cookieParser());

app.use(router);

(async () => {
  try {
    await dbConnection();
  } catch (err) {
    console.log('❌', (err as Error).message);

    process.exit();
  }

  app.listen(port, () => console.log('✅', `listening on port ${port}`));
})();
