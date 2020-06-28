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
        <div class="col-8">
          <div class="input-group">
            <textarea
              class="form-control"
              onChange={this.onTextChange}
              value={this.state.text}
              rows="4"
              cols="50"
              placeholder="whats happening"
            />

          </div>
          <input
            onClick={this.onPostSubmit}
            type="button"
            className="btn btn-primary"
            value="Post"
            style={{ marginTop: "2rem" }}
          />
        </div>

      </div>
    );
  }
}

export default Tweet;
