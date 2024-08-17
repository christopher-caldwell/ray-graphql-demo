import { builder } from '@/schema/builder'
import { payment } from '../schema'
import { getManyPayments } from './queries'

builder.queryField('payments', (t) =>
  t.field({
    type: [payment],
    args: {
      limit: t.arg.int({ required: false }),
      offset: t.arg.int({ required: false }),
    },
    async resolve(_, { limit, offset }, { dbClient }) {
      const result = await getManyPayments.run({ limit, offset }, dbClient)
      return result
    },
  }),
)
