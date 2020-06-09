import React from "react";
import axios from "axios";
import TweetList from "./TweetList";
import { Redirect } from "react-router-dom";

class Profile extends React.Component {
  state = {
    tweets: [],
    tweetIds: [],
    likedTweets: [],
    likedTweetIds: [],
    id: "",
    homepage: false,
    onPageId: "",
    searchId: "",
    followed: false,
    following: [],
    unfollowed: false,
    ownProfile: false,
    viewLiked: false
  };

  async componentDidMount() {
    const id = this.props.location.state.id
    const searchId = this.props.location.state.searchId

    await this.setState({ id: id, searchId: searchId })

    if (this.state.searchId) {

      const following = this.props.location.state.following
      const response = await axios.get(`http://localhost:3001/user/tweet/user/${this.state.searchId}`)

      response.data.map((tweet) => {
        this.setState((prevState) => ({
          tweets: [...prevState.tweets, tweet.tweet],
          tweetIds: [...prevState.tweetIds, tweet._id]
        }))
      })
      console.log(this.state.tweetIds)
      following.map((follow) => {
        this.setState((prevState) => ({
          following: [...prevState.following, follow],
        }));
      });


      if (this.state.following.includes(this.state.searchId)) {
        this.setState({ followed: true });
      } else {
        this.setState({ unfollowed: true });
      }

      this.setState({ ownProfile: false });
    } 
    
    else if (this.state.id) {
      const response = await axios.get(`http://localhost:3001/user/tweet/user/${this.state.id}`)
      response.data.map((tweet) => {
        this.setState((prevState) => ({
          tweets: [...prevState.tweets, tweet.tweet],
          tweetIds: [...prevState.tweetIds, tweet._id]
        }))
      })
      
      this.setState({ ownProfile: true });
    }
  }

  onDelete = async (event) => {
    const text = event.target.parentElement.childNodes[0].textContent;
    const index = this.state.tweets.indexOf(text);
    console.log(index);
    const ids = {
      id: this.state.id,
      tweetId: this.state.tweetIds[index],
    };
    event.target.parentElement.remove();
    const response = await axios.post(
      `http://localhost:3001/user/tweet/delete`,
      ids
    );
  };

  onLike = async (event) => {
    const text = event.target.parentElement.childNodes[0].textContent;
    const index = this.state.tweets.indexOf(text);
    const ids = {
      id: this.state.id,
      tweetId: this.state.tweetIds[index],
    };
    console.log(ids)
    const response = axios.post('http://localhost:3001/user/likes', ids)
  }

  myHomepage = () => {
    this.setState({ homepage: true });
  };

  onFollow = async (event) => {
    event.preventDefault();
    const ids = {
      own: this.state.id,
      toFollow: this.state.searchId,
    };
    const response = await axios.post("http://localhost:3001/user/follow", ids);
    if (response) {
      this.setState({ followed: true, unfollowed: false });
    }
  };

  onUnfollow = async (event) => {
    event.preventDefault();
    const ids = {
      own: this.state.id,
      toUnfollow: this.state.searchId,
    };
    const response = await axios.post(
      "http://localhost:3001/user/unfollow",
      ids
    );
    this.setState({ followed: false, unfollowed: true });
  };

  liked = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `http://localhost:3001/user/likes/${this.state.id}`
    );
    console.log(response.data)
    response.data.map((tweet) => {
      this.setState((prevState) => ({
        likedTweets: [...prevState.likedTweets, tweet[0].tweet],
        likedTweetIds: [...prevState.likedTweetIds, tweet[0]._id]
      }));
    });
    this.setState({ viewLiked: true })
  }

  render() {
    if (this.state.homepage) {
      return (
        <Redirect
          to={{
            pathname: "/homepage",
            state: { id: this.state.id },
          }}
        />
      );
    }

    if (this.state.followed) {
      return (
        <div>
          <TweetList tweets={this.state.tweets} onDeleteTile={this.onDelete} onLike={this.onLike} />
          <button onClick={this.myHomepage}>Homepage</button>
          <button onClick={this.onUnfollow}>Unfollow</button>
        </div>
      );
    }
    if (this.state.unfollowed) {
      return (
        <div>
          <TweetList tweets={this.state.tweets} onDeleteTile={this.onDelete} onLike={this.onLike} />
          <button onClick={this.myHomepage}>Homepage</button>
          <button onClick={this.onFollow}>Follow</button>
        </div>
      );
    }

    if(this.state.viewLiked) {
      return (<div>
        <TweetList tweets={this.state.tweets} onDeleteTile={this.onDelete} onLike={this.onLike} />
        <button onClick={this.myHomepage}>Homepage</button>
        <button onClick={this.onFollow}>Follow</button>
        <div>Liked Tweets</div>
        <TweetList tweets={this.state.likedTweets} onDeleteTile={this.onDelete} onLike={this.onLike} liked={true} />
      </div>
      )
    }

    if (this.state.ownProfile) {
      return (
        <div>
          <TweetList tweets={this.state.tweets} onDeleteTile={this.onDelete} onLike={this.onLike} />
          <button onClick={this.myHomepage}>Homepage</button>
          <button onClick={this.liked}>Show likes</button>
        </div>
      );
    }

    return (
      <div>
        <TweetList tweets={this.state.tweets} onDeleteTile={this.onDelete} onLike={this.onLike} />
        <button onClick={this.myHomepage}>Homepage</button>
        <button onClick={this.onFollow}>Follow</button>
      </div>
    );
  }
}

export default Profile;
