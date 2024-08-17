import { resolve } from 'path'

import { readSqlFile } from '@/utils'
import { builder } from '@/schema/builder'

import { film } from '../schema'
import { Film } from '@/types/schema'

// TODO: Need to find way to safely do parameterized names in SQL File
const queryWithSearch = readSqlFile(__dirname, 'search_query.sql')
const queryWithoutSearch = readSqlFile(__dirname, 'no_search_query.sql')
builder.queryField('films', (t) =>
  t.field({
    type: [film],
    args: {
      limit: t.arg.int({ required: false }),
      offset: t.arg.int({ required: false }),
      searchQuery: t.arg.string({ required: false }),
    },
    async resolve(_, { limit, offset, searchQuery }, { dbClient }) {
      const parameters: unknown[] = [limit, offset]
      if (searchQuery) {
        parameters.push(searchQuery)
      }
      const query = searchQuery ? queryWithSearch : queryWithoutSearch
      const actors = await dbClient.query<Film>(query, parameters)
      dbClient.release()
      return actors.rows
    },
  }),
)
