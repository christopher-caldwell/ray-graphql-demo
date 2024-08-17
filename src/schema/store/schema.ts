import { builder } from "../builder";
import { Store } from "@/types/schema";

export const store = builder.objectRef<Store>("Store");

store.implement({
  fields: (t) => ({
    storeId: t.exposeInt("store_id"),
    managerStaffId: t.exposeInt("manager_staff_id"),
    addressId: t.exposeInt("address_id"),

    //----- Relationships -----//
    // manager staff
    // address
    dateModified: t.field({
      type: "DateTime",
      resolve: (t) => t.last_update,
    }),
  }),
});
