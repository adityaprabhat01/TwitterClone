const express = require("express")
const router = express.Router()
let User = require("../models/User")
let Tweet = require("../models/Tweet")
let Follow = require("../models/Follows")
let Likes = require("../models/Likes")

router.post("/signup", (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const username = req.body.username
  const password = req.body.password

  const newUser = new User({ name, email, username, password })
  const newFollowList = new Follow({ own: newUser._id })
  const newLikesList = new Likes({ own: newUser._id })

  newUser
    .save()
    .then()
    .catch((err) => res.status(400).json("Error: " + err))

  newFollowList
    .save()
    .then()
    .catch((err) => res.status(400).json("Error: " + err))

  newLikesList
    .save()
    .then()
    .catch((err) => res.status(400).json("Error: " + err))

  res.send(true)
})

router.post("/login", (req, res) => {
  const username = req.body.username
  const password = req.body.password

  const userData = User.findByUsername(username, password)

  userData
    .then((data) => res.send({ data: data }))
    .catch((error) => res.send(false))
})

router.post("/tweet/user/:id", async (req, res) => {
  await Tweet.create(req.body)
    .then(async (data) => {
      await User.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { tweets: data._id } },
        { new: true }
      )
      res.send(data._id)
    })
    .catch()
  res.send(true)
})

router.get("/tweet/user/:id", async (req, res) => {
  console.log(req.params.id)
  await User.find({ _id: req.params.id })
    .populate("tweets")
    .then((tweets) => {
      const tweetsToSend = []
      tweetsToSend.push(tweets[0].tweets)
      res.send({ tweetsToSend })
    })
    .catch()
})

router.get("/tweet/homepage/:id", async (req, res) => {
  var tweetsToSend = []
  var count = 0
  await Follow.find({ own: req.params.id })
    .then((data) => {
      const following = data[0].following
      const num = following.length
      following.map(async (_id) => {
        await User.find({ _id })
          .populate("tweets")
          .then(async (data) => {
            console.log(data[0].tweets)
            await tweetsToSend.push(data[0].tweets)
            count++
            if (num === count) {
              res.send({ tweetsToSend, following })
            }
          })
          .catch()
      })
    })
    .catch()
})

router.post("/follow", async (req, res) => {
  await Follow.findOneAndUpdate(
    { own: req.body.own },
    { $push: { following: req.body.toFollow } },
    { new: true }
  )
  res.send(true)
})

router.post("/unfollow", async (req, res) => {
  await Follow.findOneAndUpdate(
    { own: req.body.own },
    { $pull: { following: req.body.toUnfollow } }
  )
    .then(res.send(true))
    .catch()
})

router.post("/tweet/delete", async (req, res) => {
  await User.findOneAndUpdate(
    { _id: req.body.id },
    { $pull: { tweets: req.body.tweetId } }
  )
    .then()
    .catch()
  await Tweet.findOneAndRemove({ _id: req.body.tweetId }).then().catch()
})

router.post("/likes", async (req, res) => {
  await Likes.findOneAndUpdate({ own: req.body.id }, { $push: { likes: req.body.tweetId } }, { new: true } )//.then((data) => {
})

router.get('/likes/:id', async (req, res) => {
  var count = 0
  await Likes.find({ own: req.params.id }).then(data => {
    console.log(data)
    const likedTweetsId = data[0].likes
    const num = data[0].likes.length
    var tweetsToSend = []
    likedTweetsId
      .map(async (likedTweetId) => {
        await Tweet.find({ _id: likedTweetId }).then(async (tweet) => {
          await tweetsToSend.push(tweet)
          count++
          if (count === num) {
            res.send(tweetsToSend)
          }
        })
      })
  })
  .catch()
})

module.exports = router