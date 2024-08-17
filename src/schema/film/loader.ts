import { DataLoader } from '@caldwell619/data-loader'
import { Film } from '@/types/schema'
import { PgPool } from '@/db'

export const FilmLoader = new DataLoader<Film, number>({
  async fetcher(ids) {
    const client = await PgPool.connect()
    const { rows } = await client.query(`SELECT * FROM film WHERE film_id = ANY($1)`, [ids])
    client.release()
    return rows
  },
  keyOfId: 'film_id',
})
