/** Types generated for queries found in "src/schema/store/get-many/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime'

export type NumberOrString = number | string

/** 'GetManyStores' parameters type */
export interface IGetManyStoresParams {
  limit?: NumberOrString | null | void
  offset?: NumberOrString | null | void
}

/** 'GetManyStores' return type */
export interface IGetManyStoresResult {
  address_id: number
  last_update: Date
  manager_staff_id: number
  store_id: number
}

/** 'GetManyStores' query type */
export interface IGetManyStoresQuery {
  params: IGetManyStoresParams
  result: IGetManyStoresResult
}

const getManyStoresIR: any = {
  usedParamSet: { limit: true, offset: true },
  params: [
    { name: 'limit', required: false, transform: { type: 'scalar' }, locs: [{ a: 29, b: 34 }] },
    { name: 'offset', required: false, transform: { type: 'scalar' }, locs: [{ a: 46, b: 52 }] },
  ],
  statement: 'SELECT * FROM store \n  LIMIT :limit \n  OFFSET :offset',
}

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM store
 *   LIMIT :limit
 *   OFFSET :offset
 * ```
 */
export const getManyStores = new PreparedQuery<IGetManyStoresParams, IGetManyStoresResult>(getManyStoresIR)
