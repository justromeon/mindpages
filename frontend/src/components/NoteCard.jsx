import { Link } from "react-router"

const NoteCard = ({note}) => {
  return <Link
      to={`/note/${note._id}`}
      className="h-full w-full bg-[var(--color-white)] rounded-lg overflow-hidden relative group p-3 z-0 shadow-md flex flex-col"
    >
      {/* Circle background accent */}
      <div className="absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[var(--color-accent)] group-hover:scale-[1100%] duration-500 z-[-1]" />

      <h1 className="z-20 font-bold text-[1.2em] text-[var(--color-dark)] group-hover:text-[var(--color-white)] duration-500">
        {note.title}
      </h1>
      <p className="mt-1 mb-3 text-sm text-[var(--color-dark)] group-hover:text-[var(--color-white)] duration-500 line-clamp-2 flex-1">
        {note.content}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-xs text-[var(--color-light)] group-hover:text-[var(--color-white)] duration-500">
          {new Date(note.createdAt).toLocaleDateString()}
        </span>
      </div>
  </Link>
}

export default NoteCard

