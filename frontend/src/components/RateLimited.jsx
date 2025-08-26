const RateLimited = () => {
  return <div className="flex justify-center items-center px-4 py-12 font-[var(--font-primary)]">
    <div className="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-6 bg-[var(--color-dark)] hover:-translate-y-2 hover:shadow-xl shadow-gray-800">
        
      {/* Floating Accent Block */}
      <div className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-[var(--color-accent)]" />

        {/* Icon + Title */}
        <div className="flex items-center gap-3">
          <div className="p-3">
            <img 
              src="/electric_bolt.svg" 
              alt="Electric Bolt" 
              className="w-8 h-8 text-[var(--color-accent)]"
            />
          </div>
          <h2 className="text-2xl font-bold text-[var(--color-white)]">
            Rate Limit Reached
          </h2>
        </div>

        {/* Messages */}
        <p className="text-[var(--color-white)] mt-3 text-sm leading-relaxed">
          You've made too many requests in a short period. Please wait a moment.
        </p>
        <p className="text-[var(--color-light)] text-xs">
          Try again in a few seconds.
        </p>
    </div>
  </div>
}

export default RateLimited
