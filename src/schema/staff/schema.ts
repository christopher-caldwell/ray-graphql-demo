import { builder } from '../builder'
import { Staff } from '@/types/schema'

export const staff = builder.objectRef<Staff>('Staff')

staff.implement({
  fields: (t) => ({
    //----- Attrs -----//
    firstName: t.exposeString('first_name'),
    lastName: t.exposeString('last_name'),
    addressId: t.exposeInt('address_id'),
    email: t.exposeString('email'),
    storeId: t.exposeInt('store_id'),
    active: t.exposeBoolean('active'),
    username: t.exposeString('username'),
    password: t.exposeString('password'),
    picture: t.exposeString('picture'),
    //----- Relationships -----//
    // address
    // store
    //----- Standard -----//
    staffId: t.exposeID('staff_id'),
    dateModified: t.field({
      type: 'DateTime',
      resolve: (t) => t.last_update,
    }),
  }),
})
