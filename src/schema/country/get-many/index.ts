import { builder } from '@/schema/builder'
import { country } from '../schema'
import { getManyCountries } from './queries'

builder.queryField('countries', (t) =>
  t.field({
    type: [country],
    args: {
      limit: t.arg.int({ required: false }),
      offset: t.arg.int({ required: false }),
    },
    async resolve(_, { limit, offset }, { dbClient }) {
      const result = await getManyCountries.run({ limit, offset }, dbClient)
      return result
    },
  }),
)
