import React from 'react'
import TweetTile from './TweetTile'

const TweetList = ({ tweets, onDeleteTile, onLike, liked, source, likedTweetIds }) => {
    if (tweets.length !== 0) {
        const renderedList = tweets.map(tweet => {
            return (
                <TweetTile tweet={tweet.tweet} tweetId={tweet.tweetId} onDeleteTile={onDeleteTile} onLike={onLike} liked={liked} source={source} likedTweetIds={likedTweetIds} />
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