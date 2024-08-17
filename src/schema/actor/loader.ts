import { DataLoader } from '@caldwell619/data-loader'
import { Actor } from '@/types/schema'
import { PgPool } from '@/db'

export const ActorLoader = new DataLoader<Actor, number>({
  async fetcher(ids) {
    const client = await PgPool.connect()
    const { rows } = await client.query(`SELECT * FROM actor WHERE actor_id IN ($1)`, [ids])
    client.release()
    return rows
  },
  keyOfId: 'actor_id',
})
