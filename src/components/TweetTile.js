import React from 'react'

const TweetTile = ({ tweet, tweetId, name, username, tweetDetails, onDeleteTile, onLike, onUnlike, liked, source, likedTweets, retweets, onRetweet, onUnretweet, retweeted, toRetweet }) => {
  //like + not retweet
  if (tweet !== '' && source === 'homepage' && likedTweets.includes(tweetId) && toRetweet && !retweets.includes(tweetId)) {
    return (

      <div className="container">
        <div class="col-12 border" style={{ maxWidth: "600px", padding: "0" }}>
          <div class="card bg-light mb-3" style={{ maxWidth: "100%", marginTop: "1rem", border: "none", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>

            <div style={{ backgroundColor: "#ffffff", width: "15%" }}>
              <div class="col-2">
                <img class="rounded-circle" style={{ height: "60px", width: "60px" }} src="https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjcyMDI4fQ"></img>
              </div>
            </div>

            <div class="card-body bg-white d-flex flex-column" style={{  width: "80%", padding: "0" }}>
            <span class="d-inline-flex flex-row">
                <span class="font-weight-bold">{tweetDetails.name}</span>
                <span class="font-weight-light">&nbsp;&nbsp;@{tweetDetails.username}</span>
              </span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p class="card-text" style={{ marginTop: "0em", marginRight: "0em", marginBottom: "0em" }}>{tweet}</p>
                <div style={{ display: "flex", flexDirection: "row" }}>
                <button onClick={(event) => onUnlike(event)} type="button" className="btn btn-primary" style={{ width: "20%" }}>Unlike</button>
                <button style={{ width: "20%" }} onClick={(event) => onRetweet(event)} type="button" className="btn btn-primary">Retweet</button>
                </div>
                
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
  //not like + not retweet
  else if (tweet !== '' && source === 'homepage' && toRetweet && !retweets.includes(tweetId)) {
    return (

      <div className="container">
        <div class="col-8 border">
          <div class="card bg-light mb-3" style={{ maxWidth: "100%", marginTop: "1rem", border: "none" }}>
            <div class="card-body" style={{ backgroundColor: "#ffffff" }}>
              <div>
                <span>{tweetDetails.name}</span>
                <span>{tweetDetails.username}</span>
              </div>
              <div>
                <p class="card-text">{tweet}</p>
                <button onClick={(event) => onLike(event)} type="button" className="btn btn-primary">Like</button>
                <button onClick={(event) => onRetweet(event)} type="button" className="btn btn-primary">Retweet</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
  //like + retweet
  else if (tweet !== '' && source === 'homepage' && likedTweets.includes(tweetId) && toRetweet && retweets.includes(tweetId)) {
    return (

      <div className="container">
        <div class="col-8 border">
          <div class="card bg-light mb-3" style={{ maxWidth: "100%", marginTop: "1rem", border: "none" }}>
            <div class="card-body" style={{ backgroundColor: "#ffffff" }}>
              <div>
                <span>{tweetDetails.name}</span>
                <span>{tweetDetails.username}</span>
              </div>
              <div><p class="card-text">{tweet}</p>
                <button onClick={(event) => onUnlike(event)} type="button" className="btn btn-primary">Unlike</button>
                <button onClick={(event) => onUnretweet(event)} type="button" className="btn btn-primary">Retweeted</button></div>

            </div>
          </div>
        </div>
      </div>
    );
  }
  //not like + retweet
  else if (tweet !== '' && source === 'homepage' && toRetweet && retweets.includes(tweetId)) {
    return (

      <div className="container">
        <div class="col-8 border">
          <div class="card bg-light mb-3" style={{ maxWidth: "100%", marginTop: "1rem", border: "none" }}>

            <div class="card-body" style={{ backgroundColor: "#ffffff" }}>
              <div>
                <span>{tweetDetails.name}</span>
                <span>{tweetDetails.username}</span>
              </div>
              <div><p class="card-text">{tweet}</p>
                <button onClick={(event) => onLike(event)} type="button" className="btn btn-primary">Like</button>
                <button onClick={(event) => onUnretweet(event)} type="button" className="btn btn-primary">Retweeted</button></div>

            </div>
          </div>
        </div>
      </div>
    );
  }
  //my tweets liked
  else if (tweet !== '' && source === 'homepage' && likedTweets.includes(tweetId)) {

    return (

      <div className="container">
        <div class="col-8 border">
          <div class="card bg-light mb-3" style={{ maxWidth: "100%", marginTop: "1rem", border: "none" }}>

            <div class="card-body" style={{ backgroundColor: "#ffffff" }}>
              <span>{name}</span>
              <span>{username}</span>
              <div><p class="card-text">{tweet}</p>
                <button onClick={(event) => onUnlike(event)} type="button" className="btn btn-primary">Unlike</button></div>

            </div>
          </div>
        </div>
      </div>
    );
  }
  //my tweets not liked
  else if (tweet !== '' && source === 'homepage') {
    return (

      <div className="container">
        <div class="col-8 border">
          <div class="card bg-light mb-3" style={{ maxWidth: "100%", marginTop: "1rem", border: "none" }}>

            <div class="card-body" style={{ backgroundColor: "#ffffff" }}>
              <span>{name}</span>
              <span>{username}</span>
              <div><p class="card-text">{tweet}</p>
                <button onClick={(event) => onLike(event)} type="button" className="btn btn-primary">Like</button></div>

            </div>
          </div>
        </div>
      </div>
    );
  }

  else if (liked) {
    return (

      <div className="container">
        <div class="col-8 border">
          <div class="card bg-light mb-3" style={{ maxWidth: "100%", marginTop: "1rem", border: "none" }}>

            <div class="card-body" style={{ backgroundColor: "#ffffff" }}>
              <div>
                <span>{tweetDetails.name}</span>
                <span>{tweetDetails.username}</span>
              </div>
              <div><p class="card-text">{tweet}</p>
                <button onClick={(event) => onUnlike(event)} type="button" className="btn btn-primary">Unlike</button></div>

            </div>
          </div>
        </div>
      </div>
    );
  }
  //my tweets liked
  else if (tweet !== '' && source === 'profile' && likedTweets.includes(tweetId) && !toRetweet) {
    return (

      <div className="container">
        <div class="col-8 border">
          <div class="card bg-light mb-3" style={{ maxWidth: "100%", marginTop: "1rem", border: "none" }}>

            <div class="card-body" style={{ backgroundColor: "#ffffff" }}>
              <div>
                <span>{tweetDetails.name}</span>
                <span>{tweetDetails.username}</span>
              </div>
              <div>
                <p class="card-text">{tweet}</p>
                <button onClick={(event) => onUnlike(event)} type="button" className="btn btn-primary">Unlike</button>
                <button onClick={(event) => onDeleteTile(event)} type="button" className="btn btn-primary">Delete</button></div>

            </div>
          </div>
        </div>
      </div>
    );
  }
  //my tweets not liked
  else if (tweet !== '' && source === 'profile' && !toRetweet) {
    return (

      <div className="container">
        <div class="col-8 border" style={{ backgroundColor: "#ffffff" }}>
          <div class="card bg-light mb-3" style={{ maxWidth: "100%", marginTop: "1rem", border: "none" }}>

            <div class="card-body" style={{ backgroundColor: "#ffffff" }}>
              <div>
                <span>{tweetDetails.name}</span>
                <span>{tweetDetails.username}</span>
              </div>
              <div>
                <p class="card-text">{tweet}</p>
                <button onClick={(event) => onLike(event)} type="button" className="btn btn-primary">Like</button>
                <button onClick={(event) => onDeleteTile(event)} type="button" className="btn btn-primary">Delete</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
  //like + retweeted
  else if (tweet !== '' && source === 'profile' && likedTweets.includes(tweetId) && toRetweet) {
    return (
      <div className="container">
        <div class="col-8 border">
          <div class="card bg-light mb-3" style={{ maxWidth: "100%", marginTop: "1rem", border: "none" }}>

            <div class="card-body" style={{ backgroundColor: "#ffffff" }}>
              <div>
                <span>{tweetDetails.name}</span>
                <span>{tweetDetails.username}</span>
              </div>
              <div><p class="card-text">{tweet}</p>
                <button onClick={(event) => onUnlike(event)} type="button" className="btn btn-primary">Unlike</button>
                <button onClick={(event) => onUnretweet(event)} type="button" className="btn btn-primary">Retweeted</button></div>

            </div>
          </div>
        </div>
      </div>
    );
  }
  //not like + retweet
  else if (tweet !== '' && source === 'profile' && toRetweet) {
    return (
      <div className="container">
        <div class="col-8 border">
          <div class="card bg-light mb-3" style={{ maxWidth: "100%", marginTop: "1rem", border: "none" }}>

            <div class="card-body" style={{ backgroundColor: "#ffffff" }}>
              <div>
                <span>{tweetDetails.name}</span>
                <span>{tweetDetails.username}</span>
              </div>
              <div><p class="card-text">{tweet}</p>
                <button onClick={(event) => onLike(event)} type="button" className="btn btn-primary">Like</button>
                <button onClick={(event) => onUnretweet(event)} type="button" className="btn btn-primary">Retweeted</button></div>

            </div>
          </div>
        </div>
      </div>
    );
  }
  else {

    return <div></div>;

  }
};

export default TweetTile;