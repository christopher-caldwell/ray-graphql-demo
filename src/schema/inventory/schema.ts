import { builder } from '../builder'
import { Inventory } from '@/types/schema'

export const inventory = builder.objectRef<Inventory>('Inventory')

inventory.implement({
  fields: (t) => ({
    inventoryId: t.exposeInt('inventory_id'),
    filmId: t.exposeInt('film_id'),
    storeId: t.exposeInt('store_id'),
    //----- Relationships -----//
    // film
    // store
    dateModified: t.field({
      type: 'DateTime',
      resolve: (t) => t.last_update,
    }),
  }),
})
