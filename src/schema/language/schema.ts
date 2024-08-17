import { builder } from '../builder'
import { Language } from '@/types/schema'

export const language = builder.objectRef<Language>('Language')

language.implement({
  fields: (t) => ({
    languageId: t.exposeInt('language_id'),
    //----- Relationships -----//

    dateModified: t.field({
      type: 'DateTime',
      resolve: (t) => t.last_update,
    }),
  }),
})
