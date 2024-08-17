/** Types generated for queries found in "src/schema/address/get-many/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime'

export type NumberOrString = number | string

/** 'GetManyAddresses' parameters type */
export interface IGetManyAddressesParams {
  limit?: NumberOrString | null | void
  offset?: NumberOrString | null | void
}

/** 'GetManyAddresses' return type */
export interface IGetManyAddressesResult {
  address: string
  address_id: number
  address2: string | null
  city_id: number
  district: string
  last_update: Date
  phone: string
  postal_code: string | null
}

/** 'GetManyAddresses' query type */
export interface IGetManyAddressesQuery {
  params: IGetManyAddressesParams
  result: IGetManyAddressesResult
}

const getManyAddressesIR: any = {
  usedParamSet: { limit: true, offset: true },
  params: [
    { name: 'limit', required: false, transform: { type: 'scalar' }, locs: [{ a: 28, b: 33 }] },
    { name: 'offset', required: false, transform: { type: 'scalar' }, locs: [{ a: 42, b: 48 }] },
  ],
  statement: 'SELECT * FROM address LIMIT :limit OFFSET :offset',
}

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM address LIMIT :limit OFFSET :offset
 * ```
 */
export const getManyAddresses = new PreparedQuery<IGetManyAddressesParams, IGetManyAddressesResult>(getManyAddressesIR)
