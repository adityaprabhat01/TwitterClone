import React from 'react'
import ReactDOM from 'react-dom'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Homepage from './components/Homepage'
import Profile from './components/Profile'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Main = () => (

    <Switch>
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/homepage" component={Homepage} />
      <Route exact path="/LogIn" component={LogIn} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>

)

ReactDOM.render((
    <BrowserRouter>
      <Main />
    </BrowserRouter>
), document.querySelector('#root'))
