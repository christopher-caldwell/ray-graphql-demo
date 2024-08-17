import { builder } from '@/schema/builder'
import { inventory } from '../schema'
import { getManyInventories } from './queries'

builder.queryField('inventories', (t) =>
  t.field({
    type: [inventory],
    args: {
      limit: t.arg.int({ required: false }),
      offset: t.arg.int({ required: false }),
    },
    async resolve(_, { limit, offset }, { dbClient }) {
      const result = await getManyInventories.run({ limit, offset }, dbClient)
      return result
    },
  }),
)
