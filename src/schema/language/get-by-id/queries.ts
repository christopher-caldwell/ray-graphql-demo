/** Types generated for queries found in "src/schema/language/get-by-id/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'GetLanguageById' parameters type */
export interface IGetLanguageByIdParams {
  languageId?: number | null | void;
}

/** 'GetLanguageById' return type */
export interface IGetLanguageByIdResult {
  language_id: number;
  last_update: Date;
  name: string;
}

/** 'GetLanguageById' query type */
export interface IGetLanguageByIdQuery {
  params: IGetLanguageByIdParams;
  result: IGetLanguageByIdResult;
}

const getLanguageByIdIR: any = {"usedParamSet":{"languageId":true},"params":[{"name":"languageId","required":false,"transform":{"type":"scalar"},"locs":[{"a":43,"b":53}]}],"statement":"SELECT * FROM language WHERE language_id = :languageId"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM language WHERE language_id = :languageId
 * ```
 */
export const getLanguageById = new PreparedQuery<IGetLanguageByIdParams,IGetLanguageByIdResult>(getLanguageByIdIR);


