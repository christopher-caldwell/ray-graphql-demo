/* @name getManyCities */
SELECT * FROM city 
  LIMIT :limit 
  OFFSET :offset;