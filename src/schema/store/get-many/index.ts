import { builder } from '@/schema/builder'
import { store } from '../schema'
import { getManyStores } from './queries'

builder.queryField('stores', (t) =>
  t.field({
    type: [store],
    args: {
      limit: t.arg.int({ required: false }),
      offset: t.arg.int({ required: false }),
    },
    async resolve(_, { limit, offset }, { dbClient }) {
      const result = await getManyStores.run({ limit, offset }, dbClient)
      return result
    },
  }),
)
