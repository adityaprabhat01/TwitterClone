import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import TweetList from './TweetList'
import Tweet from './Tweet'
import { Redirect } from 'react-router-dom'

class Homepage extends React.Component {
  state = {
    tweets: [],
    tweetToPost: '',
    postedTweets: [],
    data: "",
    id: "",
    profile: false,
    searched: false,
    searchId: "",
    following: [],
  }

  myHomepage = async (event) => {
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
    const index = this.state.tweets.indexOf(text)
    const ids = {
      id: this.state.id,
      tweetId: this.state.tweetIds[index],
    }
    console.log(ids)
    const response = axios.post('http://localhost:3001/user/likes', ids)
  }

  onSearch = async (name) => {
    const details = {
      name: name,
    }
    const response = await axios.post(
      "http://localhost:3001/search/user",
      details
    )
    const searchId = response.data
    if (searchId) {
      await this.setState({
        searched: true,
        searchId: response.data.user[0]._id,
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
              following: this.state.following  
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
              following: this.state.following
            },
          }}
        />
      )
    }

    return (
      <div>
        <SearchBar className="search-bar" onSearch={this.onSearch} />
        <Tweet onPostSubmit={this.onPost} />
        <div>{this.state.data}</div>
        <TweetList tweets={this.state.postedTweets} onDeleteTile={this.onDelete} onLike={this.onLike} />
        <TweetList tweets={this.state.tweets} onDeleteTile={this.onDelete} onLike={this.onLike} />
        <button onClick={this.myProfile}>Profile</button>
      </div>
    )
  }
}

export default Homepage
