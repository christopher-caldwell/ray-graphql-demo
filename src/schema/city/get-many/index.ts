import { builder } from '@/schema/builder'
import { city } from '../schema'
import { getManyCities } from './queries'

builder.queryField('cities', (t) =>
  t.field({
    type: [city],
    args: {
      limit: t.arg.int({ required: false }),
      offset: t.arg.int({ required: false }),
    },
    async resolve(_, { limit, offset }, { dbClient }) {
      const result = await getManyCities.run({ limit, offset }, dbClient)
      return result
    },
  }),
)
