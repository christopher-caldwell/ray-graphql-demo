import { builder } from '../builder'
import { Payment } from '@/types/schema'
import { customer } from '../customer'
import { CustomerLoader } from '../customer/loader'
import { staff } from '../staff'
import { StaffLoader } from '../staff/loader'
import { rental } from '../rental'
import { RentalLoader } from '../rental/loader'

export const payment = builder.objectRef<Payment>('Payment')

payment.implement({
  fields: (t) => ({
    paymentId: t.exposeInt('payment_id'),
    amount: t.exposeFloat('amount'),

    //----- Relationships -----//
    customer: t.field({
      type: customer,
      resolve(parentPayment) {
        return CustomerLoader.load(parentPayment.customer_id)
      },
    }),
    staff: t.field({
      type: staff,
      resolve(parentPayment) {
        return StaffLoader.load(parentPayment.staff_id)
      },
    }),
    rental: t.field({
      type: rental,
      resolve(parentPayment) {
        return RentalLoader.load(parentPayment.rental_id)
      },
    }),
    paymentDate: t.field({
      type: 'DateTime',
      resolve: (t) => t.payment_date,
    }),
  }),
})
