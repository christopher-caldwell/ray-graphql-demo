import { builder } from "@/schema/builder";
import { address } from "../schema";
import { Address } from "@/types/schema";
import { readSqlFile } from "@/utils";

const query = readSqlFile(__dirname, "query.sql");
builder.queryField("address", (t) =>
  t.field({
    type: address,
    args: {
      actorId: t.arg.int({ required: true }),
    },
    nullable: true,
    async resolve(_, { actorId }, { dbClient }) {
      const actor = await dbClient.query<Address>(query, [actorId]);

      if (!actor.rows.length) {
        return null;
      }
      if (actor.rows.length > 1) {
        throw new Error("Expected only one category");
      }
      return actor.rows[0];
    },
  }),
);
