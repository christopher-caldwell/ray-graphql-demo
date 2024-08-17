import { builder } from '@/schema/builder'
import { country } from '../schema'
import { Country } from '@/types/schema'
import { readSqlFile } from '@/utils'

const query = readSqlFile(__dirname, 'query.sql')
builder.queryField('countries', (t) =>
  t.field({
    type: [country],
    args: {
      limit: t.arg.int({ required: false }),
      offset: t.arg.int({ required: false }),
    },
    async resolve(_, { limit, offset }, { dbClient }) {
      const actors = await dbClient.query<Country>(query, [limit, offset])
      dbClient.release()
      return actors.rows
    },
  }),
)
