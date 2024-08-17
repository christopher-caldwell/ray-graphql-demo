import { builder } from '@/schema/builder'
import { customer } from '../schema'
import { Customer } from '@/types/schema'
import { readSqlFile } from '@/utils'

const query = readSqlFile(__dirname, 'query.sql')
builder.queryField('customers', (t) =>
  t.field({
    type: [customer],
    args: {
      limit: t.arg.int({ required: false }),
      offset: t.arg.int({ required: false }),
    },
    async resolve(_, { limit, offset }, { dbClient }) {
      const actors = await dbClient.query<Customer>(query, [limit, offset])
      dbClient.release()
      return actors.rows
    },
  }),
)
