import { Pool } from "pg";

const safelyAccessEnvVar = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable ${key}`);
  }
  return value;
};

export const PgPool = new Pool({
  host: safelyAccessEnvVar("POSTGRES_HOST"),
  user: safelyAccessEnvVar("POSTGRES_USER"),
  password: safelyAccessEnvVar("POSTGRES_PASSWORD"),
  database: safelyAccessEnvVar("POSTGRES_DB"),
  max: 20,
  idleTimeoutMillis: 3000,
  connectionTimeoutMillis: 2000,
});
