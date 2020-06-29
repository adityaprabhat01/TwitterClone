import React from 'react'
import TweetTile from './TweetTile'

const TweetList = ({ tweets, name, username, tweetDetails, onDeleteTile, onLike, onUnlike, liked, source, likedTweets, retweets, onRetweet, onUnretweet, retweeted, toRetweet }) => {
    var i = -1
    if (tweets.length !== 0) {
        const renderedList = tweets.map(tweet => {
            i++
            return (
                <TweetTile tweet={tweet.tweet} tweetDetails={tweetDetails[i]} name={name} username={username} tweetId={tweet.tweetId} onDeleteTile={onDeleteTile} onLike={onLike} onUnlike={onUnlike} liked={liked} source={source} likedTweets={likedTweets} retweets={retweets} onRetweet={onRetweet} onUnretweet={onUnretweet} retweeted={retweeted} toRetweet={toRetweet} />
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