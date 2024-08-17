import { builder } from '../builder'
import { Rental } from '@/types/schema'
import { customer } from '../customer'
import { CustomerLoader } from '../customer/loader'
import { staff } from '../staff'
import { StaffLoader } from '../staff/loader'
import { inventory } from '../inventory'
import { InventoryLoader } from '../inventory/loader'

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
    customer: t.field({
      type: customer,
      resolve(parentRental) {
        return CustomerLoader.load(parentRental.customer_id)
      },
    }),
    staff: t.field({
      type: staff,
      resolve(parentRental) {
        return StaffLoader.load(parentRental.staff_id)
      },
    }),
    inventory: t.field({
      type: inventory,
      resolve(parentRental) {
        return InventoryLoader.load(parentRental.inventory_id)
      },
    }),
    //----- Timestamp(s) -----//
    dateModified: t.field({
      type: 'DateTime',
      resolve: (t) => t.last_update,
    }),
  }),
})
