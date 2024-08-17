import { builder } from "@/schema/builder";
import { actor } from "../schema";
import { Actor } from "@/types/schema";
import { readSqlFile } from "@/utils";

const query = readSqlFile(__dirname, "query.sql");
builder.queryField("actors", (t) =>
  t.field({
    type: [actor],
    args: {
      limit: t.arg.int({ required: false }),
      offset: t.arg.int({ required: false }),
    },
    async resolve(_, { limit, offset }, { dbClient }) {
      const actors = await dbClient.query<Actor>(query, [limit, offset]);

      return actors.rows;
    },
  }),
);
