import { DataLoader } from '@caldwell619/data-loader'
import { Customer } from '@/types/schema'
import { PgPool } from '@/db'

export const CustomerLoader = new DataLoader<Customer, number>({
  async fetcher(ids) {
    const client = await PgPool.connect()
    const { rows } = await client.query(`SELECT * FROM customer WHERE customer_id = ANY($1)`, [ids])
    client.release()
    return rows
  },
  keyOfId: 'customer_id',
})
