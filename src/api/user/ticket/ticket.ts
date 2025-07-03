import express from 'express'

const ticket = express.Router()

ticket.get('/:user_id', (req, res) => {
    res.send(req.headers)
})

ticket.get('/:user_id/:id', (req, res) => {
    res.send(req.headers)
})

ticket.patch('/:user_id/:id', (req, res) => {
    res.send(req.headers)
})

export default ticket
