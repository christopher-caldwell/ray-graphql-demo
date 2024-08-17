import { DataLoader } from '@caldwell619/data-loader'
import { Rental } from '@/types/schema'
import { PgPool } from '@/db'

export const RentalLoader = new DataLoader<Rental, number>({
  async fetcher(ids) {
    const client = await PgPool.connect()
    const { rows } = await client.query(`SELECT * FROM rental WHERE rental_id = ANY($1)`, [ids])
    client.release()
    return rows
  },
  keyOfId: 'rental_id',
})
