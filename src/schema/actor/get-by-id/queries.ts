/** Types generated for queries found in "src/schema/actor/get-by-id/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'GetActorById' parameters type */
export interface IGetActorByIdParams {
  actorId?: number | null | void;
}

/** 'GetActorById' return type */
export interface IGetActorByIdResult {
  actor_id: number;
  first_name: string;
  last_name: string;
  last_update: Date;
}

/** 'GetActorById' query type */
export interface IGetActorByIdQuery {
  params: IGetActorByIdParams;
  result: IGetActorByIdResult;
}

const getActorByIdIR: any = {"usedParamSet":{"actorId":true},"params":[{"name":"actorId","required":false,"transform":{"type":"scalar"},"locs":[{"a":37,"b":44}]}],"statement":"SELECT * FROM actor WHERE actor_id = :actorId"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM actor WHERE actor_id = :actorId
 * ```
 */
export const getActorById = new PreparedQuery<IGetActorByIdParams,IGetActorByIdResult>(getActorByIdIR);


