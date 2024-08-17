// import { short } from 'short-uuid'
import { createYoga, YogaInitialContext, Plugin } from "graphql-yoga";
// import NodeCache from 'node-cache'

import { ResolverContext } from "@/types/http";
import { PoolClient } from "pg";

// const ConnectionPoolCache = new NodeCache()
// const connectionPoolCache: Record<string, PoolClient> = {}

export const myPlugin: Plugin<
  ResolverContext & YogaInitialContext,
  ResolverContext
> = {
  // onContextBuilding({ context }) {
  //   return {
  //     ...context,
  //     connectionId = short.generate()
  //   }

  // }
  onResponse(params) {
    try {
      params.serverContext.dbClient.release();
    } catch (e) {
      console.error("Error when calling release on client connection", e);
    }
  },
};
