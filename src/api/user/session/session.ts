import express from 'express'

const session = express.Router()

session.post('/:user_id', (req, res) => {
    res.send(req.headers)
})

session.get('/:user_id/:id', (req, res) => {
    res.send(req.headers)
})

session.delete('/:user_id/:id', (req, res) => {
    res.send(req.headers)
})

export default session
