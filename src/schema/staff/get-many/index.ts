import { builder } from '@/schema/builder'
import { staff } from '../schema'
import { getManyStaffMembers } from './queries'

builder.queryField('staffMembers', (t) =>
  t.field({
    type: [staff],
    args: {
      limit: t.arg.int({ required: false }),
      offset: t.arg.int({ required: false }),
    },
    async resolve(_, { limit, offset }, { dbClient }) {
      const result = await getManyStaffMembers.run({ limit, offset }, dbClient)
      return result
    },
  }),
)
