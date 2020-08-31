const genreRouter = require('../routes/genre.routes')
const movieRouter = require('../routes/movie.routes')
const customerRouter = require('../routes/customer.routes')
const rentalRoute = require('../routes/rental.routes')
const userRouter = require('../routes/user.routes')
const authRouter = require('../routes/auth.routes')

module.exports = function (app) {
    app.use('/api/genres', genreRouter)
    app.use('/api/movies', movieRouter)
    app.use('/api/customers', customerRouter)
    app.use('/api/rentals', rentalRoute)
    app.use('/api/users', userRouter)
    app.use('/api/auth', authRouter)
}
