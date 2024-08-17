/* @name getManyCategories */
SELECT * FROM category 
  LIMIT :limit 
  OFFSET :offset;