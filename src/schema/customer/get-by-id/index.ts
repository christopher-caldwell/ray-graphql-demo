import { builder } from '@/schema/builder'
import { getCustomerById } from './queries'
import { customer } from '../schema'

builder.queryField('customer', (t) =>
  t.field({
    type: customer,
    args: {
      customerId: t.arg.int({ required: true }),
    },
    nullable: true,
    async resolve(_, { customerId }, { dbClient }) {
      const result = await getCustomerById.run({ customerId }, dbClient)

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
