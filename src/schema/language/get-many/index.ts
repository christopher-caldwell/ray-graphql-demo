import { builder } from '@/schema/builder'
import { language } from '../schema'
import { getManyLanguages } from './queries'

builder.queryField('languages', (t) =>
  t.field({
    type: [language],
    args: {
      limit: t.arg.int({ required: false }),
      offset: t.arg.int({ required: false }),
    },
    async resolve(_, { limit, offset }, { dbClient }) {
      const result = await getManyLanguages.run({ limit, offset }, dbClient)
      return result
    },
  }),
)
