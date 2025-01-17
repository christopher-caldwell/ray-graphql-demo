import { builder } from '@/schema/builder'
import { address } from '../schema'
import { getAddressById } from './queries'

builder.queryField('address', (t) =>
  t.field({
    type: address,
    args: {
      addressId: t.arg.int({ required: true }),
    },
    nullable: true,
    async resolve(_, { addressId }, { dbClient }) {
      const result = await getAddressById.run({ addressId }, dbClient)

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
