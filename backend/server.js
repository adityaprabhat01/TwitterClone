const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const tweetRouter = require('./routes/tweet')
const userRouter = require('./routes/user');

const app = express()
app.use(express.json())
app.use(cors());

port = 3001

mongoose.connect('mongodb://127.0.0.1:27017/twitter-clone', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (error) => {

    if (error) {
        return console.log("Could not connect to mongodb")
    }

    return console.log('Connection Successful')
})

app.use('/user', userRouter)
app.use('/tweet', tweetRouter)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})