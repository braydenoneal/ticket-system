import express from 'express'

const custom_schema = express.Router()

custom_schema.get('/', (req, res) => {
    res.send(req.headers)
})

custom_schema.patch('/', (req, res) => {
    res.send(req.headers)
})

export default custom_schema
