import { builder } from "@/schema/builder";
import { category } from "../schema";
import { Category } from "@/types/schema";
import { readSqlFile } from "@/utils";

const query = readSqlFile(__dirname, "query.sql");
builder.queryField("categories", (t) =>
  t.field({
    type: [category],
    args: {
      limit: t.arg.int({ required: false }),
      offset: t.arg.int({ required: false }),
    },
    async resolve(_, { limit, offset }, { dbClient }) {
      const actors = await dbClient.query<Category>(query, [limit, offset]);

      return actors.rows;
    },
  }),
);
