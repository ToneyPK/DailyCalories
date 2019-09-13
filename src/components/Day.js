import React, { Component } from "react";
import CaloriesFields from "./CaloriesFields";
import FoodManager from "./FoodManager";
import { Row, Col } from "react-bootstrap";
import "./Day.css";
import PropTypes from "prop-types";
import moment from "moment";

class Day extends Component {
  getDate = date => {
    if (
      moment(date).format("MMMM Do YYYY") === moment().format("MMMM Do YYYY")
    ) {
      return "Today";
    } else {
      return moment(date).format("MMMM Do YYYY");
    }
  };

  render() {
    const { id, date, caloriesIn } = this.props.day;
    const { activeUser } = this.props;

    return (
      <div>
        <Row className="dayNavigation">
          <Col>
            <h3>{this.getDate(date)}</h3>
          </Col>
        </Row>
        <CaloriesFields caloriesIn={caloriesIn} activeUser={activeUser} />
        <FoodManager dayId={id} />
      </div>
    );
  }
}

Day.propTypes = {
  day: PropTypes.object.isRequired
};

export default Day;
