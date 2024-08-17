import { builder } from '@/schema/builder'
import { rental } from '../schema'
import { Rental } from '@/types/schema'
import { readSqlFile } from '@/utils'

const query = readSqlFile(__dirname, 'query.sql')
builder.queryField('rentals', (t) =>
  t.field({
    type: [rental],
    args: {
      limit: t.arg.int({ required: false }),
      offset: t.arg.int({ required: false }),
    },
    async resolve(_, { limit, offset }, { dbClient }) {
      const actors = await dbClient.query<Rental>(query, [limit, offset])
      dbClient.release()
      return actors.rows
    },
  }),
)
