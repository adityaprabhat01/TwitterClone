import React from 'react'

const TweetTile = ({ tweet, tweetId, onDeleteTile, onLike, onUnlike, liked, source, likedTweets, onRetweet, retweeted }) => {
  if (tweet !== '' && source === 'homepage'  && likedTweets.includes(tweetId)) {
    return (
      <div className="container">
        {tweet}
        <button onClick={(event) => onUnlike(event)}>Unlike</button>
      </div>
    );
  }

  else if (tweet !== '' && source === 'homepage') {
    return (
      <div className="container">
        {tweet}
        <button onClick={(event) => onLike(event)}>Like</button>
      </div>
    );
  }

  else if(liked) {
    return (
      <div className="container">
        {tweet}
        <button onClick={(event) => onUnlike(event)}>Unlike</button>
      </div>
    );
  }

  else if (tweet !== '' && source === 'profile' && likedTweets.includes(tweetId)) {
    return (
      <div className="container">
        {tweet}
        <button onClick={(event) => onUnlike(event)}>Unlike</button>
        <button onClick={(event) => onDeleteTile(event)} type="button" className="btn btn-primary">
          Delete
        </button>
      </div>
    );
  }

  else if (tweet !== '' && source === 'profile') {
    return (
      <div className="container">
        {tweet}
        <button onClick={(event) => onLike(event)}>Like</button>
        <button onClick={(event) => onDeleteTile(event)} type="button" className="btn btn-primary">
          Delete
        </button>
      </div>
    );
  }

  else {

    return <div></div>;

  }
};

export default TweetTile;