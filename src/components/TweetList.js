import React from 'react'
import TweetTile from './TweetTile'

const TweetList = ({ tweets, onDeleteTile, onLike, onUnlike, liked, source, likedTweets }) => {
    console.log(likedTweets)
    if (tweets.length !== 0) {
        const renderedList = tweets.map(tweet => {
            return (
                <TweetTile tweet={tweet.tweet} tweetId={tweet.tweetId} onDeleteTile={onDeleteTile} onLike={onLike} onUnlike={onUnlike} liked={liked} source={source} likedTweets={likedTweets} />
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