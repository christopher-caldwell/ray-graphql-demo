import { builder } from '../builder'
import { Film } from '@/types/schema'

export const film = builder.objectRef<Film>('Film')

film.implement({
  fields: (t) => ({
    //----- Attrs -----//
    title: t.exposeString('title'),
    description: t.exposeString('description', { nullable: true }),
    releaseYear: t.exposeInt('release_year', { nullable: true }),
    rentalDuration: t.exposeInt('rental_duration'),
    rentalRate: t.exposeFloat('rental_rate'),
    length: t.exposeInt('length', { nullable: true }),
    replacementCost: t.exposeFloat('replacement_cost'),
    rating: t.exposeString('rating', { nullable: true }),
    specialFeatures: t.stringList({
      resolve: (t) => t.special_features,
      nullable: true,
    }),
    //----- Relationships -----//
    // language
    // originalLanguage
    //----- Standard -----//
    filmId: t.exposeID('film_id'),
    dateModified: t.field({
      type: 'DateTime',
      resolve: (t) => t.last_update,
    }),
  }),
})
