import React from 'react'
import TweetTile from './TweetTile'

const TweetList = ({ tweets, onDeleteTile, onLike, onUnlike, liked, source, likedTweets, retweets, onRetweet, onUnretweet, retweeted, toRetweet }) => {
    
    if (tweets.length !== 0) {
        const renderedList = tweets.map(tweet => {
            return (
                <TweetTile tweet={tweet.tweet} tweetId={tweet.tweetId} onDeleteTile={onDeleteTile} onLike={onLike} onUnlike={onUnlike} liked={liked} source={source} likedTweets={likedTweets} retweets={retweets} onRetweet={onRetweet} onUnretweet={onUnretweet} retweeted={retweeted} toRetweet={toRetweet} />
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