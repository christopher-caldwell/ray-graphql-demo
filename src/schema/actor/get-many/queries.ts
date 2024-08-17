/** Types generated for queries found in "src/schema/actor/get-many/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type NumberOrString = number | string;

/** 'GetManyActors' parameters type */
export interface IGetManyActorsParams {
  limit?: NumberOrString | null | void;
  offset?: NumberOrString | null | void;
}

/** 'GetManyActors' return type */
export interface IGetManyActorsResult {
  actor_id: number;
  first_name: string;
  last_name: string;
  last_update: Date;
}

/** 'GetManyActors' query type */
export interface IGetManyActorsQuery {
  params: IGetManyActorsParams;
  result: IGetManyActorsResult;
}

const getManyActorsIR: any = {"usedParamSet":{"limit":true,"offset":true},"params":[{"name":"limit","required":false,"transform":{"type":"scalar"},"locs":[{"a":26,"b":31}]},{"name":"offset","required":false,"transform":{"type":"scalar"},"locs":[{"a":40,"b":46}]}],"statement":"SELECT * FROM actor LIMIT :limit OFFSET :offset"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM actor LIMIT :limit OFFSET :offset
 * ```
 */
export const getManyActors = new PreparedQuery<IGetManyActorsParams,IGetManyActorsResult>(getManyActorsIR);


