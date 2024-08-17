import { builder } from '@/schema/builder'
import { getCountryById } from './queries'
import { country } from '../schema'

builder.queryField('country', (t) =>
  t.field({
    type: country,
    args: {
      countryId: t.arg.int({ required: true }),
    },
    nullable: true,
    async resolve(_, { countryId }, { dbClient }) {
      const result = await getCountryById.run({ countryId }, dbClient)

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
