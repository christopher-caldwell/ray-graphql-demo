import { builder } from '../builder'
import { Store } from '@/types/schema'

export const store = builder.objectRef<Store>('Store')

store.implement({
  fields: (t) => ({
    storeId: t.exposeInt('store_id'),

    //----- Relationships -----//
    // customer
    // staff
    // rental
    dateModified: t.field({
      type: 'DateTime',
      resolve: (t) => t.last_update,
    }),
  }),
})
