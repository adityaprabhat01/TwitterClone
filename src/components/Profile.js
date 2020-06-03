import React from 'react'
import axios from 'axios'
//import TweetList from './TweetList'

//return <TweetList tweets={this.state.tweets} onDeleteTile={this.onDelete} />
//props: tweets by that person received from db in an array

class Profile extends React.Component {

    state = { data: '' }

    myProfile = async (event) => {
        const response = await axios.get('http://localhost:3001/user/me')
        this.setState({ data: response.data })
    }

    componentDidMount() {
        window.addEventListener('load', this.myProfile);
     }

    onDelete = (event) => {
        event.target.parentElement.remove()
    }

    render() {
        return (
            <div>
                <div>{this.state.data}</div>
            </div>
        )
    }
}

export default Profile 