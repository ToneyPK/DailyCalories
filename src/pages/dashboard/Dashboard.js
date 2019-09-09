import React, { Component } from "react";
import Days from "../../components/Days";
import Menu from "../../components/Menu";
import { Container } from "react-bootstrap";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <Container className="dashboardContainer">
        <Menu />
        <Days />
      </Container>
    );
  }
}

export default Dashboard;
