import { useState } from "react"
import { Link, useNavigate } from "react-router"
import toast from 'react-hot-toast'

import api from "../lib/axios"

const Create = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (!title.trim() || !content.trim()) {
        toast.error('All fields are required!')

      } else {
        await api.post('/notes', {
          title,
          content
        })
        toast.success('Created successfully!')
        navigate('/')
      }
    
    } catch (error) {
      console.log('Error creating note', error)
      toast.error('Failed to create note, try again later')
    
    } finally {
      setIsLoading(false)
    }
  }

  return <div className="min-h-screen bg-[var(--color-dark)] text-[var(--color-white)] font-[var(--font-primary)] flex flex-col items-center px-4 py-6">
    <div className="w-full max-w-2xl mb-6">
      <Link 
        to={'/'} 
        className="text-[var(--color-white)] hover:underline"
      >
        ← Back to Notes
      </Link>
    </div>

    <div className="w-full max-w-2xl bg-[var(--color-light)] text-[var(--color-dark)] rounded-2xl shadow-md p-6 flex flex-col gap-4">
      <form onSubmit={handleSubmit}>
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
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? 'Creating..' : 'Create'}
        </button>
      </form>
    </div>

  </div>
}

export default Create
