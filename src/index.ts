import 'dotenv/config'
import express from 'express'
import { createYoga } from 'graphql-yoga'

import { schema } from './schema'
import { PgPool } from './db'
import { myPlugin } from './db/connectionManager'

const yoga = createYoga({
  schema,
  async context() {
    const dbClient = await PgPool.connect()
    return { dbClient }
  },
  plugins: [myPlugin],
})
const yogaRouter = express.Router()
yogaRouter.use(yoga)

const app = express()
app.use(yoga.graphqlEndpoint, yogaRouter)

app.get('/hello', (_, res) => {
  res.send('Hello World!')
})

app.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql')
})
