import { builder } from '@/schema/builder'
import { getInventoryById } from './queries'
import { inventory } from '../schema'

builder.queryField('inventory', (t) =>
  t.field({
    type: inventory,
    args: {
      inventoryId: t.arg.int({ required: true }),
    },
    nullable: true,
    async resolve(_, { inventoryId }, { dbClient }) {
      const result = await getInventoryById.run({ inventoryId }, dbClient)

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
