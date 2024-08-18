/** Types generated for queries found in "src/schema/film/films-for-store/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type mpaa_rating = 'G' | 'NC-17' | 'PG' | 'PG-13' | 'R';

export type stringArray = (string)[];

/** 'GetInventoryForStore' parameters type */
export interface IGetInventoryForStoreParams {
  storeId?: number | null | void;
}

/** 'GetInventoryForStore' return type */
export interface IGetInventoryForStoreResult {
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

/** 'GetInventoryForStore' query type */
export interface IGetInventoryForStoreQuery {
  params: IGetInventoryForStoreParams;
  result: IGetInventoryForStoreResult;
}

const getInventoryForStoreIR: any = {"usedParamSet":{"storeId":true},"params":[{"name":"storeId","required":false,"transform":{"type":"scalar"},"locs":[{"a":132,"b":139}]}],"statement":"SELECT f.* from inventory i \n  JOIN store s on i.store_id = s.store_id \n  JOIN film f on f.film_id = i.film_id\n  WHERE s.store_id = :storeId"};

/**
 * Query generated from SQL:
 * ```
 * SELECT f.* from inventory i 
 *   JOIN store s on i.store_id = s.store_id 
 *   JOIN film f on f.film_id = i.film_id
 *   WHERE s.store_id = :storeId
 * ```
 */
export const getInventoryForStore = new PreparedQuery<IGetInventoryForStoreParams,IGetInventoryForStoreResult>(getInventoryForStoreIR);


