import { builder } from '@/schema/builder'
import { film } from '../schema'
import { getFilmById } from './queries'

builder.queryField('film', (t) =>
  t.field({
    type: film,
    args: {
      filmId: t.arg.int({ required: true }),
    },
    nullable: true,
    async resolve(_, { filmId }, { dbClient }) {
      const result = await getFilmById.run({ filmId }, dbClient)
      if (!result.length) {
        return null
      }
      if (result.length > 1) {
        throw new Error('Expected only one')
      }
      return result[0]
    },
  }),
)
