// import { short } from 'short-uuid'
import { YogaInitialContext, Plugin } from 'graphql-yoga'
// import NodeCache from 'node-cache'

import { ResolverContext } from '@/types/http'

// const ConnectionPoolCache = new NodeCache()
// export const connectionPoolCache: Record<string, PoolClient | undefined> = {}

export const poolConnectionManagerPlugin: Plugin<ResolverContext & YogaInitialContext, ResolverContext> = {
  onResponse(params) {
    try {
      params.serverContext.dbClient.release()
    } catch (e) {
      console.error('Error when calling release on client connection', e)
    }
  },
}
