import { builder } from '@/schema/builder'
import { city } from '../schema'
import { City } from '@/types/schema'
import { readSqlFile } from '@/utils'

const query = readSqlFile(__dirname, 'query.sql')
builder.queryField('cities', (t) =>
  t.field({
    type: [city],
    args: {
      limit: t.arg.int({ required: false }),
      offset: t.arg.int({ required: false }),
    },
    async resolve(_, { limit, offset }, { dbClient }) {
      const actors = await dbClient.query<City>(query, [limit, offset])
      dbClient.release()
      return actors.rows
    },
  }),
)