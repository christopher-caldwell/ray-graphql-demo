import { DataLoader } from '@caldwell619/data-loader'
import { Store } from '@/types/schema'
import { PgPool } from '@/db'

export const StoreLoader = new DataLoader<Store, number>({
  async fetcher(ids) {
    const client = await PgPool.connect()
    const { rows } = await client.query(`SELECT * FROM store WHERE store_id = ANY($1)`, [ids])
    client.release()
    return rows
  },
  keyOfId: 'store_id',
})
