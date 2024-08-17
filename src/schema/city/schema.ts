import { builder } from "../builder";
import { City } from "@/types/schema";
import { CountryLoader } from "../country/loader";
import { country } from "../country";

export const city = builder.objectRef<City>("City");

city.implement({
  fields: (t) => ({
    cityId: t.exposeInt("city_id"),
    city: t.exposeString("city"),
    countryId: t.exposeInt("country_id"),
    //----- Relationships -----//
    country: t.field({
      type: country,
      resolve(parentCity) {
        return CountryLoader.load(parentCity.country_id);
      },
    }),
    dateModified: t.field({
      type: "DateTime",
      resolve: (t) => t.last_update,
    }),
  }),
});
