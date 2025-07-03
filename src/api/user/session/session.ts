import express from 'express'

const session = express.Router()

session.post('/:user_id/session', (req, res) => {
    res.send(req.headers)
})

session.get('/:user_id/session/:id', (req, res) => {
    res.send(req.headers)
})

session.delete('/:user_id/session/:id', (req, res) => {
    res.send(req.headers)
})

export default session
