/* @name getPaymentsForStore */
select p.* from payment p
	JOIN rental r ON r.rental_id = p.payment_id 
	JOIN inventory i ON i.inventory_id  = r.inventory_id 
	JOIN store s ON s.store_id  = i.store_id
  WHERE s.store_id = :storeId
	AND p.payment_date BETWEEN :fromDate AND :toDate;