const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const tweetRouter = require('./routes/tweet')
const userRouter = require('./routes/user')
const searchRouter = require('./routes/search')

const app = express()
app.use(express.json())
app.use(cors());

port = 3001
process.setMaxListeners(0)
mongoose.connect('mongodb://127.0.0.1:27017/twitter-clone', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (error) => {

    if (error) {
        return console.log("Could not connect to mongodb")
    }

    return console.log('Connection Successful to mongodb')
})

app.use('/user', userRouter)
app.use('/tweet', tweetRouter)
app.use('/search', searchRouter)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})