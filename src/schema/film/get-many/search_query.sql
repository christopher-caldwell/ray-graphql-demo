SELECT * FROM FILM 
  WHERE fulltext @@ to_tsquery($3)
  LIMIT $1 OFFSET $2;