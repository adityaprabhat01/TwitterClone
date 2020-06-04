import React from 'react'
import axios from 'axios'
import TweetList from './TweetList'
import { Redirect } from 'react-router-dom'

class Profile extends React.Component {

    state = { tweets: [], id: '', homepage: false }

    async componentDidMount() {
        console.log('component mounted')
        const id = this.props.location.state.id
        this.setState({ id: id })
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

    myHomepage = () => {
        this.setState({ homepage: true })
    }

    render() {

        if(this.state.homepage) {
            return <Redirect to={{
                pathname: '/homepage',
                state: { id: this.state.id }
            }} />
        }

        return (
            <div>
                <TweetList tweets={this.state.tweets} onDeleteTile={this.onDelete} />
                <button onClick={this.myHomepage}>Homepage</button>
            </div>
        )
    }
}

export default Profile 