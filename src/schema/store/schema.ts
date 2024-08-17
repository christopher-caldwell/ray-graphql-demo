import { builder } from '../builder'
import { Store } from '@/types/schema'
import { StaffLoader } from '../staff/loader'
import { staff } from '../staff'
import { address } from '../address'
import { AddressLoader } from '../address/loader'

export const store = builder.objectRef<Store>('Store')

store.implement({
  fields: (t) => ({
    storeId: t.exposeInt('store_id'),
    managerStaffId: t.exposeInt('manager_staff_id'),
    addressId: t.exposeInt('address_id'),

    //----- Relationships -----//
    managerStaff: t.field({
      type: staff,
      resolve(parentStore) {
        return StaffLoader.load(parentStore.manager_staff_id)
      },
    }),
    address: t.field({
      type: address,
      resolve(parentStore) {
        return AddressLoader.load(parentStore.address_id)
      },
    }),
    dateModified: t.field({
      type: 'DateTime',
      resolve: (t) => t.last_update,
    }),
  }),
})
