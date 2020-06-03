import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class LogIn extends React.Component {

    state = { username: '', password: '', verifiedUser: '', isVerified: false }

    logInUser = async (event) => {
        event.preventDefault()

        const credentials = {
            username: this.state.username,
            password: this.state.password
        }

        const response = await axios.post('http://localhost:3001/user/login', credentials)

        this.setState({ verifiedUser: response.data.data[0].username, isVerified: true })
        console.log(this.state.verifiedUser)
        return false
    }

    render() {

        if (this.state.isVerified) {
            //checkpoint not yet created
            //${this.state.verifiedUser}
            return <Redirect to={`/homepage`} />
        }

        return (
            <div className="container">
                <form className="form-group" onSubmit={this.logInUser}>
                    <label htmlFor="Username">Username</label>
                    <input type="text" className="form-control" id="username" onChange={(event) => this.setState({ username: event.target.value })} />

                    <label htmlFor="Password">Password</label>
                    <input type="password" className="form-control" id="password" onChange={(event) => this.setState({ password: event.target.value })} />

                    <button type="submit" className="btn btn-primary" onClick={this.logInUser}>Login</button>
                </form>
            </div>
        )
    }
}

export default LogIn