/** Types generated for queries found in "src/schema/customer/get-by-id/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'GetCustomerById' parameters type */
export interface IGetCustomerByIdParams {
  customerId?: number | null | void;
}

/** 'GetCustomerById' return type */
export interface IGetCustomerByIdResult {
  active: number | null;
  activebool: boolean;
  address_id: number;
  create_date: Date;
  customer_id: number;
  email: string | null;
  first_name: string;
  last_name: string;
  last_update: Date | null;
  store_id: number;
}

/** 'GetCustomerById' query type */
export interface IGetCustomerByIdQuery {
  params: IGetCustomerByIdParams;
  result: IGetCustomerByIdResult;
}

const getCustomerByIdIR: any = {"usedParamSet":{"customerId":true},"params":[{"name":"customerId","required":false,"transform":{"type":"scalar"},"locs":[{"a":43,"b":53}]}],"statement":"SELECT * FROM customer WHERE customer_id = :customerId"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM customer WHERE customer_id = :customerId
 * ```
 */
export const getCustomerById = new PreparedQuery<IGetCustomerByIdParams,IGetCustomerByIdResult>(getCustomerByIdIR);


