import { builder } from '@/schema/builder'
import { getPaymentById } from './queries'
import { payment } from '../schema'

builder.queryField('payment', (t) =>
  t.field({
    type: payment,
    args: {
      paymentId: t.arg.int({ required: true }),
    },
    nullable: true,
    async resolve(_, { paymentId }, { dbClient }) {
      const result = await getPaymentById.run({ paymentId }, dbClient)

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
