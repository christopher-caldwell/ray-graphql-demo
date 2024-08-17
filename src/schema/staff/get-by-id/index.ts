import { builder } from '@/schema/builder'
import { staff } from '../schema'
import { getStaffMemberById } from './queries'

builder.queryField('staffMember', (t) =>
  t.field({
    type: staff,
    args: {
      staffId: t.arg.int({ required: true }),
    },
    nullable: true,
    async resolve(_, { staffId }, { dbClient }) {
      const result = await getStaffMemberById.run({ staffId }, dbClient)
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
