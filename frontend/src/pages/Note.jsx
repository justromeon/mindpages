import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router"
import axios from 'axios'
import toast from 'react-hot-toast'

const Note = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/notes/${id}`)
        setTitle(res.data.title)
        setContent(res.data.content)
      
      } catch (error) {
        console.log('Error fetching note detail', error)
        toast.error('Cannot get details, try again later.')
        
      } finally {
        setIsLoading(false)
      }
    }
    fetchNote()
  }, [id])

  const handleDelete = async (e) => {
    e.preventDefault()
    try {
      const confirmDelete = window.confirm('Are you sure to delete this note?')
      if (confirmDelete) {
        await axios.delete(`http://localhost:3000/api/notes/${id}`)
        toast.success('Delete successful')
        navigate('/')
      }
    
    } catch (error) {
      console.error('Cannot delete note', error)
      toast.error('Cannot delete at this moment')
    }
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setIsSaving(true)

    try {
      if (!title.trim() || !content.trim()) {
        toast.error('All fields are required!')

      } else {
        await axios.put(`http://localhost:3000/api/notes/${id}`, {
          title,
          content
        })
        toast.success('Updated successfully!')
        navigate('/')
      }
    
    } catch (error) {
      console.log('Error updating note', error)
      toast.error('Failed to update note, try again later')
    
    } finally {
      setIsLoading(false)
      setIsSaving(false)
    }
  }

  return <div className="min-h-screen bg-[var(--color-dark)] text-[var(--color-white)] font-[var(--font-primary)] flex flex-col items-center px-4 py-6">
    <div className="w-full max-w-2xl mb-6 flex items-center justify-between">
      <Link 
        to={'/'} 
        className="text-[var(--color-white)] hover:underline"
      >
        ← Back to Notes
      </Link>
      <button
          className="cursor-pointer transition-all bg-[var(--color-accent)] text-[var(--color-white)] px-6 py-3 rounded-lg border-[#9a7448] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[4px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] mt-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100"
          onClick={handleDelete}
          disabled={isLoading || isSaving}
        >
          delete
      </button>
    </div>

    <div className="w-full max-w-2xl bg-[var(--color-light)] text-[var(--color-dark)] rounded-2xl shadow-md p-6 flex flex-col gap-4">
      <form onSubmit={handleSave}>
        <label className="block mb-2 font-semibold">Title</label>
        <input
          type="text"
          placeholder="Title"
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] text-lg"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <label className="block mb-2 font-semibold mt-4">Content</label>
        <textarea
          placeholder="What's on your mind..."
          rows={8}
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] resize-y"
          value={content}
          onChange={e => setContent(e.target.value)}
        />

        <button
          className="cursor-pointer transition-all bg-[var(--color-accent-green)] text-[var(--color-white)] px-6 py-3 rounded-lg border-[#207437] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[4px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] mt-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100"
          onClick={handleSave}
          disabled={isLoading || isSaving}
          type="submit"
        >
          {isSaving ? 'Saving..' : 'Save'}
        </button>
      </form>
    </div>

  </div>
}

export default Note
