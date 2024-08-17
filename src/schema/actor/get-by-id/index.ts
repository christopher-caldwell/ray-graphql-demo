import { builder } from "@/schema/builder";
import { actor } from "../schema";
import { Actor } from "@/types/schema";
import { readSqlFile } from "@/utils";

const query = readSqlFile(__dirname, "query.sql");
builder.queryField("actor", (t) =>
  t.field({
    type: actor,
    args: {
      actorId: t.arg.int({ required: true }),
    },
    nullable: true,
    async resolve(_, { actorId }, { dbClient }) {
      const actor = await dbClient.query<Actor>(query, [actorId]);

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
