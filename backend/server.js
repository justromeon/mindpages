import express from 'express'
const app = express()
const port = 3000

app.get('/api/notes', (req, res) => {
  res.send('your note')
})

app.post('/api/notes', (req, res) => {
  res.json({message: "note created successfully"})
})

app.put('/api/notes/:id', (req, res) => {
  res.json({message: "note updated successfully"})
})

app.put('/api/notes/:id', (req, res) => {
  res.json({message: "note deleted successfully"})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
