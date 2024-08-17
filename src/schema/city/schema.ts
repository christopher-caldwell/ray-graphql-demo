import { builder } from '../builder'
import { City } from '@/types/schema'

export const city = builder.objectRef<City>('City')

city.implement({
  fields: (t) => ({
    cityId: t.exposeInt('city_id'),
    //----- Relationships -----//

    dateModified: t.field({
      type: 'DateTime',
      resolve: (t) => t.last_update,
    }),
  }),
})
