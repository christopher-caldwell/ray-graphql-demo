/* @name getManyPayments */
SELECT * FROM payment 
  LIMIT :limit 
  OFFSET :offset;