import React from 'react'

/*

<div className="container">
        
          <div class="card mb-3 d-flex flex-row mx-auto" style={{ marginTop: "1rem" , backgroundColor: "#ffffff", maxWidth: "600px" }}>

            <div class="ml-1 mr-1" style={{ backgroundColor: "#ffffff", width: "49px", marginTop: "1rem" }}>
              <div>
                <img class="rounded-circle d-block mx-auto" style={{ height: "49px", width: "49px" }} src="https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjcyMDI4fQ"></img>
              </div>
            </div>

            <div class="card-body bg-white d-flex flex-column justify-content-between ml-1 mr-2" style={{ width: "70%", padding: "0", marginTop: "1rem" }}>
              <span class="d-inline-flex flex-row">
                <span class="font-weight-bold">{tweetDetails.name}</span>
                <span class="font-weight-light">&nbsp;&nbsp;@{tweetDetails.username}</span>
              </span>
              <div class="d-flex flex-column mt-1 mb-1">
                <p className="card-text card-text-font" style={{ marginTop: "0em", marginRight: "0em", marginBottom: "0em" }}>{tweet}</p>
                <div class="d-flex flex-row justify-content-around">
                  <button class="btn btn-primary btn-sm mt-4 mb-1" onClick={(event) => onUnlike(event)} type="button">Unlike</button>
                  <button class="btn btn-primary btn-sm mt-4 mb-1" onClick={(event) => onRetweet(event)} type="button">Retweet</button>
                </div>

              </div>
            </div>

          </div>
        
      </div>

*/
const TweetTile = ({ tweet, tweetId, name, username, tweetDetails, onDeleteTile, onLike, onUnlike, liked, source, likedTweets, retweets, onRetweet, onUnretweet, retweeted, toRetweet }) => {
  //like + not retweet
  if (tweet !== '' && source === 'homepage' && likedTweets.includes(tweetId) && toRetweet && !retweets.includes(tweetId)) {
    return (





      <div class="container">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu. Sapien faucibus et molestie ac feugiat sed lectus. Massa id neque aliquam vestibulum morbi blandit cursus risus. Ullamcorper sit amet risus nullam eget felis eget. Ac ut consequat semper viverra nam libero justo laoreet. Tortor id aliquet lectus proin nibh nisl. Auctor neque vitae tempus quam pellentesque nec nam. Non odio euismod lacinia at quis. Scelerisque purus semper eget duis at tellus at. Vel elit scelerisque mauris pellentesque pulvinar. Sodales ut eu sem integer vitae justo. Facilisi etiam dignissim diam quis enim. Egestas diam in arcu cursus. Neque ornare aenean euismod elementum nisi quis eleifend quam.
                </p>
                </div>

                <div class="d-flex flex-row justify-content-between mt-3 mb-2 mr-4">
                  <div>
                    <button class="btn btn-info btn-sm">Like</button>
                  </div>
                  <div>
                    <button class="btn btn-info btn-sm">Retweet</button>
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