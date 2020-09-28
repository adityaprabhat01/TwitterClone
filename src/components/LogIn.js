import React from "react"
import axios from "axios"
import { Redirect } from "react-router-dom"

class LogIn extends React.Component {
  state = {
    username: '',
    password: '',
    verifiedUser: '',
    isVerified: false,
    userId: '',
    wrongPassword: false,
    signup: false
  }

  logInUser = async (event) => {

    event.preventDefault()

    const credentials = {
      username: this.state.username,
      password: this.state.password,
    }

    const response = await axios.post('http://localhost:3001/user/login', credentials)

    if (response.data.data === false) {
      this.setState({ isVerified: false, wrongPassword: true })
    }
    else {
      this.setState({
        isVerified: true,
        verifiedUser: response.data.data[0].username,
        userId: response.data.data[0]._id,
        wrongPassword: false,
      })
    }

    return false
  }

  render() {

    //username and password is correct
    if (this.state.isVerified) {
      return (
        <Redirect
          to={{
            pathname: "/homepage",
            state: { id: this.state.userId },
          }}
        />
      )
    }

    if(this.state.signup){
      return (
          <Redirect to={{
              pathname: "/signup"
          }} />
      )
    }

    //username or password is wrong
    if (this.state.wrongPassword) {
      return (

        <div class="jumbotron d-flex flex-column align-items-center min-vh-100 bg-white p-0">
          <div class="container">

            <form class="mx-auto p-3 mt-5" style={{ maxWidth: "800", border: "2px solid #1DA1F2", borderRadius: "20px" }} onSubmit={this.logInUser}>
              <div class="pb-2">
                <span><h2>Log in to Twitter</h2></span>
              </div>
              <div class="form-group mt-3 form-font">
                <div class="bg-light rounded mt-3">
                  <div class="ml-1">
                    <span class="font-weight-light">Username</span>
                  </div>
                  <div>
                    <input type="text" class="form-control bg-light border-0 pl-1 pr-1 pb-2 pt-1 h-75 outline" onChange={(event) => this.setState({ username: event.target.value })} />
                  </div>
                  <hr class="mt-0 border-0 boundary" />
                </div>

                <div class="bg-light rounded mt-3">
                  <div class="ml-1">
                    <span class="font-weight-light">Password</span>
                  </div>
                  <div>
                    <input type="password" class="form-control bg-light border-0 pl-1 pr-1 pb-2 pt-1 h-75 outline" onChange={(event) => this.setState({ password: event.target.value })} />
                  </div>
                  <hr class="mt-0 border-0 boundary" />
                </div>

              </div>
              <button class="btn btn-lg btn-primary border-0" style={{ backgroundColor: "#1DA1F2", borderRadius: "75px" }}>Log in</button>
            </form>
          </div>
          <span>Wrong Username or Password</span>
          <p className="mt-3">
            Don't have an account?
          </p>
          <button class="btn btn-lg btn-primary border-0" style={{ backgroundColor: "#1DA1F2", borderRadius: "75px" }} onClick={event => this.setState({ signup: true })}>Sign Up</button>
        </div>


      )
    }

    return (

      <div class="jumbotron d-flex align-items-center min-vh-100 bg-white p-0">
        <div class="container">

          <form class="mx-auto p-3 mt-5" style={{ maxWidth: "800", border: "2px solid #1DA1F2", borderRadius: "20px" }} onSubmit={this.logInUser}>
            <div class="pb-2">
              <span><h2>Log in to Twitter</h2></span>
            </div>
            <div class="form-group mt-3 form-font">
              <div class="bg-light rounded mt-3">
                <div class="ml-1">
                  <span class="font-weight-light">Username</span>
                </div>
                <div>
                  <input type="text" class="form-control bg-light border-0 pl-1 pr-1 pb-2 pt-1 h-75 outline" onChange={(event) => this.setState({ username: event.target.value })} />
                </div>
                <hr class="mt-0 border-0 boundary" />
              </div>

              <div class="bg-light rounded mt-3">
                <div class="ml-1">
                  <span class="font-weight-light">Password</span>
                </div>
                <div>
                  <input type="password" class="form-control bg-light border-0 pl-1 pr-1 pb-2 pt-1 h-75 outline" onChange={(event) => this.setState({ password: event.target.value })} />
                </div>
                <hr class="mt-0 border-0 boundary" />
              </div>

            </div>
            <button class="btn btn-lg btn-primary border-0" style={{ backgroundColor: "#1DA1F2", borderRadius: "75px" }}>Log in</button>
          </form>
          <p className="mt-3">
            Don't have an account?
          </p>
          <button class="btn btn-lg btn-primary border-0" style={{ backgroundColor: "#1DA1F2", borderRadius: "75px" }} onClick={event => this.setState({ signup: true })}>Sign Up</button>
        </div>
      </div>
    )
  }
}

export default LogIn