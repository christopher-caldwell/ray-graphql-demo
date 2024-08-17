import { builder } from '@/schema/builder'
import { getCityById } from './queries'
import { city } from '../schema'

builder.queryField('city', (t) =>
  t.field({
    type: city,
    args: {
      cityId: t.arg.int({ required: true }),
    },
    nullable: true,
    async resolve(_, { cityId }, { dbClient }) {
      const result = await getCityById.run({ cityId }, dbClient)

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
