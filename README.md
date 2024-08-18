# GraphQL Demo with the Sakila Data Set

## Tasks

- [ ] DB migration & reaction in codebase

### Common Access Patterns

I tried to think of some access patterns outside of the existing data model to make available through the API.

This information is indirectly available through the graph, if you know the relationship, and are willing to massage the data after into the true value you want. I will put the "vanilla" query below the access pattern. Deeply nesting relationships is usually a very expensive operation of course, and can be prevented with various server level configs.

Building these bespoke queries is pretty trivial, especially if they return a known schema, such as films, or staff. When you start to add additional attributes that might be calculated from the data, the level of effort increases slightly as the API contract has to be updated as well.

<details><summary><strong>How much money did a store(s) make possibly with a date range</strong></summary>

_This is a view, but we can pretend_

```graphql
# Vanilla
query Payments {
  payments {
    amount
    paymentDate
    rental {
      inventory {
        store {
          storeId
        }
      }
    }
  }
}

# Bespoke
query PaymentsForStore {
  paymentsForStore(storeId: 1, fromDate: "2005-06-16", toDate: "2005-06-19") {
    amount
    paymentDate
  }
}
```
</details>


<details>
<summary><strong>Which films does a store have in inventory?</strong></summary>

```graphql
# Vanilla
query InventoryOfStore {
  inventories {
    film {
      title
    }
    store {
      storeId
    }
  }
}

# Bespoke
query FilmsForStore {
  filmsForStore(storeId: 1) {
    title
  }
}
```
</details>


- [ ] All of the actors in a film
- [ ] All of the films an actor has been in
- [ ] All of the rentals for a customer

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
