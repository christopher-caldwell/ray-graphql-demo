import { builder } from '@/schema/builder'
import { getStoreById } from './queries'
import { store } from '../schema'

builder.queryField('store', (t) =>
  t.field({
    type: store,
    args: {
      storeId: t.arg.int({ required: true }),
    },
    nullable: true,
    async resolve(_, { storeId }, { dbClient }) {
      const result = await getStoreById.run({ storeId }, dbClient)

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
