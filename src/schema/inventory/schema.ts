import { builder } from '../builder'
import { Inventory } from '@/types/schema'
import { film } from '../film'
import { FilmLoader } from '../film/loader'
import { store } from '../store'
import { StoreLoader } from '../store/loader'

export const inventory = builder.objectRef<Inventory>('Inventory')

inventory.implement({
  fields: (t) => ({
    inventoryId: t.exposeInt('inventory_id'),
    filmId: t.exposeInt('film_id'),
    storeId: t.exposeInt('store_id'),
    //----- Relationships -----//
    film: t.field({
      type: film,
      resolve(parentInventory) {
        return FilmLoader.load(parentInventory.film_id)
      },
    }),
    store: t.field({
      type: store,
      resolve(parentInventory) {
        return StoreLoader.load(parentInventory.store_id)
      },
    }),
    dateModified: t.field({
      type: 'DateTime',
      resolve: (t) => t.last_update,
    }),
  }),
})
