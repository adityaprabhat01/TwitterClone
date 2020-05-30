import React from 'react'
//import TweetList from './TweetList'

//return <TweetList tweets={this.state.tweets} onDeleteTile={this.onDelete} />
//props: tweets by that person received from db in an array

class Profile extends React.Component {

    onDelete = (event) => {
        event.target.parentElement.remove()
    }

    render() {
        return (
            <div>
                <div>hello welcome to profile page</div>
            </div>
        )
    }
}

export default Profile 