import React from 'react'
import axios from 'axios'

class SignUp extends React.Component {

    state = { name: '', email: '', username: '', password: '' }

    onCreateUser = (event) => {


        const newUser = {
            name: this.state.name,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }

        axios.post('http://localhost:3001/user/add', newUser)
    }

    render() {
        return (
            <div className="container">
                <form className="form-group" onSubmit={this.onCreateUser}>
                    <label htmlFor="Name">Name</label>
                    <input type="text" className="form-control" id="name" onChange={(event) => this.setState({name: event.target.value})} />

                    <label htmlFor="Email">Email</label>
                    <input type="email" className="form-control" id="email" onChange={(event) => this.setState({email: event.target.value})} />

                    <label htmlFor="Username">Username</label>
                    <input type="username" className="form-control" id="username" onChange={(event) => this.setState({username: event.target.value})} />

                    <label htmlFor="Password">Password</label>
                    <input type="password" className="form-control" id="password" onChange={(event) => this.setState({password: event.target.value})} />

                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUp