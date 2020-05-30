import React from 'react'

const TweetTile = ({ tweet, onDeleteTile }) => {

  if (tweet !== '') {
    return (
      <div className="container">
        {tweet}
        <button onClick={(event) => onDeleteTile(event)} type="button" className="btn btn-primary">
          Delete
            </button>
      </div>
    );
  } else {

    return <div></div>;

  }
};

export default TweetTile;