import express from 'express'
import notesRoutes from './routes/notesRoutes.js'

const app = express()
const port = 3000

app.use('/api/notes', notesRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
