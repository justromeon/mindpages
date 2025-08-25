import express from 'express'
import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv'
import ratelimiter from './middleware/rateLimiter.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

connectDB()

//Middleware
app.use(express.json())
app.use(ratelimiter)

app.use('/api/notes', notesRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
