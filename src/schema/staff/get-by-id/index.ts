import { builder } from '@/schema/builder'
import { staff } from '../schema'
import { Staff } from '@/types/schema'
import { readSqlFile } from '@/utils'

const query = readSqlFile(__dirname, 'query.sql')
builder.queryField('staffMember', (t) =>
  t.field({
    type: staff,
    args: {
      staffId: t.arg.int({ required: true }),
    },
    nullable: true,
    async resolve(_, { staffId }, { dbClient }) {
      const staff = await dbClient.query<Staff>(query, [staffId])

      if (!staff.rows.length) {
        return null
      }
      if (staff.rows.length > 1) {
        throw new Error('Expected only one staff')
      }
      return staff.rows[0]
    },
  }),
)
