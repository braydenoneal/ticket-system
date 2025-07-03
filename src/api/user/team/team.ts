import express from 'express'

const team = express.Router()

team.get('/:user_id/team', (req, res) => {
    res.send(req.headers)
})

team.post('/:user_id/team', (req, res) => {
    res.send(req.headers)
})

team.get('/:user_id/team/:id', (req, res) => {
    res.send(req.headers)
})

team.delete('/:user_id/team/:id', (req, res) => {
    res.send(req.headers)
})

export default team
