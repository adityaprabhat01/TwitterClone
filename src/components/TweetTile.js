import React from 'react'

const TweetTile = ({ tweet, tweetId, name, username, tweetDetails, onDeleteTile, onLike, onUnlike, liked, source, likedTweets, retweets, onRetweet, onUnretweet, retweeted, toRetweet }) => {
  //like + not retweet
  if (tweet !== '' && source === 'homepage' && likedTweets.includes(tweetId) && toRetweet && !retweets.includes(tweetId)) {
    return (
      <div class="container p-0">
        <div class="card p-0 m-0 mt-2 mx-auto" style={{ maxWidth: "600px" }}>
          <div class="d-flex flex-row">
            <div class="ml-3 mr-1 mt-2">
              <div style={{ width: "49px" }}>
                <img class="img-fluid rounded-circle" src="https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjcyMDI4fQ"></img>
              </div>
            </div>
            <div class="card-body p-0 ml-2 mr-1 mt-2 d-flex flex-column">
              <div>
                <span class="d-flex flex-row">
                  <span class="font-weight-bold">{tweetDetails.name}</span>
                  <span class="font-weight-light">&nbsp;&nbsp; @{tweetDetails.username}</span>
                </span>
              </div>
              <div class="d-flex flex-column">
                <div>
                  <p class="card-text mt-1 mb-1 mr-4" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1rem" }}>
                    {tweet}
                </p>
                </div>
                <div class="d-flex flex-row justify-content-between mt-3 mb-2 mr-4">
                  <div>
                    <button class="btn btn-info btn-sm" onClick={(event) => onUnlike(event)}>Unlike</button>
                  </div>
                  <div>
                    <button class="btn btn-info btn-sm" onClick={(event) => onRetweet(event)}>Retweet</button>
                  </div>
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

      <div class="container p-0">
        <div class="card p-0 m-0 mt-2 mx-auto" style={{ maxWidth: "600px" }}>
          <div class="d-flex flex-row">
            <div class="ml-3 mr-1 mt-2">
              <div style={{ width: "49px" }}>
                <img class="img-fluid rounded-circle" src="https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjcyMDI4fQ"></img>
              </div>
            </div>
            <div class="card-body p-0 ml-2 mr-1 mt-2 d-flex flex-column">
              <div>
                <span class="d-flex flex-row">
                  <span class="font-weight-bold">{tweetDetails.name}</span>
                  <span class="font-weight-light">&nbsp;&nbsp; @{tweetDetails.username}</span>
                </span>
              </div>
              <div class="d-flex flex-column">
                <div>
                  <p class="card-text mt-1 mb-1 mr-4" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1rem" }}>
                    {tweet}
                </p>
                </div>
                <div class="d-flex flex-row justify-content-between mt-3 mb-2 mr-4">
                  <div>
                    <button class="btn btn-info btn-sm" onClick={(event) => onLike(event)}>Like</button>
                  </div>
                  <div>
                    <button class="btn btn-info btn-sm" onClick={(event) => onRetweet(event)}>Retweet</button>
                  </div>
                </div>
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

      <div class="container p-0">
        <div class="card p-0 m-0 mt-2 mx-auto" style={{ maxWidth: "600px" }}>
          <div class="d-flex flex-row">
            <div class="ml-3 mr-1 mt-2">
              <div style={{ width: "49px" }}>
                <img class="img-fluid rounded-circle" src="https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjcyMDI4fQ"></img>
              </div>
            </div>
            <div class="card-body p-0 ml-2 mr-1 mt-2 d-flex flex-column">
              <div>
                <span class="d-flex flex-row">
                  <span class="font-weight-bold">{tweetDetails.name}</span>
                  <span class="font-weight-light">&nbsp;&nbsp; @{tweetDetails.username}</span>
                </span>
              </div>
              <div class="d-flex flex-column">
                <div>
                  <p class="card-text mt-1 mb-1 mr-4" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1rem" }}>
                    {tweet}
                </p>
                </div>
                <div class="d-flex flex-row justify-content-between mt-3 mb-2 mr-4">
                  <div>
                    <button class="btn btn-info btn-sm" onClick={(event) => onUnlike(event)}>Unlike</button>
                  </div>
                  <div>
                    <button class="btn btn-info btn-sm" onClick={(event) => onUnretweet(event)}>Retweeted</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  //not like + retweet
  else if (tweet !== '' && source === 'homepage' && toRetweet && retweets.includes(tweetId)) {
    return (

      <div class="container p-0">
        <div class="card p-0 m-0 mt-2 mx-auto" style={{ maxWidth: "600px" }}>
          <div class="d-flex flex-row">
            <div class="ml-3 mr-1 mt-2">
              <div style={{ width: "49px" }}>
                <img class="img-fluid rounded-circle" src="https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjcyMDI4fQ"></img>
              </div>
            </div>
            <div class="card-body p-0 ml-2 mr-1 mt-2 d-flex flex-column">
              <div>
                <span class="d-flex flex-row">
                  <span class="font-weight-bold">{tweetDetails.name}</span>
                  <span class="font-weight-light">&nbsp;&nbsp; @{tweetDetails.username}</span>
                </span>
              </div>
              <div class="d-flex flex-column">
                <div>
                  <p class="card-text mt-1 mb-1 mr-4" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1rem" }}>
                    {tweet}
                </p>
                </div>
                <div class="d-flex flex-row justify-content-between mt-3 mb-2 mr-4">
                  <div>
                    <button class="btn btn-info btn-sm" onClick={(event) => onLike(event)}>Like</button>
                  </div>
                  <div>
                    <button class="btn btn-info btn-sm" onClick={(event) => onUnretweet(event)}>Retweeted</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  //my tweets liked
  else if (tweet !== '' && source === 'homepage' && likedTweets.includes(tweetId)) {

    return (

      <div class="container p-0">
        <div class="card p-0 m-0 mt-2 mx-auto" style={{ maxWidth: "600px" }}>
          <div class="d-flex flex-row">
            <div class="ml-3 mr-1 mt-2">
              <div style={{ width: "49px" }}>
                <img class="img-fluid rounded-circle" src="https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjcyMDI4fQ"></img>
              </div>
            </div>
            <div class="card-body p-0 ml-2 mr-1 mt-2 d-flex flex-column">
              <div>
                <span class="d-flex flex-row">
                  <span class="font-weight-bold">{name}</span>
                  <span class="font-weight-light">&nbsp;&nbsp; @{username}</span>
                </span>
              </div>
              <div class="d-flex flex-column">
                <div>
                  <p class="card-text mt-1 mb-1 mr-4" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1rem" }}>
                    {tweet}
                </p>
                </div>
                <div class="d-flex flex-row justify-content-between mt-3 mb-2 mr-4">
                  <div>
                    <button class="btn btn-info btn-sm" onClick={(event) => onUnlike(event)}>Unlike</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  //my tweets not liked
  else if (tweet !== '' && source === 'homepage') {
    return (

      <div class="container p-0">
        <div class="card p-0 m-0 mt-2 mx-auto" style={{ maxWidth: "600px" }}>
          <div class="d-flex flex-row">
            <div class="ml-3 mr-1 mt-2">
              <div style={{ width: "49px" }}>
                <img class="img-fluid rounded-circle" src="https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjcyMDI4fQ"></img>
              </div>
            </div>
            <div class="card-body p-0 ml-2 mr-1 mt-2 d-flex flex-column">
              <div>
                <span class="d-flex flex-row">
                  <span class="font-weight-bold">{name}</span>
                  <span class="font-weight-light">&nbsp;&nbsp; @{username}</span>
                </span>
              </div>
              <div class="d-flex flex-column">
                <div>
                  <p class="card-text mt-1 mb-1 mr-4" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1rem" }}>
                    {tweet}
                </p>
                </div>
                <div class="d-flex flex-row justify-content-between mt-3 mb-2 mr-4">
                  <div>
                    <button class="btn btn-info btn-sm" onClick={(event) => onLike(event)}>Like</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  else if (liked) {
    return (

      <div class="container p-0">
        <div class="card p-0 m-0 mt-2 mx-auto" style={{ maxWidth: "600px" }}>
          <div class="d-flex flex-row">
            <div class="ml-3 mr-1 mt-2">
              <div style={{ width: "49px" }}>
                <img class="img-fluid rounded-circle" src="https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjcyMDI4fQ"></img>
              </div>
            </div>
            <div class="card-body p-0 ml-2 mr-1 mt-2 d-flex flex-column">
              <div>
                <span class="d-flex flex-row">
                  <span class="font-weight-bold">{tweetDetails.name}</span>
                  <span class="font-weight-light">&nbsp;&nbsp; @{tweetDetails.username}</span>
                </span>
              </div>
              <div class="d-flex flex-column">
                <div>
                  <p class="card-text mt-1 mb-1 mr-4" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1rem" }}>
                    {tweet}
                </p>
                </div>
                <div class="d-flex flex-row justify-content-between mt-3 mb-2 mr-4">
                  <div>
                    <button class="btn btn-info btn-sm" onClick={(event) => onUnlike(event)}>Unlike</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  //my tweets liked
  else if (tweet !== '' && source === 'profile' && likedTweets.includes(tweetId) && !toRetweet) {
    return (

      <div class="container p-0">
        <div class="card p-0 m-0 mt-2 mx-auto" style={{ maxWidth: "600px" }}>
          <div class="d-flex flex-row">
            <div class="ml-3 mr-1 mt-2">
              <div style={{ width: "49px" }}>
                <img class="img-fluid rounded-circle" src="https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjcyMDI4fQ"></img>
              </div>
            </div>
            <div class="card-body p-0 ml-2 mr-1 mt-2 d-flex flex-column">
              <div>
                <span class="d-flex flex-row">
                  <span class="font-weight-bold">{tweetDetails.name}</span>
                  <span class="font-weight-light">&nbsp;&nbsp; @{tweetDetails.username}</span>
                </span>
              </div>
              <div class="d-flex flex-column">
                <div>
                  <p class="card-text mt-1 mb-1 mr-4" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1rem" }}>
                    {tweet}
                </p>
                </div>
                <div class="d-flex flex-row justify-content-between mt-3 mb-2 mr-4">
                  <div>
                    <button class="btn btn-info btn-sm" onClick={(event) => onUnlike(event)}>Unlike</button>
                  </div>
                  <div>
                    <button class="btn btn-info btn-sm" onClick={(event) => onDeleteTile(event)}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  //my tweets not liked
  else if (tweet !== '' && source === 'profile' && !toRetweet) {
    return (

      <div class="container p-0">
        <div class="card p-0 m-0 mt-2 mx-auto" style={{ maxWidth: "600px" }}>
          <div class="d-flex flex-row">
            <div class="ml-3 mr-1 mt-2">
              <div style={{ width: "49px" }}>
                <img class="img-fluid rounded-circle" src="https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjcyMDI4fQ"></img>
              </div>
            </div>
            <div class="card-body p-0 ml-2 mr-1 mt-2 d-flex flex-column">
              <div>
                <span class="d-flex flex-row">
                  <span class="font-weight-bold">{tweetDetails.name}</span>
                  <span class="font-weight-light">&nbsp;&nbsp; @{tweetDetails.username}</span>
                </span>
              </div>
              <div class="d-flex flex-column">
                <div>
                  <p class="card-text mt-1 mb-1 mr-4" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1rem" }}>
                    {tweet}
                </p>
                </div>
                <div class="d-flex flex-row justify-content-between mt-3 mb-2 mr-4">
                  <div>
                    <button class="btn btn-info btn-sm" onClick={(event) => onLike(event)}>Like</button>
                  </div>
                  <div>
                    <button class="btn btn-info btn-sm" onClick={(event) => onDeleteTile(event)}>Delete</button>
                  </div>
                </div>
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

      <div class="container p-0">
        <div class="card p-0 m-0 mt-2 mx-auto" style={{ maxWidth: "600px" }}>
          <div class="d-flex flex-row">
            <div class="ml-3 mr-1 mt-2">
              <div style={{ width: "49px" }}>
                <img class="img-fluid rounded-circle" src="https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjcyMDI4fQ"></img>
              </div>
            </div>
            <div class="card-body p-0 ml-2 mr-1 mt-2 d-flex flex-column">
              <div>
                <span class="d-flex flex-row">
                  <span class="font-weight-bold">{tweetDetails.name}</span>
                  <span class="font-weight-light">&nbsp;&nbsp; @{tweetDetails.username}</span>
                </span>
              </div>
              <div class="d-flex flex-column">
                <div>
                  <p class="card-text mt-1 mb-1 mr-4" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1rem" }}>
                    {tweet}
                </p>
                </div>
                <div class="d-flex flex-row justify-content-between mt-3 mb-2 mr-4">
                  <div>
                    <button class="btn btn-info btn-sm" onClick={(event) => onUnlike(event)}>Unlike</button>
                  </div>
                  <div>
                    <button class="btn btn-info btn-sm" onClick={(event) => onUnretweet(event)}>Retweeted</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  //not like + retweet
  else if (tweet !== '' && source === 'profile' && toRetweet) {
    return (

      <div class="container p-0">
        <div class="card p-0 m-0 mt-2 mx-auto" style={{ maxWidth: "600px" }}>
          <div class="d-flex flex-row">
            <div class="ml-3 mr-1 mt-2">
              <div style={{ width: "49px" }}>
                <img class="img-fluid rounded-circle" src="https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjcyMDI4fQ"></img>
              </div>
            </div>
            <div class="card-body p-0 ml-2 mr-1 mt-2 d-flex flex-column">
              <div>
                <span class="d-flex flex-row">
                  <span class="font-weight-bold">{tweetDetails.name}</span>
                  <span class="font-weight-light">&nbsp;&nbsp; @{tweetDetails.username}</span>
                </span>
              </div>
              <div class="d-flex flex-column">
                <div>
                  <p class="card-text mt-1 mb-1 mr-4" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1rem" }}>
                    {tweet}
                </p>
                </div>
                <div class="d-flex flex-row justify-content-between mt-3 mb-2 mr-4">
                  <div>
                    <button class="btn btn-info btn-sm" onClick={(event) => onLike(event)}>Like</button>
                  </div>
                  <div>
                    <button class="btn btn-info btn-sm" onClick={(event) => onUnretweet(event)}>Retweeted</button>
                  </div>
                </div>
              </div>
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