import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import TweetList from './TweetList'
import Tweet from './Tweet'
import { Redirect } from 'react-router-dom'

class Homepage extends React.Component {
  state = {
    myHomepage: false,
    tweets: [],
    tweetDetails: [],
    following: [],
    likedTweets: [],
    retweets: [],
    username: '',
    name: '',
    postedTweets: [],
    id: "",
    profile: false,
    searched: false,
    searchId: ""
  }

  myHomepage = async () => {

    const id = this.props.location.state.id
    await this.setState({ id: id })
    const response = await axios.get(`http://localhost:3001/user/tweet/homepage/${this.state.id}`)
    this.setState({ name: response.data.userDetails.name, username: response.data.userDetails.username })
    response.data.tweetsToSend.map(tweets => {
      tweets.map(tweet => {
        var t = {
          tweetId: tweet._id,
          tweet: tweet.tweet
        }
        this.setState((prevState) => ({
          tweets: [...prevState.tweets, t]
        }))
      })
    })

    response.data.tweetDetails.map(tweet => {
      var t = {
        name: tweet.name,
        username: tweet.username
      }
      this.setState((prevState) => ({
        tweetDetails: [...prevState.tweetDetails, t]
      }))
    })

    response.data.following.map((follow) => {
      this.setState((prevState) => ({
        following: [...prevState.following, follow],
      }))
    })

    response.data.likedTweets.map(tweet => {
      this.setState((prevState) => ({
        likedTweets: [...prevState.likedTweets, tweet]
      }))
    })

    response.data.retweeted.map(tweet => {
      this.setState((prevState) => ({
        retweets: [...prevState.retweets, tweet]
      }))
    })

    this.setState({ myHomepage: true })
  }

  myProfile = async (event) => {
    await this.setState({ profile: true })
  }

  onPost = async (tweetText) => {
    const postedTweet = {
      tweet: tweetText
    }
    const response = await axios.post(`http://localhost:3001/user/tweet/user/${this.state.id}`, postedTweet)
    var t = {
      tweetId: response.data,
      tweet: tweetText
    }
    await this.setState((prevState) => ({
      postedTweets: [...prevState.postedTweets, t]
    }))
  }

  onDelete = (event) => {
    event.target.parentElement.remove()
  }

  onLike = async (event) => {
    const text = event.target.parentElement.childNodes[2].textContent
    var index = 0
    var flag = 0
    var ids = {}
    //from tweets
    for (var i = 0; i < this.state.tweets.length; i++) {
      if (this.state.tweets[index].tweet.includes(text)) {
        flag = 1
        break
      }
      index++
    }

    //from posted tweets
    if (flag === 0) {
      index = 0
      for (var i = 0; i < this.state.postedTweets.length; i++) {
        if (this.state.postedTweets[index].tweet.includes(text)) {
          break
        }
        index++
      }
    }

    if (flag === 1) {
      ids = {
        id: this.state.id,
        tweetId: this.state.tweets[index].tweetId,
      }
    }
    else {
      ids = {
        id: this.state.id,
        tweetId: this.state.postedTweets[index].tweetId,
      }
    }
    const response = await axios.post('http://localhost:3001/user/likes', ids)
    if (flag === 1) {
      this.setState((prevState) => ({
        likedTweets: [...prevState.likedTweets, this.state.tweets[index].tweetId]
      }))
    }
    else {
      this.setState((prevState) => ({
        likedTweets: [...prevState.likedTweets, this.state.postedTweets[index].tweetId]
      }))
    }
  }

  onUnlike = async (event) => {
    const text = event.target.parentElement.childNodes[2].textContent
    var index = 0
    var flag = 0
    var ids = {}
    var id_i = 0
    var i = 0
    //from tweets
    for (var i = 0; i < this.state.tweets.length; i++) {
      if (this.state.tweets[index].tweet.includes(text)) {
        flag = 1
        break
      }
      index++
    }
    //from posted tweets
    if (flag === 0) {
      index = 0
      for (var i = 0; i < this.state.postedTweets.length; i++) {
        if (this.state.postedTweets[index].tweet.includes(text)) {
          break
        }
        index++
      }
    }

    if (flag === 1) {
      ids = {
        id: this.state.id,
        tweetId: this.state.tweets[index].tweetId,
      }
    }
    else {
      ids = {
        id: this.state.id,
        tweetId: this.state.postedTweets[index].tweetId,
      }
    }
    const response = await axios.post('http://localhost:3001/user/unlikes', ids)
    var array = [...this.state.likedTweets]
    id_i = this.state.tweets[index].tweetId
    i = array.indexOf(id_i)
    array.splice(i, 1)
    await this.setState({ likedTweets: array })
  }

  onUnretweet = async (event) => {
    const text = event.target.parentElement.childNodes[2].textContent
    var index = 0
    var id_i = 0
    var i = 0
    while (true) {
      if (this.state.tweets[index].tweet.includes(text)) {
        break
      }
      index++
    }
    const ids = {
      id: this.state.id,
      tweetId: this.state.tweets[index].tweetId,
    }
    const response = await axios.post('http://localhost:3001/user/unretweet', ids)
    var array = [...this.state.retweets]
    id_i = this.state.tweets[index].tweetId
    i = array.indexOf(id_i)
    array.splice(i, 1)
    await this.setState({ retweets: array })
  }

  onRetweet = async (event) => {
    const text = event.target.parentElement.childNodes[2].textContent
    var index = 0
    while (true) {
      if (this.state.tweets[index].tweet.includes(text)) {
        break
      }
      index++
    }
    const ids = {
      id: this.state.id,
      tweetId: this.state.tweets[index].tweetId,
    }
    const response = await axios.post('http://localhost:3001/user/retweet', ids)
    this.setState((prevState) => ({
      retweets: [...prevState.retweets, this.state.tweets[index].tweetId]
    }))
  }

  onSearch = async (name) => {
    const details = {
      name: name
    }
    const response = await axios.post("http://localhost:3001/search/user", details)
    const searchId = response.data
    if (searchId) {
      await this.setState({
        searched: true,
        searchId: response.data.user[0]._id
      })
    }
  }

  async componentDidMount() {
    window.addEventListener("load", this.myHomepage())
  }

  render() {
    if (this.state.profile) {
      return (
        <Redirect
          to={{
            pathname: "/profile",
            state: {
              id: this.state.id,
              following: this.state.following,
              likedTweets: this.state.likedTweets,
            },
          }}
        />
      )
    }

    if (this.state.searched) {
      return (
        <Redirect
          to={{
            pathname: "/profile",
            state: {
              id: this.state.id,
              searchId: this.state.searchId,
              following: this.state.following,
              likedTweets: this.state.likedTweets,
            }
          }}
        />
      )
    }
    if (this.state.myHomepage) {
      return (
        <div>
          <SearchBar className="search-bar" onSearch={this.onSearch} />
          <button onClick={this.myProfile} type="button" className="btn btn-primary">Profile</button>
          <span>{this.state.name}</span>
          <Tweet onPostSubmit={this.onPost} />
          <div className="container" style={{ marginTop: "1rem" }}>
            <TweetList tweets={this.state.postedTweets} tweetDetails={this.state.tweetDetails} name={this.state.name} username={this.state.username} onDeleteTile={this.onDelete} onLike={this.onLike} onUnlike={this.onUnlike} source='homepage' likedTweets={this.state.likedTweets} toRetweet={false} />
            <TweetList tweets={this.state.tweets} tweetDetails={this.state.tweetDetails} onDeleteTile={this.onDelete} onLike={this.onLike} onUnlike={this.onUnlike} source='homepage' likedTweets={this.state.likedTweets} retweets={this.state.retweets} onRetweet={this.onRetweet} onUnretweet={this.onUnretweet} toRetweet={true} />
          </div>
  
        </div>
      )
    }

    return (
      <div></div>
    )
    
  }
}

export default Homepage