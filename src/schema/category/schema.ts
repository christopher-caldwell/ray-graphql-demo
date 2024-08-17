import { builder } from '../builder'
import { Category } from '@/types/schema'

export const category = builder.objectRef<Category>('Category')

category.implement({
  fields: (t) => ({
    categoryId: t.exposeID('category_id'),
    name: t.exposeString('name'),
    //----- Relationships -----//

    dateModified: t.field({
      type: 'DateTime',
      resolve: (t) => t.last_update,
    }),
  }),
})
