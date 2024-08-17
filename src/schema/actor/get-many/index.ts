import { builder } from '@/schema/builder'
import { readSqlFile } from '@/utils'

import { actor } from '../schema'
import { getManyActors } from './queries'

const query = readSqlFile(__dirname, 'query.sql')
builder.queryField('actors', (t) =>
  t.field({
    type: [actor],
    args: {
      limit: t.arg.int({ required: false }),
      offset: t.arg.int({ required: false }),
    },
    async resolve(_, { limit, offset }, { dbClient }) {
      const result = await getManyActors.run({ limit, offset }, dbClient)
      return result
    },
  }),
)
