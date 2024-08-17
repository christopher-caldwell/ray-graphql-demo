import { builder } from '../builder'
import { Staff } from '@/types/schema'

export const staff = builder.objectRef<Staff>('Staff')

staff.implement({
  fields: (t) => ({
    //----- Attrs -----//
    firstName: t.exposeString('first_name'),
    lastName: t.exposeString('last_name'),
    email: t.exposeString('email'),
    active: t.exposeBoolean('active'),
    username: t.exposeString('username'),
    password: t.exposeString('password'),
    picture: t.exposeString('picture'),
    addressId: t.exposeInt('address_id'),
    storeId: t.exposeInt('store_id'),
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
