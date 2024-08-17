import { builder } from '../builder'
import { Address } from '@/types/schema'
import { city } from '../city'
import { CityLoader } from '../city/loader'

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
    city: t.field({
      type: city,
      resolve(parentAddress) {
        return CityLoader.load(parentAddress.city_id)
      },
    }),
    dateModified: t.field({
      type: 'DateTime',
      resolve: (t) => t.last_update,
    }),
  }),
})
