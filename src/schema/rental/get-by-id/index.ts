import { builder } from '@/schema/builder'
import { getRentalById } from './queries'
import { rental } from '../schema'

builder.queryField('rental', (t) =>
  t.field({
    type: rental,
    args: {
      rentalId: t.arg.int({ required: true }),
    },
    nullable: true,
    async resolve(_, { rentalId }, { dbClient }) {
      const result = await getRentalById.run({ rentalId }, dbClient)

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
