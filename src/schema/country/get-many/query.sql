/* @name getManyCountries */
SELECT * FROM country 
  LIMIT :limit 
  OFFSET :offset;