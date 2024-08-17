import fs from 'fs'
import path from 'path'

// const sqlDir = path.resolve(process.cwd(), 'src/sql')

export const readSqlFile = (dir: string, fileName: string): string => {
  try {
    const sqlPath = path.resolve(dir, fileName)
    // const sqlPath = new URL(import.meta.url).pathname
    return fs.readFileSync(sqlPath, 'utf8')
  } catch (e) {
    return 'Could not find'
  }
}

type QueryReducerArray = [string, unknown[], number]
export const parameterizeQuery = (parameterizedSql: string, params: Record<string, unknown>) => {
  const [text, values] = Object.entries(params).reduce<QueryReducerArray>(
    ([sql, array, index], [key, value]) => [sql.replace(`:${key}`, `$${index}`), [...array, value], index + 1],
    [parameterizedSql, [], 1],
  )
  return { text, values }
}
