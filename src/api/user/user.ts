import custom_schema from '@/api/user/custom_schema/custom_schema.js'
import password_reset from '@/api/user/password_reset/password_reset.js'
import session from '@/api/user/session/session.js'
import db from '@/db.js'
import express from 'express'

const user = express.Router()

user.get('/', (req, res) => {
    res.send(req.headers)
})

user.post('/', (req, res) => {
    res.send(req.headers)
})

user.get('/:id', async (req, res) => {
    const data = await db.query('select * from "user" where "user".id = $1', [req.params.id])
    res.send(data.rows[0])
})

user.patch('/:id', (req, res) => {
    res.send(req.headers)
})

user.delete('/:id', (req, res) => {
    res.send(req.headers)
})

user.use('/custom_schema', custom_schema)
user.use('/session', session)
user.use('/password_reset', password_reset)

export default user
