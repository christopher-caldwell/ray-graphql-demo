# GraphQL Demo with the Sakila Data Set

## Time Tracked

- 1hr
- 25m
- 9:46am -

## Thoughts

- PGTyped found a bug I created by not knowing what an mpaa_rating is.
- Temporarily have to override numeric generations to be numbers. Looking for a fix, maybe patch package
- Temporarily have to override bytea generations to be strings. Looking for a fix, maybe patch package

## Test Queries

```graphql
query Test {
  actors {
    first_name
  }
  addresses {
    address
  }
  categories {
    name
  }
  cities {
    city
  }
  countries {
    country
  }
  customers {
    firstName
  }
  inventories {
    inventoryId
  }
  languages {
    languageId
  }
  payments {
    paymentId
  }
  rentals {
    rentalId
  }
  staffMembers {
    firstName
  }
  stores {
    storeId
  }
}
```
