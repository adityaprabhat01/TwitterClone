import React from 'react'
import axios from 'axios'
import TweetList from './TweetList'

class Profile extends React.Component {

    state = { tweets: [] }

    async componentDidMount() {
        console.log('component mounted')
        const id = this.props.location.state.id
        const response = await axios.get(`http://localhost:3001/user/tweet/user/${id}`)
        
        response.data.map((tweet) => {
            this.setState(prevState => ({
                tweets: [...prevState.tweets, tweet.tweet]
            }))
        })
     }

    onDelete = (event) => {
        event.target.parentElement.remove()
    }

    render() {
        return (
            <div>
                <TweetList tweets={this.state.tweets} onDeleteTile={this.onDelete} />
            </div>
        )
    }
}

export default Profile 