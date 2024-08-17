import { builder } from '@/schema/builder'
import { actor } from '../schema'
import { getActorById } from './queries'

builder.queryField('actor', (t) =>
  t.field({
    type: actor,
    args: {
      actorId: t.arg.int({ required: true }),
    },
    nullable: true,
    async resolve(_, { actorId }, { dbClient }) {
      const result = await getActorById.run({ actorId }, dbClient)

      if (!result.length) {
        return null
      }
      if (result.length > 1) {
        throw new Error('Expected only one category')
      }
      return result[0]
    },
  }),
)
