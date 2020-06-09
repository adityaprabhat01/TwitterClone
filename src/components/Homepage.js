import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import TweetList from "./TweetList";
import Tweet from "./Tweet";
import { Redirect } from "react-router-dom";

class Homepage extends React.Component {
  state = {
    tweets: [],
    tweetIds: [],
    data: "",
    id: "",
    profile: false,
    searched: false,
    searchId: "",
    following: [],
  };

  onPost = async (tweetText) => {
    this.setState((prevState) => ({
      tweets: [...prevState.tweets, tweetText],
    }));
    const postedTweet = {
      tweet: tweetText,
    };
    await axios.post(
      `http://localhost:3001/user/tweet/user/${this.state.id}`,
      postedTweet
    );
  };

  myHomepage = async (event) => {
    const id = this.props.location.state.id;
    await this.setState({ id: id });
    const response = await axios.get(`http://localhost:3001/user/tweet/homepage/${this.state.id}`)
    console.log(response)
    response.data.tweetsToSend.map((tweet) => {
      this.setState((prevState) => ({
        tweets: [...prevState.tweets, tweet.tweet],
        tweetIds: [...prevState.tweetIds, tweet._id]
      }));
    });

    response.data.following.map((follow) => {
      this.setState((prevState) => ({
        following: [...prevState.following, follow],
      }));
    });
  };

  myProfile = async (event) => {
    await this.setState({ profile: true });
  };

  async componentDidMount() {
    window.addEventListener("load", this.myHomepage());
  }

  onDelete = (event) => {
    event.target.parentElement.remove();
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

  onSearch = async (name) => {
    const details = {
      name: name,
    };
    const response = await axios.post(
      "http://localhost:3001/search/user",
      details
    );
    const searchId = response.data;
    if (searchId) {
      await this.setState({
        searched: true,
        searchId: response.data.user[0]._id,
      });
    }
  };

  render() {
    if (this.state.profile) {
      return (
        <Redirect
          to={{
            pathname: "/profile",
            state: { id: this.state.id },
          }}
        />
      );
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
            },
          }}
        />
      );
    }

    return (
      <div>
        <SearchBar className="search-bar" onSearch={this.onSearch} />
        <Tweet onPostSubmit={this.onPost} />
        <div>{this.state.data}</div>
        <TweetList tweets={this.state.tweets} onDeleteTile={this.onDelete} onLike={this.onLike} />
        <button onClick={this.myProfile}>Profile</button>
      </div>
    );
  }
}

export default Homepage;
