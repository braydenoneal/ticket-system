import api from '@/api/api.js'
import db from '@/db.js'
import express from 'express'

const app = express()
const port = 3000

app.use('/api', api)

const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})

const close = () => {
    server.close(async () => {
        console.log('Closing server')
        await db.end()
        process.exit(0)
    })
}

process.on('SIGTERM', () => {
    close()
})

process.on('SIGINT', () => {
    close()
})
