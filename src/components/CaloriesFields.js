import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";
import { Container, Col, Row, ProgressBar } from "react-bootstrap";
import "./CaloriesFields.css";

export default class CaloriesFields extends Component {
  render() {
    const { caloriesIn, activeUser } = this.props;
    const caloriesGoal = activeUser.caloriesGoal;

    const calculateCaloriesGoalPercentage = (caloriesIn, caloriesGoal) => {
      let percentage = Math.floor((caloriesIn / caloriesGoal) * 100);
      return percentage;
    };

    let now = calculateCaloriesGoalPercentage(caloriesIn, caloriesGoal);
    let progressMessage =
      activeUser.username + ", keep eating to reach your goal.";

    let progressColor = () => {
      if (now >= 100 && now < 130) {
        progressMessage =
          "Congratulations " +
          activeUser.username +
          " You have reached the goal.";
        return "success";
      } else if (now >= 130) {
        progressMessage =
          "Careful " + activeUser.username + "! You had too much food today.";
        return "danger";
      } else {
        return "info";
      }
    };

    let goalColor = () => {
      if (now >= 100) {
        return "success";
      } else {
        return "danger";
      }
    };

    return (
      <Container className="caloriesFieldsContainer">
        <Row>
          <Col>
            <Alert variant="info">Calories in: {caloriesIn} kcal</Alert>
          </Col>
          <Col>
            <Alert variant={goalColor()}>
              <span>
                Goal: <span>{caloriesGoal} kcal</span>
              </span>
            </Alert>
          </Col>
        </Row>
        <ProgressBar
          variant={progressColor()}
          className="progressBar"
          now={now}
          label={now + "%"}
        />
        <p>{progressMessage}</p>
      </Container>
    );
  }
}
