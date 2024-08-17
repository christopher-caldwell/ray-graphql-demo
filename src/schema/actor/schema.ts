import { builder } from '../builder'
import { Actor } from '@/types/schema'

export const actor = builder.objectRef<Actor>('Actor')

actor.implement({
  fields: (t) => ({
    actorId: t.exposeID('actor_id'),
    // content: t.exposeString('content', { nullable: true }),
    // emailId: t.exposeString('emailId', { nullable: true }),
    // projectId: t.exposeString('projectId', { nullable: true }),
    // contractId: t.exposeString('contractId', { nullable: true }),
    // proposalId: t.exposeString('proposalId', { nullable: true }),
    //----- Relationships -----//
  
    dateModified: t.field({
      type: 'DateTime',
      resolve: (t) => t.last_update,
    }),
  }),
})
