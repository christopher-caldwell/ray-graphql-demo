import { builder } from '@/schema/builder'
import { payment } from '../schema'
import { getPaymentsForStore } from './queries'

builder.queryField('paymentsForStore', (t) =>
  t.field({
    type: [payment],
    args: {
      storeId: t.arg.int(),
      fromDate: t.arg.string({ required: false }),
      toDate: t.arg.string({ required: false }),
    },
    async resolve(_, { storeId, fromDate, toDate }, { dbClient }) {
      const result = await getPaymentsForStore.run({ storeId, fromDate, toDate }, dbClient)
      return result
    },
  }),
)
