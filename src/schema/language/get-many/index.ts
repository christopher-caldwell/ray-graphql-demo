import { builder } from "@/schema/builder";
import { language } from "../schema";
import { Language } from "@/types/schema";
import { readSqlFile } from "@/utils";

const query = readSqlFile(__dirname, "query.sql");
builder.queryField("languages", (t) =>
  t.field({
    type: [language],
    args: {
      limit: t.arg.int({ required: false }),
      offset: t.arg.int({ required: false }),
    },
    async resolve(_, { limit, offset }, { dbClient }) {
      const actors = await dbClient.query<Language>(query, [limit, offset]);

      return actors.rows;
    },
  }),
);
