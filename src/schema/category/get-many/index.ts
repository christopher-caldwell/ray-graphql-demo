import { builder } from '@/schema/builder'
import { category } from '../schema'
import { getManyCategories } from './queries'

builder.queryField('categories', (t) =>
  t.field({
    type: [category],
    args: {
      limit: t.arg.int({ required: false }),
      offset: t.arg.int({ required: false }),
    },
    async resolve(_, { limit, offset }, { dbClient }) {
      const result = await getManyCategories.run({ limit, offset }, dbClient)
      return result
    },
  }),
)
