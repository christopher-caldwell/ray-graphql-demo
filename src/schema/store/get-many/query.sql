/* @name getManyStores */
SELECT * FROM store 
  LIMIT :limit 
  OFFSET :offset;