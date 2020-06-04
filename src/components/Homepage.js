import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import TweetList from './TweetList'
import Tweet from './Tweet'
import { Redirect } from 'react-router-dom'

class Homepage extends React.Component {

    state = { tweets: [], data: '', id: '', others: [], profile: false, searched: false, searchId: '' }
    

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

    myProfile = (event) => {
        this.setState({ profile: true })
        
    }

    async componentDidMount() {

        window.addEventListener('load', this.myHomepage);
     }

    onDelete = (event) => {
        event.target.parentElement.remove()
    }

    onSearch = async (name) => {
        const details = {
            name: name
        }
        const response = await axios.post('http://localhost:3001/search/user', details)
        const searchId = response.data
        if(searchId){
            this.setState({ searched: true, searchId: response.data.user[0]._id })
        }
        
    }

    render() {

        if(this.state.profile) {
            return <Redirect to={{
                pathname: '/profile',
                state: { id: this.state.id }
            }} />
        }

        if(this.state.searched) {
            return <Redirect to={{
                pathname: '/profile',
                state: { id: this.state.searchId }
            }}/>
        }

        return (
            <div>
                <SearchBar className="search-bar" onSearch={this.onSearch} />
                <Tweet onPostSubmit={this.onPost} />
                <div>{this.state.data}</div>
                <TweetList tweets={this.state.others} onDeleteTile={this.onDelete} />
                <button onClick={this.myProfile}>Profile</button>
            </div>
        )
    }
}

export default Homepage