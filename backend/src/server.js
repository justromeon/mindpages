import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'

import ratelimiter from './middleware/rateLimiter.js'
import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
const __dirname = path.resolve();

connectDB()

//Middleware
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}
app.use(express.json())
app.use(ratelimiter)

app.use('/api/notes', notesRoutes)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.all('/{*any}', (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});
