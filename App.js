import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Layout } from './Components/layout/Layout'
import SignIn from './Components/signIn/SignIn'

function PrivateRoute(props) {
  if (sessionStorage.getItem('token')) {
    return <Route {...props} />
  }

  return <Redirect to="/login" />
}

function App() {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Layout} />
      <Route exact path="/login" component={SignIn} />
    </Switch>
  )
}

export default App
