import React from 'react'
import TweetTile from './TweetTile'

const TweetList = ({ tweets, onDeleteTile, onLike, liked }) => {

    const renderedList = tweets.map((tweet) => {
        return (
            <TweetTile tweet={tweet} onDeleteTile={onDeleteTile} onLike={onLike} liked={liked} />
        )
    })

    return (
        <div>{renderedList}</div>
    )
}

export default TweetList