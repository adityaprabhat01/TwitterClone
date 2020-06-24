/* 
  onDelete()
  onLike()
  onFollow()
  onUnfollow()
  showLikes()
*/

import React from "react"
import axios from "axios"
import TweetList from "./TweetList"
import { Redirect } from "react-router-dom"

class Profile extends React.Component {
  state = {
    tweets: [],
    showLikedTweets: [],
    likedTweets: [],
    retweets: [],
    id: "",
    homepage: false,
    onPageId: "",
    searchId: "",
    followed: false,
    following: [],
    unfollowed: false,
    ownProfile: false,
    viewLiked: false
  }
  
  async componentDidMount() {
    const id = this.props.location.state.id
    const searchId = this.props.location.state.searchId
    const likedTweets = this.props.location.state.likedTweets
    
    await this.setState({ id: id, searchId: searchId, likedTweets: likedTweets })
    
    //others profile
    if (this.state.searchId) {
      const following = this.props.location.state.following
      const response = await axios.get(`http://localhost:3001/user/tweet/user/${this.state.searchId}`)
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
      
      this.setState((prevState) => ({
        following: [...prevState.following, following],
      }))

      if (this.state.following[0].includes(this.state.searchId)) {
        this.setState({ followed: true })
      } 
    
      else {
        this.setState({ unfollowed: true })
      }

      this.setState({ ownProfile: false })
      
    } 
    
    //my profile
    else if (this.state.id) {
      const following = this.props.location.state.following
      const retweets = this.props.location.state.retweets
      const response = await axios.get(`http://localhost:3001/user/tweet/user/${this.state.id}`)
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
      
      this.setState((prevState) => ({
        following: [...prevState.following, following],
      }))

      this.setState((prevState) => ({
        retweets: [...prevState.retweets, retweets],
      }))
      this.setState({ ownProfile: true })
    }
  }

  //delete tweet
  onDelete = async (event) => {
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
    event.target.parentElement.remove()
    const response = await axios.post('http://localhost:3001/user/tweet/delete', ids)
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
    const response = axios.post('http://localhost:3001/user/likes', ids)

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

  onUnlikeGlobally = async (event) => {
    const text = event.target.parentElement.childNodes[0].textContent
    var index = 0
    var id_i = 0
    var i = 0
    while(true) {
       if (this.state.showLikedTweets[index].tweet.includes(text)){
         break
       }
       index++
      }
    const ids = {
      id: this.state.id,
      tweetId: this.state.showLikedTweets[index].tweetId,
    }
    const response = await axios.post('http://localhost:3001/user/unlikes', ids)
    this.showLikes()
  }

  myHomepage = () => {
    this.setState({ homepage: true })
  }

  onFollow = async (event) => {
    event.preventDefault()
    const ids = {
      own: this.state.id,
      toFollow: this.state.searchId
    }
    const response = await axios.post("http://localhost:3001/user/follow", ids)
    await this.setState({ followed: true, unfollowed: false })
  }

  onUnfollow = async (event) => {
    event.preventDefault()
    const ids = {
      own: this.state.id,
      toUnfollow: this.state.searchId
    }
    const response = await axios.post("http://localhost:3001/user/unfollow", ids)
    await this.setState({ followed: false, unfollowed: true })
  }

  showLikes = async (event={}) => {
    //event.preventDefault()
    const response = await axios.get(`http://localhost:3001/user/likes/${this.state.id}`)
    this.setState({ showLikedTweets: [] })
    response.data.map((tweet) => {
      var t = {
        tweetId: tweet._id,
        tweet: tweet.tweet
      }
      this.setState((prevState) => ({
        showLikedTweets: [...prevState.showLikedTweets, t]
      }))
    })
    this.setState({ viewLiked: true })
  }

  onHide = (event) => {
    event.preventDefault()
    this.setState({ viewLiked: false })
  }

  render() {
    if (this.state.homepage) {
      return (
        <Redirect
          to={{
            pathname: "/homepage",
            state: { 
              id: this.state.id
            },
          }}
        />
      )
    }

    if (this.state.followed) {
      return (
        <div>
          <TweetList tweets={this.state.tweets} onDeleteTile={this.onDelete} onLike={this.onLike} onUnlike={this.onUnlike} source='profile' likedTweets={this.state.likedTweets} />
          <button onClick={this.myHomepage}>Homepage</button>
          <button onClick={this.onUnfollow}>Unfollow</button>
        </div>
      )
    }
    if (this.state.unfollowed) {
      return (
        <div>
          <TweetList tweets={this.state.tweets} onDeleteTile={this.onDelete} onLike={this.onLike} onUnlike={this.onUnlike} source='profile' likedTweets={this.state.likedTweets}  />
          <button onClick={this.myHomepage}>Homepage</button>
          <button onClick={this.onFollow}>Follow</button>
        </div>
      )
    }

    if(this.state.viewLiked) {
      return (
      <div>
        <TweetList tweets={this.state.tweets} onDeleteTile={this.onDelete} onLike={this.onLike} onUnlike={this.onUnlike} liked={false} source='profile' likedTweets={this.state.likedTweets}  />
        <button onClick={this.myHomepage}>Homepage</button>
        <button onClick={this.onHide}>Hide</button>
        <div>Liked Tweets</div>
        <TweetList tweets={this.state.showLikedTweets} onDeleteTile={this.onDelete} onUnlike={this.onUnlikeGlobally} liked={true} source='profile' likedTweets={this.state.likedTweets}  />
      </div>
      )
    }

    if (this.state.ownProfile) {
      return (
        <div>
          <TweetList tweets={this.state.tweets} onDeleteTile={this.onDelete} onLike={this.onLike} onUnlike={this.onUnlike} source='profile' likedTweets={this.state.likedTweets}  />
          <button onClick={this.myHomepage}>Homepage</button>
          <button onClick={this.showLikes}>Show likes</button>
        </div>
      )
    }
    return (
      <div>
        <TweetList tweets={this.state.tweets} onDeleteTile={this.onDelete} onLike={this.onLike} onUnlike={this.onUnlike} source='profile' likedTweets={this.state.likedTweets}  />
        <button onClick={this.myHomepage}>Homepage</button>
        <button onClick={this.onFollow}>Follow</button>
      </div>
    )
  }
}

export default Profile