import express from 'express'

const queue = express.Router()

queue.get('/:user_id', (req, res) => {
    res.send(req.headers)
})

queue.post('/:user_id', (req, res) => {
    res.send(req.headers)
})

export default queue
