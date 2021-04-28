import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom"
import React from 'react'
import UsersHome from "./user/UsersHome"
import About from "./About"
import User from "./user/User"
import Navbar from "./Navbar"
import RouteNoMatch from "./RouteNoMatch"
import Divisas from "./divisas/divisas"
import figuras from "./divisas/figuras"

class App extends React.Component {

  constructor(props) {
    super(props)
    const loggedUserData = document.querySelector('#user-data').dataset
    this.state = {
      loggedUser: {
        name: loggedUserData.username,
        isAdmin: loggedUserData.isAdmin === 'true'
      }
    }
  }

  render() {
    return (
      <Router>
        <Navbar loggedUser={this.state.loggedUser}/>
        <Switch>
          <Route
            exact path="/"
            render={() => <Redirect to="/users" />}
          />
          <Route path="/users" exact={true}>
            <UsersHome loggedUser={this.state.loggedUser}/>
          </Route>
          <Route path="/users/create" exact={true} component={User}/>
          <Route path="/users/:id" component={User}/>
          <Route path="/about" exact={true} component={About}/>
          <Route path="/divisas" exact={true} component={Divisas}/>
          <Route path="/figuras" exact={true} component={figuras}/>
          <Route path="*">
            <RouteNoMatch />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App
