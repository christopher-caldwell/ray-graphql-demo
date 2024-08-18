/* @name getInventoryForStore */
SELECT
  f.*
FROM
  inventory i
  JOIN store s ON i.store_id = s.store_id
  JOIN film f ON f.film_id = i.film_id
WHERE
  s.store_id =:storeId;

-- Could add unique case for the film_id to only get the ones they have, 
-- or could count them for an on-hand stock number