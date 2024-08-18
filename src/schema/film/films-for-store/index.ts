import { builder } from '@/schema/builder'
import { getInventoryForStore } from './queries'
import { film } from '../schema'

builder.queryField('filmsForStore', (t) =>
  t.field({
    type: [film],
    args: {
      storeId: t.arg.int(),
    },
    async resolve(_, { storeId }, { dbClient }) {
      const result = await getInventoryForStore.run({ storeId }, dbClient)
      return result
    },
  }),
)
