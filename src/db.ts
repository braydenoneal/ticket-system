import { Client } from 'pg'
import 'dotenv/config'

const db = new Client(process.env.DATABASE_URL)
await db.connect()
await db.query('set schema \'tickets\'')

export default db
