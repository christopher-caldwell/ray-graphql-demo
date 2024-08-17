/** Types generated for queries found in "src/schema/country/get-many/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type NumberOrString = number | string;

/** 'GetManyCountries' parameters type */
export interface IGetManyCountriesParams {
  limit?: NumberOrString | null | void;
  offset?: NumberOrString | null | void;
}

/** 'GetManyCountries' return type */
export interface IGetManyCountriesResult {
  country: string;
  country_id: number;
  last_update: Date;
}

/** 'GetManyCountries' query type */
export interface IGetManyCountriesQuery {
  params: IGetManyCountriesParams;
  result: IGetManyCountriesResult;
}

const getManyCountriesIR: any = {"usedParamSet":{"limit":true,"offset":true},"params":[{"name":"limit","required":false,"transform":{"type":"scalar"},"locs":[{"a":31,"b":36}]},{"name":"offset","required":false,"transform":{"type":"scalar"},"locs":[{"a":48,"b":54}]}],"statement":"SELECT * FROM country \n  LIMIT :limit \n  OFFSET :offset"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM country 
 *   LIMIT :limit 
 *   OFFSET :offset
 * ```
 */
export const getManyCountries = new PreparedQuery<IGetManyCountriesParams,IGetManyCountriesResult>(getManyCountriesIR);


