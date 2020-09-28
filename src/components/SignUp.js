import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom"

class SignUp extends React.Component {
    state = { name: "", email: "", username: "", password: "", login: false };

    onCreateUser = (event) => {
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
        };

        const response = axios.post("http://localhost:3001/user/signup", newUser);
    };

    render() {

        if(this.state.login){
            return (
                <Redirect to={{
                    pathname: "/login"
                }} />
            )
        }

        return (
            <div class="jumbotron d-flex align-items-center min-vh-100 bg-white p-0">
                <div class="container">

                    <form class="mx-auto p-3 mt-5" style={{ maxWidth: "800", border: "2px solid #1DA1F2", borderRadius: "20px" }} onSubmit={this.onCreateUser}>
                        <div class="pb-2">
                            <span><h2>Create your account</h2></span>
                        </div>
                        <div class="form-group mt-3 form-font">
                            <div class="bg-light rounded mt-3">
                                <div class="ml-1">
                                    <span class="font-weight-light">Name</span>
                                </div>
                                <div>
                                    <input type="text" class="form-control bg-light border-0 pl-1 pr-1 pb-2 pt-1 h-75 outline" onChange={(event) => this.setState({ name: event.target.value })} />
                                </div>
                                <hr class="mt-0 border-0 boundary" />
                            </div>

                            <div class="bg-light rounded mt-3">
                                <div class="ml-1">
                                    <span class="font-weight-light">Email</span>
                                </div>
                                <div>
                                    <input type="text" class="form-control bg-light border-0 pl-1 pr-1 pb-2 pt-1 h-75 outline" onChange={(event) => this.setState({ email: event.target.value })} />
                                </div>
                                <hr class="mt-0 border-0 boundary" />
                            </div>

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
                        <button class="btn btn-lg btn-primary border-0" style={{ backgroundColor: "#1DA1F2", borderRadius: "75px" }}>Sign Up</button>
                    </form>
                    <p className="mt-3">
                        Already have an account?
                    </p>
                    <button class="btn btn-lg btn-primary border-0" style={{ backgroundColor: "#1DA1F2", borderRadius: "75px" }} onClick={event => this.setState({ login: true })}>Log In</button>
                </div>
            </div>
        );
    }
}

export default SignUp;
