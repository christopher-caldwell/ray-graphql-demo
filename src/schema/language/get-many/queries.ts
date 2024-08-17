/** Types generated for queries found in "src/schema/language/get-many/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type NumberOrString = number | string;

/** 'GetManyLanguages' parameters type */
export interface IGetManyLanguagesParams {
  limit?: NumberOrString | null | void;
  offset?: NumberOrString | null | void;
}

/** 'GetManyLanguages' return type */
export interface IGetManyLanguagesResult {
  language_id: number;
  last_update: Date;
  name: string;
}

/** 'GetManyLanguages' query type */
export interface IGetManyLanguagesQuery {
  params: IGetManyLanguagesParams;
  result: IGetManyLanguagesResult;
}

const getManyLanguagesIR: any = {"usedParamSet":{"limit":true,"offset":true},"params":[{"name":"limit","required":false,"transform":{"type":"scalar"},"locs":[{"a":32,"b":37}]},{"name":"offset","required":false,"transform":{"type":"scalar"},"locs":[{"a":49,"b":55}]}],"statement":"SELECT * FROM language \n  LIMIT :limit \n  OFFSET :offset"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM language 
 *   LIMIT :limit 
 *   OFFSET :offset
 * ```
 */
export const getManyLanguages = new PreparedQuery<IGetManyLanguagesParams,IGetManyLanguagesResult>(getManyLanguagesIR);


