import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Create from "./pages/Create"
import Note from "./pages/Note"

const App = () => {
  return <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/note/:id" element={<Note />} />
    </Routes>
  </div>
}

export default App
