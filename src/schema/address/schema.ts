import { builder } from '../builder'
import { Address } from '@/types/schema'

export const address = builder.objectRef<Address>('Address')

address.implement({
  fields: (t) => ({
    addressId: t.exposeInt('address_id'),
    //----- Relationships -----//

    dateModified: t.field({
      type: 'DateTime',
      resolve: (t) => t.last_update,
    }),
  }),
})
