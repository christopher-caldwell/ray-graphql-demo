/** Types generated for queries found in "src/schema/category/get-many/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime'

export type NumberOrString = number | string

/** 'GetManyCategories' parameters type */
export interface IGetManyCategoriesParams {
  limit?: NumberOrString | null | void
  offset?: NumberOrString | null | void
}

/** 'GetManyCategories' return type */
export interface IGetManyCategoriesResult {
  category_id: number
  last_update: Date
  name: string
}

/** 'GetManyCategories' query type */
export interface IGetManyCategoriesQuery {
  params: IGetManyCategoriesParams
  result: IGetManyCategoriesResult
}

const getManyCategoriesIR: any = {
  usedParamSet: { limit: true, offset: true },
  params: [
    { name: 'limit', required: false, transform: { type: 'scalar' }, locs: [{ a: 32, b: 37 }] },
    { name: 'offset', required: false, transform: { type: 'scalar' }, locs: [{ a: 49, b: 55 }] },
  ],
  statement: 'SELECT * FROM category \n  LIMIT :limit \n  OFFSET :offset',
}

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM category
 *   LIMIT :limit
 *   OFFSET :offset
 * ```
 */
export const getManyCategories = new PreparedQuery<IGetManyCategoriesParams, IGetManyCategoriesResult>(
  getManyCategoriesIR,
)
