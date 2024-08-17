import { DataLoader } from "@caldwell619/data-loader";

import { Country } from "@/types/schema";
import { PgPool } from "@/db";

export const CountryLoader = new DataLoader<Country, number>({
  async fetcher(ids) {
    const client = await PgPool.connect();
    const { rows } = await client.query(
      `SELECT * FROM country WHERE country_id = ANY($1)`,
      [ids],
    );
    client.release();
    return rows;
  },
  keyOfId: "country_id",
});
