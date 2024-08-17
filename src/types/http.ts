import { PoolClient } from "pg";

export type ResolverContext = {
  dbClient: PoolClient;
  connectionId: string;
};
