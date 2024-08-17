import { DataLoader } from '@caldwell619/data-loader'
import { Category } from '@/types/schema'
import { PgPool } from '@/db'

export const CategoryLoader = new DataLoader<Category, number>({
  async fetcher(ids) {
    const client = await PgPool.connect()
    const { rows } = await client.query(`SELECT * FROM category WHERE category_id = ANY($1)`, [ids])
    client.release()
    return rows
  },
  keyOfId: 'category_id',
})
