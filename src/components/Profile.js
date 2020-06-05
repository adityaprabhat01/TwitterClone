import React from 'react'
import axios from 'axios'
import TweetList from './TweetList'
import { Redirect } from 'react-router-dom'

class Profile extends React.Component {

    state = { tweets: [], id: '', homepage: false, onPageId: '', searchId: '' }

    async componentDidMount() {
        const id = this.props.location.state.id
        const searchId = this.props.location.state.searchId
        await this.setState({ id: id, searchId: searchId })
        if(this.state.searchId){
            const response = await axios.get(`http://localhost:3001/user/tweet/user/${this.state.searchId}`)
            response.data.map((tweet) => {
                this.setState(prevState => ({
                    tweets: [...prevState.tweets, tweet.tweet]
                }))
            })
        }
        else if(this.state.id){
            const response = await axios.get(`http://localhost:3001/user/tweet/user/${this.state.id}`)
            response.data.map((tweet) => {
                this.setState(prevState => ({
                    tweets: [...prevState.tweets, tweet.tweet]
                }))
            })
        }
        
     }

    onDelete = (event) => {
        event.target.parentElement.remove()
    }

    myHomepage = () => {
        this.setState({ homepage: true })
    }

    onFollow = async (event) => {
        event.preventDefault()
        const ids = {
            own: this.state.id
        }
        console.log(ids)
        const response = await axios.post('http://localhost:3001/user/follow', ids)
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
                <button onClick={this.onFollow}>Follow</button>
            </div>
        )
    }
}

export default Profile 