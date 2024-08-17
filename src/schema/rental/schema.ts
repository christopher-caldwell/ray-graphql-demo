import { builder } from '../builder'
import { Rental } from '@/types/schema'

export const rental = builder.objectRef<Rental>('Rental')

rental.implement({
  fields: (t) => ({
    rentalId: t.exposeInt('rental_id'),
    rentalDate: t.field({
      type: 'DateTime',
      resolve: (t) => t.rental_date,
    }),
    inventoryId: t.exposeInt('inventory_id'),
    customerId: t.exposeInt('customer_id'),
    returnDate: t.field({
      type: 'DateTime',
      resolve: (t) => t.return_date,
    }),
    staffId: t.exposeInt('staff_id'),

    //----- Relationships -----//
    // customer
    // staff
    // inventory
    //----- Timestamp(s) -----//
    dateModified: t.field({
      type: 'DateTime',
      resolve: (t) => t.last_update,
    }),
  }),
})
