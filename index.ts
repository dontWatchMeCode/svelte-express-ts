import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

import apiRouter from './server/api'

const app: Express = express()
const port = process.env.PORT
const rootDir = path.resolve(__dirname, '../../dist');

app.use('/', express.static(path.join(rootDir, 'vite')))
app.use('/api', apiRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
