/* @name getManyInventories */
SELECT * FROM inventory 
  LIMIT :limit 
  OFFSET :offset;