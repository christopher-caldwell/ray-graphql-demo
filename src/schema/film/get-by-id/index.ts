import { builder } from "@/schema/builder";
import { film } from "../schema";
import { Film } from "@/types/schema";
import { readSqlFile } from "@/utils";

const query = readSqlFile(__dirname, "query.sql");
builder.queryField("film", (t) =>
  t.field({
    type: film,
    args: {
      filmId: t.arg.int({ required: true }),
    },
    nullable: true,
    async resolve(_, { filmId }, { dbClient }) {
      const films = await dbClient.query<Film>(query, [filmId]);

      if (!films.rows.length) {
        return null;
      }
      if (films.rows.length > 1) {
        throw new Error("Expected only one category");
      }
      return films.rows[0];
    },
  }),
);
