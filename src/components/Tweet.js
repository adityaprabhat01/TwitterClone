import React from 'react'

class Tweet extends React.Component {
  state = { text: "" };

  onPostSubmit = (event) => {
    event.preventDefault();
    this.props.onPostSubmit(this.state.text);
  };

  onTextChange = (event) => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <div class="mx-auto" style={{ maxWidth: "600px" }}>
          <div class="form-group">
            <textarea class="form-control" onChange={this.onTextChange} value={this.state.text} rows="4" cols="50" placeholder="whats happening"/>
            <button className="btn btn-primary btn-lg mt-2 border-0" onClick={this.onPostSubmit} style={{ backgroundColor: "#1DA1F2", borderRadius: "75px" }}>Post</button>
          </div>
        </div>

      </div>
    );
  }
}

export default Tweet;
