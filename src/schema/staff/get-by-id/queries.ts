/** Types generated for queries found in "src/schema/staff/get-by-id/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'GetStaffMemberById' parameters type */
export interface IGetStaffMemberByIdParams {
  staffId?: number | null | void;
}

/** 'GetStaffMemberById' return type */
export interface IGetStaffMemberByIdResult {
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

/** 'GetStaffMemberById' query type */
export interface IGetStaffMemberByIdQuery {
  params: IGetStaffMemberByIdParams;
  result: IGetStaffMemberByIdResult;
}

const getStaffMemberByIdIR: any = {"usedParamSet":{"staffId":true},"params":[{"name":"staffId","required":false,"transform":{"type":"scalar"},"locs":[{"a":37,"b":44}]}],"statement":"SELECT * FROM STAFF WHERE staff_id = :staffId"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM STAFF WHERE staff_id = :staffId
 * ```
 */
export const getStaffMemberById = new PreparedQuery<IGetStaffMemberByIdParams,IGetStaffMemberByIdResult>(getStaffMemberByIdIR);


