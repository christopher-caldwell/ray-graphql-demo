import { builder } from '@/schema/builder'
import { category } from '../../category/schema'
import { Category } from '@/types/schema'
import { readSqlFile } from '@/utils'
import { getCategoryById } from './queries'

const query = readSqlFile(__dirname, 'query.sql')
builder.queryField('category', (t) =>
  t.field({
    type: category,
    args: {
      categoryId: t.arg.int({ required: true }),
    },
    nullable: true,
    async resolve(_, { categoryId }, { dbClient }) {
      const result = await getCategoryById.run({ categoryId }, dbClient)

      if (!result.length) {
        return null
      }
      if (result.length > 1) {
        throw new Error('Expected only one')
      }
      return result[0]
    },
  }),
)
