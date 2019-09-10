import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { loginUser, getActiveUser } from "../../actions/userActions";
import PropTypes from "prop-types";
import "./Login.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  };

  componentDidUpdate() {
    this.getError();
  }

  onSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;
    this.props.loginUser(username, password);

    this.setState({
      username: "",
      password: ""
    });
  };

  guestLogin = () => {
    this.props.loginUser("guest321", "guest321");
  };

  getError = () => {
    if (this.state.error === "") {
      let error = this.props.error;
      if (error !== "") {
        this.setState({ error });
      }
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { username, password } = this.state;

    return (
      <Container className="loginContainer">
        <h1 className="mainTitle">
          <span className="titleDailyPart">Daily</span>Calories
        </h1>
        <h3 className="subtitle">Login:</h3>

        <Form className="loginForm" onSubmit={this.onSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              name="username"
              placeholder="username"
              onChange={this.onChange}
              value={username}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              name="password"
              placeholder="password"
              onChange={this.onChange}
              value={password}
            />
          </Form.Group>
          <Button
            className="loginButton"
            size="lg"
            variant="primary"
            type="submit"
          >
            Login
          </Button>
          <Button
            className="loginGuestButton"
            size="lg"
            variant="secondary"
            onClick={this.guestLogin}
          >
            Try as Guest
          </Button>
          <span className="error">{this.state.error}</span>
        </Form>
        <a className="registerLink" href="/register">
          Not registered? Click here to register now.
        </a>
      </Container>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  activeUser: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  activeUser: state.users.activeUser,
  error: state.users.error
});

export default connect(
  mapStateToProps,
  { loginUser, getActiveUser }
)(Login);
