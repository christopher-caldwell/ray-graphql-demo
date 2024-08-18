/** Types generated for queries found in "src/schema/payment/payments-for-store/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type DateOrString = Date | string;

/** 'GetPaymentsForStore' parameters type */
export interface IGetPaymentsForStoreParams {
  fromDate?: DateOrString | null | void;
  storeId?: number | null | void;
  toDate?: DateOrString | null | void;
}

/** 'GetPaymentsForStore' return type */
export interface IGetPaymentsForStoreResult {
  amount: number;
  customer_id: number;
  payment_date: Date;
  payment_id: number;
  rental_id: number;
  staff_id: number;
}

/** 'GetPaymentsForStore' query type */
export interface IGetPaymentsForStoreQuery {
  params: IGetPaymentsForStoreParams;
  result: IGetPaymentsForStoreResult;
}

const getPaymentsForStoreIR: any = {"usedParamSet":{"storeId":true,"fromDate":true,"toDate":true},"params":[{"name":"storeId","required":false,"transform":{"type":"scalar"},"locs":[{"a":190,"b":197}]},{"name":"fromDate","required":false,"transform":{"type":"scalar"},"locs":[{"a":227,"b":235}]},{"name":"toDate","required":false,"transform":{"type":"scalar"},"locs":[{"a":241,"b":247}]}],"statement":"select p.* from payment p\n\tJOIN rental r ON r.rental_id = p.payment_id \n\tJOIN inventory i ON i.inventory_id  = r.inventory_id \n\tJOIN store s ON s.store_id  = i.store_id\n  WHERE s.store_id = :storeId\n\tAND p.payment_date BETWEEN :fromDate AND :toDate"};

/**
 * Query generated from SQL:
 * ```
 * select p.* from payment p
 * 	JOIN rental r ON r.rental_id = p.payment_id 
 * 	JOIN inventory i ON i.inventory_id  = r.inventory_id 
 * 	JOIN store s ON s.store_id  = i.store_id
 *   WHERE s.store_id = :storeId
 * 	AND p.payment_date BETWEEN :fromDate AND :toDate
 * ```
 */
export const getPaymentsForStore = new PreparedQuery<IGetPaymentsForStoreParams,IGetPaymentsForStoreResult>(getPaymentsForStoreIR);


