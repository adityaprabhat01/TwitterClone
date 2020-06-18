import React from 'react'
import TweetTile from './TweetTile'

const TweetList = ({ tweets, onDeleteTile, onLike, liked }) => {
    if (tweets.length !== 0) {
        const renderedList = tweets.map(tweet => {
            return (
                <TweetTile tweet={tweet.tweet} onDeleteTile={onDeleteTile} onLike={onLike} liked={liked} />
            )
        })
    
        return (
            <div>
                {renderedList}
                
            </div>
        )
    }

    return (
        <div></div>
    )
}

export default TweetList