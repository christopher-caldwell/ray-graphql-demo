/** Types generated for queries found in "src/schema/city/get-by-id/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'GetCityById' parameters type */
export interface IGetCityByIdParams {
  cityId?: number | null | void;
}

/** 'GetCityById' return type */
export interface IGetCityByIdResult {
  city: string;
  city_id: number;
  country_id: number;
  last_update: Date;
}

/** 'GetCityById' query type */
export interface IGetCityByIdQuery {
  params: IGetCityByIdParams;
  result: IGetCityByIdResult;
}

const getCityByIdIR: any = {"usedParamSet":{"cityId":true},"params":[{"name":"cityId","required":false,"transform":{"type":"scalar"},"locs":[{"a":35,"b":41}]}],"statement":"SELECT * FROM city WHERE city_id = :cityId"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM city WHERE city_id = :cityId
 * ```
 */
export const getCityById = new PreparedQuery<IGetCityByIdParams,IGetCityByIdResult>(getCityByIdIR);


