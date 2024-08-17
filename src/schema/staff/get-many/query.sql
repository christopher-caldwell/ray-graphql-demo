/* @name getManyStaffMembers */
SELECT * FROM staff 
  LIMIT :limit 
  OFFSET :offset;