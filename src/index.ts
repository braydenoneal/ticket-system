import express from 'express'
import { Client } from 'pg'
import 'dotenv/config'

const app = express()
const port = 3000

const client = new Client(process.env.DATABASE_URL)
await client.connect()
await client.query('set schema \'tickets\'')

app.get('/', async (_, res) => {
    const data = await client.query('select * from "user"')
    res.send(`Hello world: ${data.rows[0].first_name}`)
})

const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})

const close = () => {
    server.close(async () => {
        console.log('Closing server')
        await client.end()
        process.exit(0)
    })
}

process.on('SIGTERM', () => {
    close()
})

process.on('SIGINT', () => {
    close()
})
