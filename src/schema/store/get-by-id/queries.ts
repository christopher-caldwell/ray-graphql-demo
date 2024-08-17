/** Types generated for queries found in "src/schema/store/get-by-id/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'GetStoreById' parameters type */
export interface IGetStoreByIdParams {
  storeId?: number | null | void;
}

/** 'GetStoreById' return type */
export interface IGetStoreByIdResult {
  address_id: number;
  last_update: Date;
  manager_staff_id: number;
  store_id: number;
}

/** 'GetStoreById' query type */
export interface IGetStoreByIdQuery {
  params: IGetStoreByIdParams;
  result: IGetStoreByIdResult;
}

const getStoreByIdIR: any = {"usedParamSet":{"storeId":true},"params":[{"name":"storeId","required":false,"transform":{"type":"scalar"},"locs":[{"a":37,"b":44}]}],"statement":"SELECT * FROM store WHERE store_id = :storeId"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM store WHERE store_id = :storeId
 * ```
 */
export const getStoreById = new PreparedQuery<IGetStoreByIdParams,IGetStoreByIdResult>(getStoreByIdIR);


