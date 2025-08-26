import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import ratelimiter from './middleware/rateLimiter.js'
import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

connectDB()

//Middleware
app.use(cors({
  origin: 'http://localhost:5173'
}))
app.use(express.json())
app.use(ratelimiter)

app.use('/api/notes', notesRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
