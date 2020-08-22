const mongoose = require('mongoose')
const genreRouter = require('./routes/genre.routes')
const customerRouter = require('./routes/customer.routes')
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost:27017/vidly', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to mongodb'))
    .catch(err => console.error("Can't connect to mongodb", err))

mongoose.set('useFindAndModify', false);

app.use(express.json());
app.use('/api/genres', genreRouter)
app.use('/api/customers', customerRouter)


app.use(express.static('/public'));
const port = process.env.PORT || `3030`;
app.listen(3030, () => {
    console.log(`Your app is running on http://localhost:${port}`);
})