import { builder } from '@/schema/builder'
import { getManyAddresses } from './queries'
import { address } from '../schema'

builder.queryField('addresses', (t) =>
  t.field({
    type: [address],
    args: {
      limit: t.arg.int({ required: false }),
      offset: t.arg.int({ required: false }),
    },
    async resolve(_, { limit, offset }, { dbClient }) {
      const result = await getManyAddresses.run({ limit, offset }, dbClient)
      return result
    },
  }),
)
