import React from "react"
import { Redirect } from "react-router-dom"

class Landing extends React.Component {

    state = { signup: false, login:false }

    onSignIn = (event) => {
        event.preventDefault()
        
    }

    render() {

        if(this.state.signup) {
            return(
                <Redirect to={{
                    pathname: "/signup"
                }} />
            )
        }

        if(this.state.login) {
            return (
                <Redirect to={{
                    pathname: "/login"
                }} />
            )
        }

        return (
            <div class="Jumbotron d-flex align-items-center min-vh-100 bg-white p-0">
                <div class="container mt-5" style={{ backgroundColor: "#cfebfc", border: "2px solid #1DA1F2", borderRadius: "20px" }}>
                    <div class="mx-auto d-flex flex-column m-5" style={{ maxWidth: "800px" }}>

                        <div class="mx-auto" style={{ maxWidth: "400px" }}>
                            <span class="mx-auto" style={{ fontFamily: "'Cabin Condensed', sans-serif", fontSize: "2rem" }}>Welcome to My Twitter</span>
                        </div>

                        <div class="d-flex flex-row justify-content-around mt-5">
                            <div>
                                <button type="button" className="btn btn-primary btn-lg button-1" style={{ backgroundColor: "#1DA1F2", borderRadius: "75px", border: "none" }} onClick={(event) => {
                                    this.setState({ signup: true })
                                }}>Sign Up</button>
                            </div>
                            <div>
                                <button type="button" className="btn btn-primary btn-lg button-1" style={{ backgroundColor: "#1DA1F2", borderRadius: "75px", border: "none" }} onClick={(event) => {
                                    this.setState({ login: true })
                                }}>Log In</button>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        )

    }
}

export default Landing