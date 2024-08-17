/** Types generated for queries found in "src/schema/address/get-by-id/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime'

/** 'GetAddressById' parameters type */
export interface IGetAddressByIdParams {
  addressId?: number | null | void
}

/** 'GetAddressById' return type */
export interface IGetAddressByIdResult {
  address: string
  address_id: number
  address2: string | null
  city_id: number
  district: string
  last_update: Date
  phone: string
  postal_code: string | null
}

/** 'GetAddressById' query type */
export interface IGetAddressByIdQuery {
  params: IGetAddressByIdParams
  result: IGetAddressByIdResult
}

const getAddressByIdIR: any = {
  usedParamSet: { addressId: true },
  params: [{ name: 'addressId', required: false, transform: { type: 'scalar' }, locs: [{ a: 41, b: 50 }] }],
  statement: 'SELECT * FROM address WHERE address_id = :addressId',
}

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM address WHERE address_id = :addressId
 * ```
 */
export const getAddressById = new PreparedQuery<IGetAddressByIdParams, IGetAddressByIdResult>(getAddressByIdIR)
