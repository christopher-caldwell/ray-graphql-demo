import { builder } from "../builder";
import { Payment } from "@/types/schema";

export const payment = builder.objectRef<Payment>("Payment");

payment.implement({
  fields: (t) => ({
    paymentId: t.exposeInt("payment_id"),
    amount: t.exposeFloat("amount"),

    //----- Relationships -----//
    // customer
    // staff
    // rental
    paymentDate: t.field({
      type: "DateTime",
      resolve: (t) => t.payment_date,
    }),
  }),
});
