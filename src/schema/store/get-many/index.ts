import { builder } from "@/schema/builder";
import { store } from "../schema";
import { Store } from "@/types/schema";
import { readSqlFile } from "@/utils";

const query = readSqlFile(__dirname, "query.sql");
builder.queryField("stores", (t) =>
  t.field({
    type: [store],
    args: {
      limit: t.arg.int({ required: false }),
      offset: t.arg.int({ required: false }),
    },
    async resolve(_, { limit, offset }, { dbClient }) {
      const actors = await dbClient.query<Store>(query, [limit, offset]);

      return actors.rows;
    },
  }),
);
