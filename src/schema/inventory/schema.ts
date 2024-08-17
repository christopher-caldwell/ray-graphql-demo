import { builder } from '../builder'
import { Inventory } from '@/types/schema'

export const inventory = builder.objectRef<Inventory>('Inventory')

inventory.implement({
  fields: (t) => ({
    inventoryId: t.exposeInt('inventory_id'),
    //----- Relationships -----//

    dateModified: t.field({
      type: 'DateTime',
      resolve: (t) => t.last_update,
    }),
  }),
})
