import { DataLoader } from '@caldwell619/data-loader'
import { Inventory } from '@/types/schema'
import { PgPool } from '@/db'

export const InventoryLoader = new DataLoader<Inventory, number>({
  async fetcher(ids) {
    const client = await PgPool.connect()
    const { rows } = await client.query(`SELECT * FROM inventory WHERE inventory_id = ANY($1)`, [ids])
    client.release()
    return rows
  },
  keyOfId: 'inventory_id',
})
