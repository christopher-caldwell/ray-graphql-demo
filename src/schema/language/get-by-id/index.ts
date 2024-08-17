import { builder } from '@/schema/builder'
import { getLanguageById } from './queries'
import { language } from '../schema'

builder.queryField('language', (t) =>
  t.field({
    type: language,
    args: {
      languageId: t.arg.int({ required: true }),
    },
    nullable: true,
    async resolve(_, { languageId }, { dbClient }) {
      const result = await getLanguageById.run({ languageId }, dbClient)

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
