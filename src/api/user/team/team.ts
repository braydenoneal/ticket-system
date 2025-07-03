import express from 'express'

const team = express.Router()

team.get('/:user_id', (req, res) => {
    res.send(req.headers)
})

team.post('/:user_id', (req, res) => {
    res.send(req.headers)
})

team.get('/:user_id/:id', (req, res) => {
    res.send(req.headers)
})

team.delete('/:user_id/:id', (req, res) => {
    res.send(req.headers)
})

export default team
