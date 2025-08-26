import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import RateLimited from "../components/RateLimited"
import axios from 'axios'
import toast from 'react-hot-toast'

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

  return <div className="min-h-screen">
    <NavBar />
    {isRateLimited && <RateLimited />}
  </div>
}

export default Home
