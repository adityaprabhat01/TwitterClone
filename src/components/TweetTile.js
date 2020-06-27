import React from 'react'

const TweetTile = ({ tweet, tweetId, onDeleteTile, onLike, onUnlike, liked, source, likedTweets, retweets, onRetweet, onUnretweet, retweeted, toRetweet }) => {
  //like + not retweet
  if (tweet !== '' && source === 'homepage' && likedTweets.includes(tweetId) && toRetweet && !retweets.includes(tweetId)) {
    return (

      <div className="container">
        <div class="col-8">
          <div class="card bg-light mb-3" style={{ maxWidth: "100%" }}>
            <div class="card-header">Header</div>
            <div class="card-body">
              <p class="card-text">{tweet}</p>
              <button onClick={(event) => onUnlike(event)} type="button" className="btn btn-primary">Unlike</button>
              <button onClick={(event) => onRetweet(event)} type="button" className="btn btn-primary">Retweet</button>
            </div>
          </div>
        </div>
      </div>


      /*<div className="container">
        {tweet}
        <button onClick={(event) => onUnlike(event)}>Unlike</button>
        <button onClick={(event) => onRetweet(event)}>Retweet</button>
      </div>*/
    );
  }
  //not like + not retweet
  else if (tweet !== '' && source === 'homepage' && toRetweet && !retweets.includes(tweetId)) {
    return (

      <div className="container">
        <div class="col-8">
          <div class="card bg-light mb-3" style={{ maxWidth: "100%" }}>
            <div class="card-header">Header</div>
            <div class="card-body">
              <p class="card-text">{tweet}</p>
              <button onClick={(event) => onLike(event)} type="button" className="btn btn-primary">Like</button>
              <button onClick={(event) => onRetweet(event)} type="button" className="btn btn-primary">Retweet</button>
            </div>
          </div>
        </div>
      </div>


      /*<div className="container">
        {tweet}
        <button onClick={(event) => onLike(event)}>Like</button>
        <button onClick={(event) => onRetweet(event)}>Retweet</button>
      </div>*/
    );
  }
  //like + retweet
  else if (tweet !== '' && source === 'homepage' && likedTweets.includes(tweetId) && toRetweet && retweets.includes(tweetId)) {
    return (

      <div className="container">
        <div class="col-8">
          <div class="card bg-light mb-3" style={{ maxWidth: "100%" }}>
            <div class="card-header">Header</div>
            <div class="card-body">
              <p class="card-text">{tweet}</p>
              <button onClick={(event) => onUnlike(event)} type="button" className="btn btn-primary">Unlike</button>
              <button onClick={(event) => onUnretweet(event)} type="button" className="btn btn-primary">Retweeted</button>
            </div>
          </div>
        </div>
      </div>


      /*<div className="container">
        {tweet}
        <button onClick={(event) => onUnlike(event)}>Unlike</button>
        <button onClick={(event) => onUnretweet(event)}>Retweeted</button>
      </div>*/
    );
  }
  //not like + retweet
  else if (tweet !== '' && source === 'homepage' && toRetweet && retweets.includes(tweetId)) {
    return (

      <div className="container">
        <div class="col-8">
          <div class="card bg-light mb-3" style={{ maxWidth: "100%" }}>
            <div class="card-header">Header</div>
            <div class="card-body">
              <p class="card-text">{tweet}</p>
              <button onClick={(event) => onLike(event)} type="button" className="btn btn-primary">Like</button>
              <button onClick={(event) => onUnretweet(event)} type="button" className="btn btn-primary">Retweeted</button>
            </div>
          </div>
        </div>
      </div>


      /*<div className="container">
        {tweet}
        <button onClick={(event) => onLike(event)}>Like</button>
        <button onClick={(event) => onUnretweet(event)}>Retweeted</button>
      </div>*/
    );
  }
  //my tweets liked
  else if (tweet !== '' && source === 'homepage' && likedTweets.includes(tweetId)) {
    return (

      <div className="container">
        <div class="col-8">
          <div class="card bg-light mb-3" style={{ maxWidth: "100%" }}>
            <div class="card-header">Header</div>
            <div class="card-body">
              <p class="card-text">{tweet}</p>
              <button onClick={(event) => onUnlike(event)} type="button" className="btn btn-primary">Unlike</button>
            </div>
          </div>
        </div>
      </div>


      /*<div className="container">
        {tweet}
        <button onClick={(event) => onUnlike(event)}>Unlike</button>
      </div>*/
    );
  }
  //my tweets not liked
  else if (tweet !== '' && source === 'homepage') {
    return (

      <div className="container">
        <div class="col-8">
          <div class="card bg-light mb-3" style={{ maxWidth: "100%" }}>
            <div class="card-header">Header</div>
            <div class="card-body">
              <p class="card-text">{tweet}</p>
              <button onClick={(event) => onLike(event)} type="button" className="btn btn-primary">Like</button>
            </div>
          </div>
        </div>
      </div>


      /*<div className="container">
        {tweet}
        <button onClick={(event) => onLike(event)}>Like</button>
      </div>*/
    );
  }

  else if (liked) {
    return (

      <div className="container">
        <div class="col-8">
          <div class="card bg-light mb-3" style={{ maxWidth: "100%" }}>
            <div class="card-header">Header</div>
            <div class="card-body">
              <p class="card-text">{tweet}</p>
              <button onClick={(event) => onUnlike(event)} type="button" className="btn btn-primary">Unlike</button>
            </div>
          </div>
        </div>
      </div>


      /*<div className="container">
        {tweet}
        <button onClick={(event) => onUnlike(event)}>Unlike</button>
      </div>*/
    );
  }
  //my tweets liked
  else if (tweet !== '' && source === 'profile' && likedTweets.includes(tweetId) && !toRetweet) {
    return (

      <div className="container">
        <div class="col-8">
          <div class="card bg-light mb-3" style={{ maxWidth: "100%" }}>
            <div class="card-header">Header</div>
            <div class="card-body">
              <p class="card-text">{tweet}</p>
              <button onClick={(event) => onUnlike(event)} type="button" className="btn btn-primary">Unlike</button>
              <button onClick={(event) => onDeleteTile(event)} type="button" className="btn btn-primary">Delete</button>
            </div>
          </div>
        </div>
      </div>


      /*<div className="container">
        {tweet}
        <button onClick={(event) => onUnlike(event)}>Unlike</button>
        <button onClick={(event) => onDeleteTile(event)} type="button" className="btn btn-primary">
          Delete
        </button>
      </div>*/
    );
  }
  //my tweets not liked
  else if (tweet !== '' && source === 'profile' && !toRetweet) {
    return (

      <div className="container">
        <div class="col-8">
          <div class="card bg-light mb-3" style={{ maxWidth: "100%" }}>
            <div class="card-header">Header</div>
            <div class="card-body">
              <p class="card-text">{tweet}</p>
              <button onClick={(event) => onLike(event)} type="button" className="btn btn-primary">Like</button>
              <button onClick={(event) => onDeleteTile(event)} type="button" className="btn btn-primary">Delete</button>
            </div>
          </div>
        </div>
      </div>


      /*<div className="container">
        {tweet}
        <button onClick={(event) => onLike(event)}>Like</button>
        <button onClick={(event) => onDeleteTile(event)} type="button" className="btn btn-primary">
          Delete
        </button>
      </div>*/
    );
  }
  //like + retweeted
  else if (tweet !== '' && source === 'profile' && likedTweets.includes(tweetId) && toRetweet) {
    return (
      <div className="container">
        <div class="col-8">
          <div class="card bg-light mb-3" style={{ maxWidth: "100%" }}>
            <div class="card-header">Header</div>
            <div class="card-body">
              <p class="card-text">{tweet}</p>
              <button onClick={(event) => onUnlike(event)} type="button" className="btn btn-primary">Unlike</button>
              <button onClick={(event) => onUnretweet(event)} type="button" className="btn btn-primary">Retweeted</button>
            </div>
          </div>
        </div>
      </div>


      /*<div className="container">
        {tweet}
        <button onClick={(event) => onUnlike(event)}>Unlike</button>
        <button onClick={(event) => onUnretweet(event)}>Retweeted</button>
      </div>*/
    );
  }
  //not like + retweet
  else if (tweet !== '' && source === 'profile' && toRetweet) {
    return (
      <div className="container">
        <div class="col-8">
          <div class="card bg-light mb-3" style={{ maxWidth: "100%" }}>
            <div class="card-header">Header</div>
            <div class="card-body">
              <p class="card-text">{tweet}</p>
              <button onClick={(event) => onLike(event)} type="button" className="btn btn-primary">Like</button>
              <button onClick={(event) => onUnretweet(event)} type="button" className="btn btn-primary">Retweeted</button>
            </div>
          </div>
        </div>
      </div>



      /*<div className="container">
        {tweet}
        <button onClick={(event) => onLike(event)}>Like</button>
        <button onClick={(event) => onUnretweet(event)}>Retweeted</button>
      </div>*/
    );
  }
  else {

    return <div></div>;

  }
};

export default TweetTile;