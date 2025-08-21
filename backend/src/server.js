import express from 'express'
import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

connectDB()

app.use('/api/notes', notesRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
