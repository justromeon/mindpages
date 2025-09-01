import { Link } from "react-router";

const NoNotesFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-[var(--color-dark)] rounded-2xl p-10 shadow-md">
      <img
        src="/book.svg"
        alt="No notes illustration"
        className="w-20 h-20 mb-6"
      />

      <h2 className="text-2xl font-semibold text-[var(--color-accent)] mb-3">
        No Notes Found
      </h2>

      <p className="text-[var(--color-white)] mb-8 max-w-md">
        It looks like you don’t have any notes yet. Start creating your first
        one to keep track of your thoughts and ideas.
      </p>

      <Link
        to="/create"
        className="flex items-center gap-2 cursor-pointer transition-all bg-[var(--color-accent-green)] text-[var(--color-white)] px-6 py-2 rounded-lg border-[#207437] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[4px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
      >
        Create Note
        <img src="/add.svg" alt="Add" className="w-5 h-5" />
      </Link>
    </div>
  );
}

export default NoNotesFound
