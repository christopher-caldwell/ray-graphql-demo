/** Types generated for queries found in "src/schema/inventory/get-by-id/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'GetInventoryById' parameters type */
export interface IGetInventoryByIdParams {
  inventoryId?: number | null | void;
}

/** 'GetInventoryById' return type */
export interface IGetInventoryByIdResult {
  film_id: number;
  inventory_id: number;
  last_update: Date;
  store_id: number;
}

/** 'GetInventoryById' query type */
export interface IGetInventoryByIdQuery {
  params: IGetInventoryByIdParams;
  result: IGetInventoryByIdResult;
}

const getInventoryByIdIR: any = {"usedParamSet":{"inventoryId":true},"params":[{"name":"inventoryId","required":false,"transform":{"type":"scalar"},"locs":[{"a":45,"b":56}]}],"statement":"SELECT * FROM inventory WHERE inventory_id = :inventoryId"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM inventory WHERE inventory_id = :inventoryId
 * ```
 */
export const getInventoryById = new PreparedQuery<IGetInventoryByIdParams,IGetInventoryByIdResult>(getInventoryByIdIR);


