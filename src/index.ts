import express from 'express'

import { Router, Request, Response } from 'express';

import dotenv from 'dotenv';

dotenv.config();

const app = express();

const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})

app.use(route)


app.listen(process.env.PORT, () => 'server running on port 3333')
