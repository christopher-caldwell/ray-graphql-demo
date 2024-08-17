import { builder } from '../builder'
import { Actor } from '@/types/schema'

export const actor = builder.objectRef<Actor>('Actor')

actor.implement({
  fields: (t) => ({
    actorId: t.exposeInt('actor_id'),
    first_name: t.exposeString('first_name'),
    last_name: t.exposeString('last_name'),

    //----- Relationships -----//
    // films starred in

    dateModified: t.field({
      type: 'DateTime',
      resolve: (t) => t.last_update,
    }),
  }),
})
