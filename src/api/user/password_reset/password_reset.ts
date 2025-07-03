import express from 'express'

const password_reset = express.Router()

password_reset.post('/:user_id/password_reset', (req, res) => {
    res.send(req.headers)
})

export default password_reset
