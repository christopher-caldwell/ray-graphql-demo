/** Types generated for queries found in "src/schema/payment/get-by-id/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'GetPaymentById' parameters type */
export interface IGetPaymentByIdParams {
  paymentId?: number | null | void;
}

/** 'GetPaymentById' return type */
export interface IGetPaymentByIdResult {
  amount: number;
  customer_id: number;
  payment_date: Date;
  payment_id: number;
  rental_id: number;
  staff_id: number;
}

/** 'GetPaymentById' query type */
export interface IGetPaymentByIdQuery {
  params: IGetPaymentByIdParams;
  result: IGetPaymentByIdResult;
}

const getPaymentByIdIR: any = {"usedParamSet":{"paymentId":true},"params":[{"name":"paymentId","required":false,"transform":{"type":"scalar"},"locs":[{"a":41,"b":50}]}],"statement":"SELECT * FROM payment WHERE payment_id = :paymentId"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM payment WHERE payment_id = :paymentId
 * ```
 */
export const getPaymentById = new PreparedQuery<IGetPaymentByIdParams,IGetPaymentByIdResult>(getPaymentByIdIR);


