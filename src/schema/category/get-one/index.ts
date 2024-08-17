import { builder } from '@/schema/builder'
import { category } from '../../category/schema'
import { Category } from '@/types/schema'
import { readSqlFile } from '@/utils'

const query = readSqlFile(__dirname, 'query.sql')
builder.queryField('category', (t) =>
  t.field({
    type: category,
    args: {
      categoryId: t.arg.int({ required: true }),
    },
    nullable: true,
    async resolve(_, { categoryId }, { dbClient }) {
      const categories = await dbClient.query<Category>(query, [categoryId])
      dbClient.release()
      if (!categories.rows.length) {
        return null
      }
      if (categories.rows.length > 1) {
        throw new Error('Expected only one category')
      }
      return categories.rows[0]
    },
  }),
)
