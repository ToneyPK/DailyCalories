import React, { Component } from "react";
import { connect } from "react-redux";
import { logOutUser } from "../actions/userActions";
import {
  Button,
  Row,
  Col,
  Container,
  OverlayTrigger,
  Popover
} from "react-bootstrap";
import "./Menu.css";

class Menu extends Component {
  render() {
    const onClick = () => {
      this.props.logOutUser();
    };

    return (
      <Container className="container">
        <Row>
          <Col>
            <h1 className="mainTitle">
              <span className="titleDailyPart">Daily</span>Calories
            </h1>
          </Col>
          <Col className="logoutCol">
            <Button className="logoutButton" variant="light" onClick={onClick}>
              Logout
            </Button>

            <OverlayTrigger
              trigger={["hover", "click"]}
              placement="bottom"
              delay={{ hide: 400 }}
              overlay={
                <Popover>
                  A new day will be automatically created for the next day.
                </Popover>
              }
            >
              <i className="fas fa-info-circle fa-2x"></i>
            </OverlayTrigger>
          </Col>
        </Row>
        <hr />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logOutUser }
)(Menu);
