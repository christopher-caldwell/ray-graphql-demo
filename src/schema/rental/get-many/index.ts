import { builder } from '@/schema/builder'
import { rental } from '../schema'
import { getManyRentals } from './queries'

builder.queryField('rentals', (t) =>
  t.field({
    type: [rental],
    args: {
      limit: t.arg.int({ required: false }),
      offset: t.arg.int({ required: false }),
    },
    async resolve(_, { limit, offset }, { dbClient }) {
      const result = await getManyRentals.run({ limit, offset }, dbClient)
      return result
    },
  }),
)
