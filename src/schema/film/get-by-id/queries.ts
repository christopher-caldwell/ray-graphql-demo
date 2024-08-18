/** Types generated for queries found in "src/schema/film/get-by-id/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type mpaa_rating = 'G' | 'NC-17' | 'PG' | 'PG-13' | 'R';

export type stringArray = (string)[];

/** 'GetFilmById' parameters type */
export interface IGetFilmByIdParams {
  filmId?: number | null | void;
}

/** 'GetFilmById' return type */
export interface IGetFilmByIdResult {
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

/** 'GetFilmById' query type */
export interface IGetFilmByIdQuery {
  params: IGetFilmByIdParams;
  result: IGetFilmByIdResult;
}

const getFilmByIdIR: any = {"usedParamSet":{"filmId":true},"params":[{"name":"filmId","required":false,"transform":{"type":"scalar"},"locs":[{"a":35,"b":41}]}],"statement":"SELECT * FROM film WHERE film_id = :filmId"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM film WHERE film_id = :filmId
 * ```
 */
export const getFilmById = new PreparedQuery<IGetFilmByIdParams,IGetFilmByIdResult>(getFilmByIdIR);


