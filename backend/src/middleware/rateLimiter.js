import ratelimit from "../config/upstash.js"

const ratelimiter = async (req, res, next) => {
  try {
    const {success} = await ratelimit.limit('limit-key')
    success
      ? next()
      : res.status(429).json({message: 'Too many requests. Please try again later.'})

  } catch (error) {
    console.log('Rate limit error', error)
    next(error)
  }
}

export default ratelimiter
