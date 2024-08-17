import { builder } from '@/schema/builder'
import { staff } from '../schema'
import { Staff } from '@/types/schema'
import { readSqlFile } from '@/utils'

const query = readSqlFile(__dirname, 'query.sql')
builder.queryField('staffMembers', (t) =>
  t.field({
    type: [staff],
    args: {
      limit: t.arg.int({ required: false }),
      offset: t.arg.int({ required: false }),
    },
    async resolve(_, { limit, offset }, { dbClient }) {
      const staffMembers = await dbClient.query<Staff>(query, [limit, offset])
      dbClient.release()
      return staffMembers.rows
    },
  }),
)
