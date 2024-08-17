import fs from 'fs'
import path from 'path'

// const sqlDir = path.resolve(process.cwd(), 'src/sql')

export const readSqlFile = (dir: string, fileName: string): string => {
  try {
    const sqlPath = path.resolve(dir, fileName)
    // const sqlPath = new URL(import.meta.url).pathname
    console.log('sqlPath', sqlPath)
    return fs.readFileSync(sqlPath, 'utf8')
  } catch (e) {
    return 'Could not find'
  }
}
