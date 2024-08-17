/* @name getManyCustomers */
SELECT * FROM customer 
  LIMIT :limit 
  OFFSET :offset;