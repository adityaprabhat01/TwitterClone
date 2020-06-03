import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import TweetList from './TweetList'
import Tweet from './Tweet'

class Homepage extends React.Component {

    state = { tweets: [], data: '', id: '', others: [] }
    

    onPost = (tweetText) => {

        this.setState(prevState => ({
            tweets: [...prevState.tweets, tweetText]
        }))

        const postedTweet = {
            tweet: tweetText
        }

        axios.post(`http://localhost:3001/user/tweet/user/${this.state.id}`, postedTweet)
            
    }

    myHomepage = async (event) => {
        event.preventDefault()
        const id = this.props.location.state.id
        this.setState({ id: this.props.location.state.id })
        console.log(this.state.id)
        const response = await axios.get(`http://localhost:3001/user/tweet/user/${this.state.id}`)
        response.data.map((tweet) => {
            this.setState(prevState => ({
                others: [...prevState.others, tweet.tweet]
            }))
        })
        console.log(response.data)
    }

    async componentDidMount() {

        window.addEventListener('load', this.myHomepage);
     }

    onDelete = (event) => {
        event.target.parentElement.remove()
    }

    render() {
        return (
            <div>
                <SearchBar className="search-bar" />
                <Tweet onPostSubmit={this.onPost} />
                <div>{this.state.data}</div>
                <TweetList tweets={this.state.others} onDeleteTile={this.onDelete} />
            </div>
        )
    }
}

export default Homepage