import { builder } from '../builder'
import { Customer } from '@/types/schema'

export const customer = builder.objectRef<Customer>('Customer')

customer.implement({
  fields: (t) => ({
    customerId: t.exposeInt('customer_id'),
    //----- Relationships -----//

    dateModified: t.field({
      type: 'DateTime',
      resolve: (t) => t.last_update,
    }),
  }),
})
