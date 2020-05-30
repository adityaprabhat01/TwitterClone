import React from 'react'
import TweetTile from './TweetTile'

const TweetList = ({ tweets, onDeleteTile }) => {

    const renderedList = tweets.map((tweet) => {
        return (
            <TweetTile tweet={tweet} onDeleteTile={onDeleteTile} />
        )
    })

    return (
        <div>{renderedList}</div>
    )
}

export default TweetList