/** Types generated for queries found in "src/schema/staff/get-many/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type NumberOrString = number | string;

/** 'GetManyStaffMembers' parameters type */
export interface IGetManyStaffMembersParams {
  limit?: NumberOrString | null | void;
  offset?: NumberOrString | null | void;
}

/** 'GetManyStaffMembers' return type */
export interface IGetManyStaffMembersResult {
  active: boolean;
  address_id: number;
  email: string | null;
  first_name: string;
  last_name: string;
  last_update: Date;
  password: string | null;
  picture: string | null;
  staff_id: number;
  store_id: number;
  username: string;
}

/** 'GetManyStaffMembers' query type */
export interface IGetManyStaffMembersQuery {
  params: IGetManyStaffMembersParams;
  result: IGetManyStaffMembersResult;
}

const getManyStaffMembersIR: any = {"usedParamSet":{"limit":true,"offset":true},"params":[{"name":"limit","required":false,"transform":{"type":"scalar"},"locs":[{"a":29,"b":34}]},{"name":"offset","required":false,"transform":{"type":"scalar"},"locs":[{"a":46,"b":52}]}],"statement":"SELECT * FROM staff \n  LIMIT :limit \n  OFFSET :offset"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM staff 
 *   LIMIT :limit 
 *   OFFSET :offset
 * ```
 */
export const getManyStaffMembers = new PreparedQuery<IGetManyStaffMembersParams,IGetManyStaffMembersResult>(getManyStaffMembersIR);


