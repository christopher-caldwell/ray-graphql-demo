import { builder } from '../builder'
import { Category } from '@/types/schema'

export const category = builder.objectRef<Category>('Category')

category.implement({
  fields: (t) => ({
    categoryId: t.exposeID('category_id'),
    name: t.exposeString('name'),
    // emailId: t.exposeString('emailId', { nullable: true }),
    // projectId: t.exposeString('projectId', { nullable: true }),
    // contractId: t.exposeString('contractId', { nullable: true }),
    // proposalId: t.exposeString('proposalId', { nullable: true }),
    //----- Relationships -----//
  
    dateModified: t.field({
      type: 'DateTime',
      resolve: (t) => t.last_update,
    }),
  }),
})
