const mongoose = require('mongoose')
const router = require('./routes/genre.routes')
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost:27017/vidly', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('connected to mongodb'))
    .catch(err => console.error("can't connect to mongodb", err))

app.use(express.json());
app.use('/api/genres', router)


app.use(express.static('/public'));
const port = process.env.PORT || `3030`;
app.listen(3030, () => {
    console.log(`Your app is connected on http://localhost:${port}`);
})