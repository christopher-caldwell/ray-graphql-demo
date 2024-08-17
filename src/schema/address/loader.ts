import { DataLoader } from '@caldwell619/data-loader'
import { Address } from '@/types/schema'
import { PgPool } from '@/db'

export const AddressLoader = new DataLoader<Address, number>({
  async fetcher(ids) {
    const client = await PgPool.connect()
    const { rows } = await client.query(`SELECT * FROM address WHERE address_id = ANY($1)`, [ids])
    client.release()
    return rows
  },
  keyOfId: 'address_id',
})
