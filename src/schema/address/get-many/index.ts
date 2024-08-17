import { builder } from "@/schema/builder";
import { address } from "../schema";
import { Address } from "@/types/schema";
import { readSqlFile } from "@/utils";

const query = readSqlFile(__dirname, "query.sql");
builder.queryField("addresses", (t) =>
  t.field({
    type: [address],
    args: {
      limit: t.arg.int({ required: false }),
      offset: t.arg.int({ required: false }),
    },
    async resolve(_, { limit, offset }, { dbClient }) {
      const actors = await dbClient.query<Address>(query, [limit, offset]);

      return actors.rows;
    },
  }),
);
