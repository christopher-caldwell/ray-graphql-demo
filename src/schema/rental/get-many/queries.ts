/** Types generated for queries found in "src/schema/rental/get-many/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime'

export type NumberOrString = number | string

/** 'GetManyRentals' parameters type */
export interface IGetManyRentalsParams {
  limit?: NumberOrString | null | void
  offset?: NumberOrString | null | void
}

/** 'GetManyRentals' return type */
export interface IGetManyRentalsResult {
  customer_id: number
  inventory_id: number
  last_update: Date
  rental_date: Date
  rental_id: number
  return_date: Date | null
  staff_id: number
}

/** 'GetManyRentals' query type */
export interface IGetManyRentalsQuery {
  params: IGetManyRentalsParams
  result: IGetManyRentalsResult
}

const getManyRentalsIR: any = {
  usedParamSet: { limit: true, offset: true },
  params: [
    { name: 'limit', required: false, transform: { type: 'scalar' }, locs: [{ a: 30, b: 35 }] },
    { name: 'offset', required: false, transform: { type: 'scalar' }, locs: [{ a: 47, b: 53 }] },
  ],
  statement: 'SELECT * FROM rental \n  LIMIT :limit \n  OFFSET :offset',
}

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM rental
 *   LIMIT :limit
 *   OFFSET :offset
 * ```
 */
export const getManyRentals = new PreparedQuery<IGetManyRentalsParams, IGetManyRentalsResult>(getManyRentalsIR)
