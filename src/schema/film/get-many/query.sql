/* @name getManyFilms */
SELECT * FROM film 
  LIMIT :limit 
  OFFSET :offset;

/* @name searchFilms */
SELECT * FROM FILM 
  WHERE fulltext @@ to_tsquery(:searchQuery)
  LIMIT :limit 
  OFFSET :offset;