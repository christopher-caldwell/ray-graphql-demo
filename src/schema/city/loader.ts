import { DataLoader } from "@caldwell619/data-loader";
import { City } from "@/types/schema";
import { PgPool } from "@/db";

export const CityLoader = new DataLoader<City, number>({
  async fetcher(ids) {
    const client = await PgPool.connect();
    const { rows } = await client.query(
      `SELECT * FROM city WHERE city_id = ANY($1)`,
      [ids],
    );
    client.release();
    return rows;
  },
  keyOfId: "city_id",
});
