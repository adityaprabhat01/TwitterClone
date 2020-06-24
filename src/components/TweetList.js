import React from 'react'
import TweetTile from './TweetTile'

const TweetList = ({ tweets, onDeleteTile, onLike, onUnlike, liked, source, likedTweets, onRetweet, retweeted }) => {
    if (tweets.length !== 0) {
        const renderedList = tweets.map(tweet => {
            return (
                <TweetTile tweet={tweet.tweet} tweetId={tweet.tweetId} onDeleteTile={onDeleteTile} onLike={onLike} onUnlike={onUnlike} liked={liked} source={source} likedTweets={likedTweets} onRetweet={onRetweet} retweeted={retweeted} />
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