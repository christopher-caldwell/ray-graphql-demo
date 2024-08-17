import { builder } from "../builder";
import { Country } from "@/types/schema";

export const country = builder.objectRef<Country>("Country");

country.implement({
  fields: (t) => ({
    countryId: t.exposeInt("country_id"),
    country: t.exposeString("country"),
    //----- Relationships -----//

    dateModified: t.field({
      type: "DateTime",
      resolve: (t) => t.last_update,
    }),
  }),
});
