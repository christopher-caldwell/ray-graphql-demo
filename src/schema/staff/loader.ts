import { DataLoader } from '@caldwell619/data-loader'
import { Staff } from '@/types/schema'
import { PgPool } from '@/db'

export const StaffLoader = new DataLoader<Staff, number>({
  async fetcher(ids) {
    const client = await PgPool.connect()
    const { rows } = await client.query(`SELECT * FROM staff WHERE staff_id = ANY($1)`, [ids])
    client.release()
    return rows
  },
  keyOfId: 'staff_id',
})
