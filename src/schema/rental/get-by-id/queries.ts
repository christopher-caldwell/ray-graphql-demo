/** Types generated for queries found in "src/schema/rental/get-by-id/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'GetRentalById' parameters type */
export interface IGetRentalByIdParams {
  rentalId?: number | null | void;
}

/** 'GetRentalById' return type */
export interface IGetRentalByIdResult {
  customer_id: number;
  inventory_id: number;
  last_update: Date;
  rental_date: Date;
  rental_id: number;
  return_date: Date | null;
  staff_id: number;
}

/** 'GetRentalById' query type */
export interface IGetRentalByIdQuery {
  params: IGetRentalByIdParams;
  result: IGetRentalByIdResult;
}

const getRentalByIdIR: any = {"usedParamSet":{"rentalId":true},"params":[{"name":"rentalId","required":false,"transform":{"type":"scalar"},"locs":[{"a":39,"b":47}]}],"statement":"SELECT * FROM rental WHERE rental_id = :rentalId"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM rental WHERE rental_id = :rentalId
 * ```
 */
export const getRentalById = new PreparedQuery<IGetRentalByIdParams,IGetRentalByIdResult>(getRentalByIdIR);


