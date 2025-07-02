import express from 'express'
import 'dotenv/config'
import * as process from 'node:process'
import { Client } from 'pg'

const app = express()
const port = 3000

const client = new Client(process.env.DATABASE_URL)
await client.connect()
// await client.end()

app.get('/', async (_, res) => {
    const data = await client.query("select * from tickets.user")
    res.send(`Hello world: ${data.rows[0].first_name}`)
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})
