import { builder } from "@/schema/builder";
import { inventory } from "../schema";
import { Inventory } from "@/types/schema";
import { readSqlFile } from "@/utils";

const query = readSqlFile(__dirname, "query.sql");
builder.queryField("inventories", (t) =>
  t.field({
    type: [inventory],
    args: {
      limit: t.arg.int({ required: false }),
      offset: t.arg.int({ required: false }),
    },
    async resolve(_, { limit, offset }, { dbClient }) {
      const actors = await dbClient.query<Inventory>(query, [limit, offset]);

      return actors.rows;
    },
  }),
);
