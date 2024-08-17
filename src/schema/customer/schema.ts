import { builder } from '../builder'
import { Customer } from '@/types/schema'
import { store } from '../store'
import { StoreLoader } from '../store/loader'
import { AddressLoader } from '../address/loader'
import { address } from '../address'

export const customer = builder.objectRef<Customer>('Customer')

customer.implement({
  fields: (t) => ({
    customerId: t.exposeInt('customer_id'),
    storeId: t.exposeInt('store_id'),
    firstName: t.exposeString('first_name'),
    lastName: t.exposeString('last_name'),
    email: t.exposeString('email'),
    addressId: t.exposeInt('address_id'),
    isActive: t.exposeBoolean('activebool'), // <-- Not sure on this one?
    active: t.exposeInt('active'), // <-- Not sure on this one?
    //----- Relationships -----//
    store: t.field({
      type: store,
      resolve(parentCustomer) {
        return StoreLoader.load(parentCustomer.store_id)
      },
    }),
    address: t.field({
      type: address,
      resolve(parentCustomer) {
        return AddressLoader.load(parentCustomer.address_id)
      },
    }),
    dateCreated: t.field({
      type: 'DateTime',
      resolve: (t) => t.create_date,
    }),
    dateModified: t.field({
      type: 'DateTime',
      resolve: (t) => t.last_update,
    }),
  }),
})
