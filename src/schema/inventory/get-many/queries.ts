/** Types generated for queries found in "src/schema/inventory/get-many/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type NumberOrString = number | string;

/** 'GetManyInventories' parameters type */
export interface IGetManyInventoriesParams {
  limit?: NumberOrString | null | void;
  offset?: NumberOrString | null | void;
}

/** 'GetManyInventories' return type */
export interface IGetManyInventoriesResult {
  film_id: number;
  inventory_id: number;
  last_update: Date;
  store_id: number;
}

/** 'GetManyInventories' query type */
export interface IGetManyInventoriesQuery {
  params: IGetManyInventoriesParams;
  result: IGetManyInventoriesResult;
}

const getManyInventoriesIR: any = {"usedParamSet":{"limit":true,"offset":true},"params":[{"name":"limit","required":false,"transform":{"type":"scalar"},"locs":[{"a":33,"b":38}]},{"name":"offset","required":false,"transform":{"type":"scalar"},"locs":[{"a":50,"b":56}]}],"statement":"SELECT * FROM inventory \n  LIMIT :limit \n  OFFSET :offset"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM inventory 
 *   LIMIT :limit 
 *   OFFSET :offset
 * ```
 */
export const getManyInventories = new PreparedQuery<IGetManyInventoriesParams,IGetManyInventoriesResult>(getManyInventoriesIR);


