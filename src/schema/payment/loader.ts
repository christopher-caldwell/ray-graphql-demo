import { DataLoader } from '@caldwell619/data-loader'
import { Payment } from '@/types/schema'
import { PgPool } from '@/db'

export const PaymentLoader = new DataLoader<Payment, number>({
  async fetcher(ids) {
    const client = await PgPool.connect()
    const { rows } = await client.query(`SELECT * FROM payment WHERE payment_id = ANY($1)`, [ids])
    client.release()
    return rows
  },
  keyOfId: 'payment_id',
})
