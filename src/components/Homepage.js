import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import TweetList from './TweetList'
import Tweet from './Tweet'
import { Redirect } from 'react-router-dom'

class Homepage extends React.Component {
  state = {
    tweets: [],
    following: [],
    likedTweets: [],
    retweets: [],
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

    console.log(this.state.retweets)
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
    const text = event.target.parentElement.childNodes[0].textContent
    var index = 0
    while(true) {
       if (this.state.tweets[index].tweet.includes(text)){
         break
       }
       index++
    }
    const ids = {
      id: this.state.id,
      tweetId: this.state.tweets[index].tweetId,
    }
    const response = await axios.post('http://localhost:3001/user/likes', ids)
    this.setState((prevState) => ({
      likedTweets: [...prevState.likedTweets, this.state.tweets[index].tweetId]
    }))
  }

  onUnlike = async (event) => {
    const text = event.target.parentElement.childNodes[0].textContent
    var index = 0
    var id_i = 0
    var i = 0
    while(true) {
       if (this.state.tweets[index].tweet.includes(text)){
         break
       }
       index++
      }
    const ids = {
      id: this.state.id,
      tweetId: this.state.tweets[index].tweetId,
    }
    const response = await axios.post('http://localhost:3001/user/unlikes', ids)
    var array = [...this.state.likedTweets]
    id_i = this.state.tweets[index].tweetId
    i = array.indexOf(id_i)
    array.splice(i, 1)
    await this.setState({ likedTweets: array })
  }

  onUnretweet = async (event) => {
    const text = event.target.parentElement.childNodes[0].textContent
    var index = 0
    var id_i = 0
    var i = 0
    while(true) {
       if (this.state.tweets[index].tweet.includes(text)){
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
    const text = event.target.parentElement.childNodes[0].textContent
    var index = 0
    while(true) {
       if (this.state.tweets[index].tweet.includes(text)){
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

    return (
      <div>
        <SearchBar className="search-bar" onSearch={this.onSearch} />
        <Tweet onPostSubmit={this.onPost} />
        
        <TweetList tweets={this.state.postedTweets} onDeleteTile={this.onDelete} onLike={this.onLike} onUnlike={this.onUnlike} source='homepage' likedTweets={this.state.likedTweets} toRetweet={false} />
        <TweetList tweets={this.state.tweets} onDeleteTile={this.onDelete} onLike={this.onLike} onUnlike={this.onUnlike} source='homepage' likedTweets={this.state.likedTweets} retweets={this.state.retweets} onRetweet={this.onRetweet} onUnretweet={this.onUnretweet} toRetweet={true} />
        <button onClick={this.myProfile}>Profile</button>
      </div>
    )
  }
}

export default Homepage