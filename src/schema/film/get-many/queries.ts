/** Types generated for queries found in "src/schema/film/get-many/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type mpaa_rating = 'G' | 'NC-17' | 'PG' | 'PG-13' | 'R';

export type NumberOrString = number | string;

export type stringArray = (string)[];

/** 'GetManyFilms' parameters type */
export interface IGetManyFilmsParams {
  limit?: NumberOrString | null | void;
  offset?: NumberOrString | null | void;
}

/** 'GetManyFilms' return type */
export interface IGetManyFilmsResult {
  description: string | null;
  film_id: number;
  fulltext: string;
  language_id: number;
  last_update: Date;
  length: number | null;
  original_language_id: number | null;
  rating: mpaa_rating | null;
  release_year: number | null;
  rental_duration: number;
  rental_rate: number;
  replacement_cost: number;
  special_features: stringArray | null;
  title: string;
}

/** 'GetManyFilms' query type */
export interface IGetManyFilmsQuery {
  params: IGetManyFilmsParams;
  result: IGetManyFilmsResult;
}

const getManyFilmsIR: any = {"usedParamSet":{"limit":true,"offset":true},"params":[{"name":"limit","required":false,"transform":{"type":"scalar"},"locs":[{"a":28,"b":33}]},{"name":"offset","required":false,"transform":{"type":"scalar"},"locs":[{"a":45,"b":51}]}],"statement":"SELECT * FROM film \n  LIMIT :limit \n  OFFSET :offset"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM film 
 *   LIMIT :limit 
 *   OFFSET :offset
 * ```
 */
export const getManyFilms = new PreparedQuery<IGetManyFilmsParams,IGetManyFilmsResult>(getManyFilmsIR);


/** 'SearchFilms' parameters type */
export interface ISearchFilmsParams {
  limit?: NumberOrString | null | void;
  offset?: NumberOrString | null | void;
  searchQuery?: string | null | void;
}

/** 'SearchFilms' return type */
export interface ISearchFilmsResult {
  description: string | null;
  film_id: number;
  fulltext: string;
  language_id: number;
  last_update: Date;
  length: number | null;
  original_language_id: number | null;
  rating: mpaa_rating | null;
  release_year: number | null;
  rental_duration: number;
  rental_rate: number;
  replacement_cost: number;
  special_features: stringArray | null;
  title: string;
}

/** 'SearchFilms' query type */
export interface ISearchFilmsQuery {
  params: ISearchFilmsParams;
  result: ISearchFilmsResult;
}

const searchFilmsIR: any = {"usedParamSet":{"searchQuery":true,"limit":true,"offset":true},"params":[{"name":"searchQuery","required":false,"transform":{"type":"scalar"},"locs":[{"a":51,"b":62}]},{"name":"limit","required":false,"transform":{"type":"scalar"},"locs":[{"a":73,"b":78}]},{"name":"offset","required":false,"transform":{"type":"scalar"},"locs":[{"a":90,"b":96}]}],"statement":"SELECT * FROM FILM \n  WHERE fulltext @@ to_tsquery(:searchQuery)\n  LIMIT :limit \n  OFFSET :offset"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM FILM 
 *   WHERE fulltext @@ to_tsquery(:searchQuery)
 *   LIMIT :limit 
 *   OFFSET :offset
 * ```
 */
export const searchFilms = new PreparedQuery<ISearchFilmsParams,ISearchFilmsResult>(searchFilmsIR);


