/** Types generated for queries found in "src/schema/payment/get-many/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime'

export type NumberOrString = number | string

/** 'GetManyPayments' parameters type */
export interface IGetManyPaymentsParams {
  limit?: NumberOrString | null | void
  offset?: NumberOrString | null | void
}

/** 'GetManyPayments' return type */
export interface IGetManyPaymentsResult {
  amount: number
  customer_id: number
  payment_date: Date
  payment_id: number
  rental_id: number
  staff_id: number
}

/** 'GetManyPayments' query type */
export interface IGetManyPaymentsQuery {
  params: IGetManyPaymentsParams
  result: IGetManyPaymentsResult
}

const getManyPaymentsIR: any = {
  usedParamSet: { limit: true, offset: true },
  params: [
    { name: 'limit', required: false, transform: { type: 'scalar' }, locs: [{ a: 31, b: 36 }] },
    { name: 'offset', required: false, transform: { type: 'scalar' }, locs: [{ a: 48, b: 54 }] },
  ],
  statement: 'SELECT * FROM payment \n  LIMIT :limit \n  OFFSET :offset',
}

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM payment
 *   LIMIT :limit
 *   OFFSET :offset
 * ```
 */
export const getManyPayments = new PreparedQuery<IGetManyPaymentsParams, IGetManyPaymentsResult>(getManyPaymentsIR)
