import queue from '@/api/queue/queue.js'
import team from '@/api/team/team.js'
import ticket from '@/api/ticket/ticket.js'
import user from '@/api/user/user.js'
import express from 'express'

const api = express.Router()

api.use('/user', user)
api.use('/team', team)
api.use('/ticket', ticket)
api.use('/queue', queue)

export default api
