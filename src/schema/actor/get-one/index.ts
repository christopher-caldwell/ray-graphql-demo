import { resolve } from 'path'

import { builder } from '@/schema/builder'
import { actor } from '../schema'
import { Actor } from '@/types/schema'
import { readSqlFile } from '@/utils'

const query = readSqlFile(__dirname, 'query.sql')
builder.queryField('actors', (t) =>
  t.field({
    type: [actor],
    async resolve(_, __, { dbClient }) {
      const actors = await dbClient.query<Actor>(query)
      dbClient.release()
      return actors.rows
    },
  }),
)
