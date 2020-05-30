import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import TweetList from './TweetList'
import Tweet from './Tweet'

class Homepage extends React.Component {

    state = { tweets: [] };
    

    onPost = (tweetText) => {

        this.setState(prevState => ({
            tweets: [...prevState.tweets, tweetText]
        }))

        const postedTweet = {
            tweet: tweetText
        }

        axios.post('http://localhost:3001/tweet/add', postedTweet)
            
    }

    onDelete = (event) => {
        event.target.parentElement.remove()
    }

    render() {
        return (
            <div>
                <SearchBar className="search-bar" />
                <Tweet onPostSubmit={this.onPost} />
                <TweetList tweets={this.state.tweets} onDeleteTile={this.onDelete} />
            </div>
        )
    }
}

export default Homepage;