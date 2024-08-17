/** Types generated for queries found in "src/schema/category/get-by-id/query.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'GetCategoryById' parameters type */
export interface IGetCategoryByIdParams {
  categoryId?: number | null | void;
}

/** 'GetCategoryById' return type */
export interface IGetCategoryByIdResult {
  category_id: number;
  last_update: Date;
  name: string;
}

/** 'GetCategoryById' query type */
export interface IGetCategoryByIdQuery {
  params: IGetCategoryByIdParams;
  result: IGetCategoryByIdResult;
}

const getCategoryByIdIR: any = {"usedParamSet":{"categoryId":true},"params":[{"name":"categoryId","required":false,"transform":{"type":"scalar"},"locs":[{"a":43,"b":53}]}],"statement":"SELECT * FROM category WHERE category_id = :categoryId"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM category WHERE category_id = :categoryId
 * ```
 */
export const getCategoryById = new PreparedQuery<IGetCategoryByIdParams,IGetCategoryByIdResult>(getCategoryByIdIR);


