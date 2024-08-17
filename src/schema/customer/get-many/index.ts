import { builder } from '@/schema/builder'
import { customer } from '../schema'
import { getManyCustomers } from './queries'

builder.queryField('customers', (t) =>
  t.field({
    type: [customer],
    args: {
      limit: t.arg.int({ required: false }),
      offset: t.arg.int({ required: false }),
    },
    async resolve(_, { limit, offset }, { dbClient }) {
      const result = await getManyCustomers.run({ limit, offset }, dbClient)
      return result
    },
  }),
)
