/* @name getManyLanguages */
SELECT * FROM language 
  LIMIT :limit 
  OFFSET :offset;