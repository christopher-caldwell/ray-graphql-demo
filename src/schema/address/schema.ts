import { builder } from '../builder'
import { Address } from '@/types/schema'

export const address = builder.objectRef<Address>('Address')

address.implement({
  fields: (t) => ({
    addressId: t.exposeInt('address_id'),
    address: t.exposeString('address'),
    address2: t.exposeString('address2'),
    district: t.exposeString('district'),
    cityId: t.exposeInt('city_id'),
    postalCode: t.exposeString('postal_code'),
    phone: t.exposeString('phone'),
    //----- Relationships -----//
    // city
    dateModified: t.field({
      type: 'DateTime',
      resolve: (t) => t.last_update,
    }),
  }),
})
