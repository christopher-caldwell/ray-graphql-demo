import { builder } from '@/schema/builder'
import { film } from '../schema'
import { searchFilms, getManyFilms } from './queries'

builder.queryField('films', (t) =>
  t.field({
    type: [film],
    args: {
      limit: t.arg.int({ required: false }),
      offset: t.arg.int({ required: false }),
      searchQuery: t.arg.string({ required: false }),
    },
    async resolve(_, { limit, offset, searchQuery }, { dbClient }) {
      if (searchQuery) {
        const result = await searchFilms.run({ limit, offset, searchQuery }, dbClient)
        return result
      }
      const result = await getManyFilms.run({ limit, offset }, dbClient)
      return result
    },
  }),
)
