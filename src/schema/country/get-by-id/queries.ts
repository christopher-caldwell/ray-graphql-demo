/** Types generated for queries found in "src/schema/country/get-by-id/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'GetCountryById' parameters type */
export interface IGetCountryByIdParams {
  countryId?: number | null | void;
}

/** 'GetCountryById' return type */
export interface IGetCountryByIdResult {
  country: string;
  country_id: number;
  last_update: Date;
}

/** 'GetCountryById' query type */
export interface IGetCountryByIdQuery {
  params: IGetCountryByIdParams;
  result: IGetCountryByIdResult;
}

const getCountryByIdIR: any = {"usedParamSet":{"countryId":true},"params":[{"name":"countryId","required":false,"transform":{"type":"scalar"},"locs":[{"a":41,"b":50}]}],"statement":"SELECT * FROM country WHERE country_id = :countryId"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM country WHERE country_id = :countryId
 * ```
 */
export const getCountryById = new PreparedQuery<IGetCountryByIdParams,IGetCountryByIdResult>(getCountryByIdIR);


