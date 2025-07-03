import custom_schema from '@/api/user/custom_schema/custom_schema.js'
import password_reset from '@/api/user/password_reset/password_reset.js'
import queue from '@/api/user/queue/queue.js'
import session from '@/api/user/session/session.js'
import team from '@/api/user/team/team.js'
import ticket from '@/api/user/ticket/ticket.js'
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
user.use('/', session)
user.use('/', password_reset)
user.use('/', team)
user.use('/', ticket)
user.use('/', queue)

export default user
