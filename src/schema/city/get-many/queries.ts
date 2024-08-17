/** Types generated for queries found in "src/schema/city/get-many/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type NumberOrString = number | string;

/** 'GetManyCities' parameters type */
export interface IGetManyCitiesParams {
  limit?: NumberOrString | null | void;
  offset?: NumberOrString | null | void;
}

/** 'GetManyCities' return type */
export interface IGetManyCitiesResult {
  city: string;
  city_id: number;
  country_id: number;
  last_update: Date;
}

/** 'GetManyCities' query type */
export interface IGetManyCitiesQuery {
  params: IGetManyCitiesParams;
  result: IGetManyCitiesResult;
}

const getManyCitiesIR: any = {"usedParamSet":{"limit":true,"offset":true},"params":[{"name":"limit","required":false,"transform":{"type":"scalar"},"locs":[{"a":28,"b":33}]},{"name":"offset","required":false,"transform":{"type":"scalar"},"locs":[{"a":45,"b":51}]}],"statement":"SELECT * FROM city \n  LIMIT :limit \n  OFFSET :offset"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM city 
 *   LIMIT :limit 
 *   OFFSET :offset
 * ```
 */
export const getManyCities = new PreparedQuery<IGetManyCitiesParams,IGetManyCitiesResult>(getManyCitiesIR);


