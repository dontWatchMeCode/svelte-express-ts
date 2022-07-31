/*
    * con be reached at:
    * URL/api/...
*/

import express, { Request, Response } from 'express'
const router = express.Router()

export default router

router.route('/test')
    .get((req: Request, res: Response) => {
        res.send('Hello World')
    })