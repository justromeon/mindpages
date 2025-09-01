import { Link } from "react-router"

const NavBar = () => {
  return (
    <nav className="w-full bg-[var(--color-dark)] text-[var(--color-white)] px-4 sm:px-8 py-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">MindPages</div>
        <Link
          to={'/create'}
          className="cursor-pointer transition-all bg-[var(--color-accent-green)] text-[var(--color-white)] px-6 py-2 rounded-lg border-[#207437] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[4px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          create
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
