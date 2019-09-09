import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import PrivateRoute from "./helpers/PrivateRoute";
import isAuthenticated from "./helpers/isAuthenticated";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Provider } from "react-redux";
import history from "./helpers/history";
import store from "./store";
import "./App.css";
import "jquery";

class App extends Component {
  state = {
    isLogged: true
  };
  componentDidMount() {
    if (!isAuthenticated()) {
      this.setState({ isLogged: false });
    }
  }
  componentDidUpdate() {
    if (!this.state.isLogged) this.setState({ isLogged: true });
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute
              exact
              path="/"
              component={Dashboard}
              authed={this.state.isLogged}
            />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
