const config = require('config')
const mongoose = require('mongoose')
const genreRouter = require('./routes/genre.routes')
const movieRouter = require('./routes/movie.routes')
const customerRouter = require('./routes/customer.routes')
const rentalRoute = require('./routes/rental.routes')
const userRouter = require('./routes/user.routes')
const authRouter = require('./routes/auth.routes')
const express = require('express');
const app = express();

// if (!config.get('jwtPrivateKey')) {
//     console.error('FATAL ERROR: jwtPrivateKey is not defined');
//     process.exit(1);
// }
mongoose.connect('mongodb://localhost:27017/vidly', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to mongodb'))
    .catch(err => console.error("Can't connect to mongodb", err))

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

app.use(express.json());
app.use('/api/genres', genreRouter)
app.use('/api/movies', movieRouter)
app.use('/api/customers', customerRouter)
app.use('/api/rentals', rentalRoute)
app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)

app.disable('x-powered-by');
app.use(express.static('/public'));
const port = process.env.PORT || `3030`;
app.listen(3030, () => {
    console.log(`Your app is running on http://localhost:${port}`);
})