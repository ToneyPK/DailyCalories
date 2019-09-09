import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { addFood } from "../actions/foodActions";
import { addDayCaloriesIn } from "../actions/dayActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./AddFood.css";

class AddFood extends Component {
  state = {
    foodName: "",
    foodCalories: 0,
    error: ""
  };

  onSubmit = e => {
    e.preventDefault();

    const { dayId } = this.props;

    const newFood = {
      foodName: this.state.foodName,
      foodCalories: this.state.foodCalories,
      dayId: dayId
    };

    if (this.state.foodName === "") {
      this.setState({ error: "Name field cannot be empty." });
    } else {
      this.props.addFood(newFood);
      this.props.addDayCaloriesIn(newFood);

      this.setState({
        foodName: "",
        foodCalories: 0,
        error: ""
      });
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Food Name:</Form.Label>
              <Form.Control
                value={this.state.foodName}
                type="text"
                name="foodName"
                onChange={this.onChange}
              />
              <span>{this.state.error}</span>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Calories (kcal):</Form.Label>
              <Form.Control
                value={this.state.foodCalories}
                type="number"
                name="foodCalories"
                onChange={this.onChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Button
              variant="success"
              block
              type="submit"
              className="addFoodBtn"
            >
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

AddFood.propTypes = {
  addFood: PropTypes.func.isRequired,
  addDayCaloriesIn: PropTypes.func.isRequired
};

export default connect(
  null,
  { addFood, addDayCaloriesIn }
)(AddFood);
