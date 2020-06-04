import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class LogIn extends React.Component {

    state = { username: '', password: '', verifiedUser: '', isVerified: false, userId: '', wrongPassword: false }

    logInUser = async (event) => {
        event.preventDefault()

        const credentials = {
            username: this.state.username,
            password: this.state.password
        }

        const response = await axios.post('http://localhost:3001/user/login', credentials)
        console.log(response.data)
        if(response.data.data === false){
            this.setState({  isVerified: false, wrongPassword: true })
        }
        
        else {
            this.setState({ isVerified: true, verifiedUser: response.data.data[0].username, userId: response.data.data[0]._id, wrongPassword: false })
        }

        return false
    }

    render() {

        if (this.state.isVerified) {
            return <Redirect to={{
                pathname: '/homepage',
                state: { id: this.state.userId }
             }} />
        }

        if (this.state.wrongPassword) {
            return (
                <div>
                    <div className="container">
                        <form className="form-group" onSubmit={this.logInUser}>
                            <label htmlFor="Username">Username</label>
                            <input type="text" className="form-control" id="username" onChange={(event) => this.setState({ username: event.target.value })} />

                            <label htmlFor="Password">Password</label>
                            <input type="password" className="form-control" id="password" onChange={(event) => this.setState({ password: event.target.value })} />

                            <button type="submit" className="btn btn-primary" onClick={this.logInUser}>Login</button>
                        </form>
                    </div>
                    <div>Wrong Username or Password</div>
                </div>
                
            )
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