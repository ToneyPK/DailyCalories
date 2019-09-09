import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addUser } from "../../actions/userActions";
import "./Register.css";

class Register extends Component {
  state = {
    username: "",
    password: "",
    passwordTwo: "",
    caloriesGoal: "",
    errors: {}
  };

  onSubmit = e => {
    e.preventDefault();

    const { username, password, passwordTwo, caloriesGoal } = this.state;

    if (password !== passwordTwo) {
      this.setState({ errors: { password: "Passwords must match!" } });
    } else if (password === "" || passwordTwo === "") {
      this.setState({
        errors: { password: "Password fields cannot be empty!" }
      });
    } else if (password.length < 6 || passwordTwo.length < 6) {
      this.setState({
        errors: { password: "Password must be longer than 6 characters!" }
      });
    } else {
      const newUser = {
        username,
        password,
        caloriesGoal
      };

      this.props.addUser(newUser);

      this.setState({
        username: "",
        password: "",
        passwordTwo: "",
        caloriesGoal: 0,
        errors: {}
      });
      window.location.href = "/login";
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const {
      username,
      password,
      passwordTwo,
      caloriesGoal,
      errors
    } = this.state;

    return (
      <Container className="registerContainer">
        <h1 className="mainTitle">
          <span className="titleDailyPart">Daily</span>Calories
        </h1>
        <h3 className="subtitle">Register:</h3>

        <Form className="registerForm" onSubmit={this.onSubmit}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label className="loginLabels">Username:</Form.Label>
                <Form.Control
                  name="username"
                  value={username}
                  onChange={this.onChange}
                  type="text"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label className="loginLabels">
                  Daily Calories Goal:
                </Form.Label>
                <Form.Control
                  name="caloriesGoal"
                  value={caloriesGoal}
                  onChange={this.onChange}
                  type="number"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group>
                <Form.Label className="loginLabels">Password:</Form.Label>
                <Form.Control
                  name="password"
                  value={password}
                  onChange={this.onChange}
                  type="password"
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Label className="loginLabels">
                  Repeat Password:
                </Form.Label>
                <Form.Control
                  name="passwordTwo"
                  value={passwordTwo}
                  onChange={this.onChange}
                  type="password"
                />
              </Form.Group>
            </Col>
          </Row>
          <p>{errors.password}</p>
          <Button
            className="loginButton"
            size="lg"
            variant="primary"
            type="submit"
          >
            Register
          </Button>
        </Form>
        <a className="registerLink" href="/login">
          Already registered? Click here to log in now.
        </a>
      </Container>
    );
  }
}
Register.propTypes = {
  addUser: PropTypes.func.isRequired
};

export default connect(
  null,
  { addUser }
)(Register);
