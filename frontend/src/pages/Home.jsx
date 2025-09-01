import { useEffect, useState } from "react"
import axios from 'axios'
import toast from 'react-hot-toast'

import NavBar from "../components/NavBar"
import RateLimited from "../components/RateLimited"
import Spinner from "../components/Spinner"
import NoteCard from "../components/NoteCard"

const Home = () => {
  const [isRateLimited, setIsRateLimited] = useState(false)
  const [notes, setNotes] = useState([])
  const [isLoading, setIsloading] = useState(true)

  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/notes')
      console.log(response.data)
      setNotes(response.data)
      setIsRateLimited(false)

    } catch (error) {
      console.log(error)
      if (error.response?.status === 429) {
        setIsRateLimited(true)
      } else {
        toast.error('Failed to load notes')
      }

    } finally {
      setIsloading(false)
    }
  }

  useEffect(() => {
    fetchNotes() 
  }, [])

  return <div className="min-h-screen bg-[var(--color-light)]">
    <NavBar />

    {isRateLimited && <RateLimited />}

    <div className="max-w-7xl mx-auto p-4 mt-6">
      {isLoading && <Spinner />}

      {notes.length > 0 && !isRateLimited && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map(note => <NoteCard key={note._id} note={note} />)}
        </div>
      )}

    </div>
  </div>
}

export default Home
