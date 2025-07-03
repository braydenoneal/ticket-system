import express from 'express'

const ticket = express.Router()

ticket.get('/:user_id/ticket', (req, res) => {
    res.send(req.headers)
})

ticket.get('/:user_id/ticket/:id', (req, res) => {
    res.send(req.headers)
})

ticket.patch('/:user_id/ticket/:id', (req, res) => {
    res.send(req.headers)
})

export default ticket
