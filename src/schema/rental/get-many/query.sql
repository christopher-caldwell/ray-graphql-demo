/* @name getManyRentals */
SELECT * FROM rental 
  LIMIT :limit 
  OFFSET :offset;