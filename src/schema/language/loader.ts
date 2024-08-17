import { DataLoader } from '@caldwell619/data-loader'
import { Language } from '@/types/schema'
import { PgPool } from '@/db'

export const LanguageLoader = new DataLoader<Language, number>({
  async fetcher(ids) {
    const client = await PgPool.connect()
    const { rows } = await client.query(`SELECT * FROM language WHERE language_id = ANY($1)`, [ids])
    client.release()
    return rows
  },
  keyOfId: 'language_id',
})
