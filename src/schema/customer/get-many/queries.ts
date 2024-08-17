/** Types generated for queries found in "src/schema/customer/get-many/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime'

export type NumberOrString = number | string

/** 'GetManyCustomers' parameters type */
export interface IGetManyCustomersParams {
  limit?: NumberOrString | null | void
  offset?: NumberOrString | null | void
}

/** 'GetManyCustomers' return type */
export interface IGetManyCustomersResult {
  active: number | null
  activebool: boolean
  address_id: number
  create_date: Date
  customer_id: number
  email: string | null
  first_name: string
  last_name: string
  last_update: Date | null
  store_id: number
}

/** 'GetManyCustomers' query type */
export interface IGetManyCustomersQuery {
  params: IGetManyCustomersParams
  result: IGetManyCustomersResult
}

const getManyCustomersIR: any = {
  usedParamSet: { limit: true, offset: true },
  params: [
    { name: 'limit', required: false, transform: { type: 'scalar' }, locs: [{ a: 32, b: 37 }] },
    { name: 'offset', required: false, transform: { type: 'scalar' }, locs: [{ a: 49, b: 55 }] },
  ],
  statement: 'SELECT * FROM customer \n  LIMIT :limit \n  OFFSET :offset',
}

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM customer
 *   LIMIT :limit
 *   OFFSET :offset
 * ```
 */
export const getManyCustomers = new PreparedQuery<IGetManyCustomersParams, IGetManyCustomersResult>(getManyCustomersIR)
