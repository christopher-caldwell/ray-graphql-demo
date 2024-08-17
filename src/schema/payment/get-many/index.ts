import { builder } from '@/schema/builder'
import { payment } from '../schema'
import { Payment } from '@/types/schema'
import { readSqlFile } from '@/utils'

const query = readSqlFile(__dirname, 'query.sql')
builder.queryField('payments', (t) =>
  t.field({
    type: [payment],
    args: {
      limit: t.arg.int({ required: false }),
      offset: t.arg.int({ required: false }),
    },
    async resolve(_, { limit, offset }, { dbClient }) {
      const actors = await dbClient.query<Payment>(query, [limit, offset])
      dbClient.release()
      return actors.rows
    },
  }),
)
